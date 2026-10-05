<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

/** Telegram @triumph_auto_service_bot — keep in sync with telegram-bot.config.ts */
const TELEGRAM_BOT_TOKEN = '8133352544:AAGiGnAvG_pxIeC3J-fenxJejdzRe9aLHww';
const TELEGRAM_CHAT_ID = '962882460';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$botToken = TELEGRAM_BOT_TOKEN;
$chatId = TELEGRAM_CHAT_ID;

$raw = file_get_contents('php://input');
$data = json_decode($raw !== false ? $raw : '', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_payload']);
    exit;
}

$name = trim((string) ($data['name'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$message = isset($data['message']) ? trim((string) $data['message']) : '';
$source = isset($data['source']) ? trim((string) $data['source']) : '';

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_payload']);
    exit;
}

function escape_html(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

$lines = [
    '<b>Новая заявка — Triumph Auto</b>',
    '',
    '<b>Имя:</b> ' . escape_html($name),
    '<b>Телефон:</b> ' . escape_html($phone),
];

if ($message !== '') {
    $lines[] = '<b>Сообщение:</b> ' . escape_html($message);
}
if ($source !== '') {
    $lines[] = '<b>Источник:</b> ' . escape_html($source);
}

$tz = new DateTimeZone('Europe/Minsk');
$now = (new DateTimeImmutable('now', $tz))->format('d.m.Y, H:i:s');
$lines[] = '';
$lines[] = '<i>' . $now . '</i>';

$payload = json_encode([
    'chat_id' => $chatId,
    'text' => implode("\n", $lines),
    'parse_mode' => 'HTML',
    'disable_web_page_preview' => true,
], JSON_UNESCAPED_UNICODE);

if ($payload === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

$url = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';

if (function_exists('curl_init')) {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_POSTFIELDS => $payload,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
    ]);
    $responseBody = curl_exec($ch);
    $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    if ($responseBody === false) {
        error_log('Telegram cURL error: ' . curl_error($ch));
    }
    curl_close($ch);
} else {
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => $payload,
            'timeout' => 15,
            'ignore_errors' => true,
        ],
    ]);
    $responseBody = @file_get_contents($url, false, $context);
    $httpCode = 0;
    foreach ($http_response_header ?? [] as $line) {
        if (preg_match('#^HTTP/\S+\s+(\d{3})#', $line, $m)) {
            $httpCode = (int) $m[1];
        }
    }
}

if ($responseBody === false || $httpCode < 200 || $httpCode >= 300) {
    error_log('Telegram API error: HTTP ' . $httpCode . ' ' . (string) $responseBody);
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'send_failed']);
    exit;
}

echo json_encode(['ok' => true]);
