# Деплой на hoster.by

Сайт — статическое SPA (папка `dist/` после сборки) + PHP-обработчик заявок `/api/lead`.

## 1. Сборка на компьютере

```bash
npm ci
# при другом домене укажите его здесь:
set SITE_URL=https://triumf.by
npm run build:hosting
```

Новые фото: положите `.jpg` в `src/assets/`, выполните `npm run optimize:images` (конвертация в WebP), затем `npm run build`.

В `dist/` окажутся `index.html`, ресурсы, `robots.txt`, `sitemap.xml`, `.htaccess` и `api/lead.php`.

## 2. Загрузка на hoster.by

1. В панели hoster.by откройте каталог сайта (обычно `public_html` или `www` для домена).
2. **Очистите** старые файлы сайта (кроме служебных, если хостинг просит их оставить).
3. Загрузите **содержимое** папки `dist/` (не саму папку `dist`, а файлы внутри — `index.html` должен лежать в корне сайта).
4. Убедитесь, что на хостинге включён **PHP** (на тарифах hoster.by он есть по умолчанию).

## 3. Telegram-заявки

Ничего настраивать на сервере не нужно: токен бота @triumph_auto_service_bot и ID чата прописаны прямо в коде.

- `public/api/lead.php` — отправка на hoster.by (PHP);
- `telegram-bot.config.ts` — отправка при `npm run dev` и на Vercel.

Если меняете бота или чат, обновите значения в обоих файлах.

Формы на сайте отправляют POST на `/api/lead`; `.htaccess` перенаправляет запрос на `api/lead.php`.

## 4. SSL и домен

В панели hoster.by включите бесплатный SSL (Let's Encrypt) для домена. После выпуска сертификата проверьте:

- https://ваш-домен/
- https://ваш-домен/contacts
- https://ваш-домен/sitemap.xml
- https://ваш-домен/robots.txt
- https://ваш-домен/google5b91edc1a78be70d.html (Google Search Console)
- https://ваш-домен/yandex_65265188e53bcc63.html (Яндекс.Вебмастер)

## 5. Проверка после выкладки

- Прямые ссылки на внутренние страницы (например `/services/bodywork`) открываются без 404 — работает правило SPA в `.htaccess`.
- Отправка формы на главной или в модальном окне → редирект на `/thank-you`, заявка приходит в Telegram.
- В [Google Search Console](https://search.google.com/search-console) добавьте сайт и укажите sitemap: `https://ваш-домен/sitemap.xml`.

## SEO

При `npm run build` для каждой страницы генерируется HTML-оболочка с title, description, canonical, Open Graph, Twitter Card и JSON-LD (AutoRepair, Service, BreadcrumbList). Превью ссылок в Telegram/VK и индексация не зависят только от JavaScript.

Проверка: откройте исходный код страницы `view-source:https://triumf.by/services/bodywork` — в `<head>` должны быть `og:image` и `application/ld+json`.

## Vercel / Lovable

Для Vercel по-прежнему используется `api/lead.ts`; PHP на Vercel не нужен. Команда `npm run build` (без `:hosting`) достаточна для облачного деплоя.
