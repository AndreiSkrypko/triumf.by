import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from "../../telegram-bot.config";

export type LeadPayload = {
  name: string;
  phone: string;
  message?: string;
  source?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatLeadMessage(payload: LeadPayload) {
  const lines = [
    "<b>Новая заявка — Triumph Auto</b>",
    "",
    `<b>Имя:</b> ${escapeHtml(payload.name)}`,
    `<b>Телефон:</b> ${escapeHtml(payload.phone)}`,
  ];
  if (payload.message?.trim()) {
    lines.push(`<b>Сообщение:</b> ${escapeHtml(payload.message.trim())}`);
  }
  if (payload.source?.trim()) {
    lines.push(`<b>Источник:</b> ${escapeHtml(payload.source.trim())}`);
  }
  lines.push("", `<i>${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Minsk" })}</i>`);
  return lines.join("\n");
}

export async function sendLeadToTelegram(payload: LeadPayload) {
  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  if (!name || !phone) {
    throw new Error("INVALID_PAYLOAD");
  }

  const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: formatLeadMessage({ ...payload, name, phone }),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Telegram API error:", response.status, body);
    throw new Error("TELEGRAM_FAILED");
  }
}
