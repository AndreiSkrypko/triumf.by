import { COMPANY } from "./company.ts";

export const SITE = {
  name: COMPANY.name,
  tagline: "Авто под ключ из США и Канады",
  locale: "ru_BY",
  defaultDescription:
    "Пригон авто из США и Канады, кузовной ремонт, покраска, антикор, слесарные работы и обслуживание. Один сервис — полный цикл «под ключ» в Минске.",
  ogImagePath: "/og-image.webp",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterHandle: undefined as string | undefined,
} as const;

export function getSiteOrigin() {
  const viteUrl = typeof import.meta !== "undefined" ? import.meta.env?.VITE_SITE_URL : undefined;
  const nodeUrl =
    typeof process !== "undefined" && process.env
      ? process.env.SITE_URL || process.env.VITE_SITE_URL
      : undefined;
  return String(viteUrl || nodeUrl || "https://triumf.by").replace(/\/$/, "");
}

export type SeoPageConfig = {
  path: string;
  title: string;
  description: string;
  /** Open Graph title override */
  ogTitle?: string;
  ogDescription?: string;
  ogImagePath?: string;
  noindex?: boolean;
  /** Breadcrumb labels from home → current */
  breadcrumb?: readonly string[];
  /** schema.org Service name for service pages */
  serviceType?: string;
};

export const SEO_PAGES = {
  "/": {
    path: "/",
    title: "Triumph Auto Service — авто под ключ из США и Канады | Минск",
    description:
      "Пригон авто из США/Канады, кузовной ремонт, покраска, антикор, слесарные работы и ТО. Автомобиль под ключ в одной компании в Минске. Работаем по договору, гарантия 3 года.",
    ogTitle: "Triumph Auto Service — авто под ключ",
    ogDescription: "Пригон, ремонт, покраска, слесарка и сопровождение — всё в одних руках в Минске.",
  },
  "/contacts": {
    path: "/contacts",
    title: "Контакты автосервиса Triumph Auto | Минск, Октябрьская 16к2",
    description: `Адрес: ${COMPANY.addressLine}. Телефон ${COMPANY.phone}. УНП ${COMPANY.unp}. Заявка на сайте — перезвоним за 15 минут.`,
    breadcrumb: ["Главная", "Контакты"],
  },
  "/privacy": {
    path: "/privacy",
    title: "Политика обработки персональных данных — Triumph Auto Service",
    description: "Политика обработки персональных данных Triumph Auto Service в соответствии с законодательством Республики Беларусь.",
    breadcrumb: ["Главная", "Политика ПДн"],
  },
  "/consent": {
    path: "/consent",
    title: "Согласие на обработку персональных данных — Triumph Auto Service",
    description: "Текст согласия пользователя на обработку персональных данных при отправке заявки на сайте Triumph Auto Service.",
    breadcrumb: ["Главная", "Согласие на обработку"],
  },
  "/thank-you": {
    path: "/thank-you",
    title: "Спасибо за заявку — Triumph Auto Service",
    description: "Ваша заявка принята. Мы свяжемся с вами в ближайшее время.",
    noindex: true,
  },
  "/services/usa-cars": {
    path: "/services/usa-cars",
    title: "Авто из США и Канады под ключ | Triumph Auto, Минск",
    description:
      "Подбор авто на Copart, IAAI и Manheim. Проверка VIN, торги, доставка, растаможка и подготовка. Работаем по договору — прозрачный расчёт до покупки.",
    serviceType: "Пригон автомобилей из США и Канады",
    breadcrumb: ["Главная", "Авто из США и Канады"],
  },
  "/services/bodywork": {
    path: "/services/bodywork",
    title: "Кузовной ремонт в Минске | Triumph Auto Service",
    description:
      "Кузовной ремонт после ДТП: стапель, геометрия, рихтовка, сварка. Подбор и закуп кузовных запчастей. Гарантия на работы 3 года.",
    serviceType: "Кузовной ремонт",
    breadcrumb: ["Главная", "Кузовной ремонт"],
  },
  "/services/paintwork": {
    path: "/services/paintwork",
    title: "Покраска и малярные работы | Triumph Auto, Минск",
    description:
      "Покраска в камере, подбор цвета, локальный ремонт ЛКП, полировка и защита. PPG, Glasurit — заводской блеск и стойкость.",
    serviceType: "Малярные работы",
    breadcrumb: ["Главная", "Малярные работы"],
  },
  "/services/mechanical": {
    path: "/services/mechanical",
    title: "Слесарный ремонт и диагностика | Triumph Auto Service",
    description:
      "Ремонт подвески, тормозов, ДВС, замена ГРМ, компьютерная диагностика. Подбор запчастей, подъёмник, профессиональное оборудование.",
    serviceType: "Слесарные работы",
    breadcrumb: ["Главная", "Слесарные работы"],
  },
  "/services/anticorrosion": {
    path: "/services/anticorrosion",
    title: "Антикоррозийная обработка авто | Triumph Auto, Минск",
    description: `Антикор кузова и скрытых полостей, днище и арки. От ${COMPANY.prices.anticorFromByn} BYN. Актуально для авто после пригона из США.`,
    serviceType: "Антикоррозийная обработка",
    breadcrumb: ["Главная", "Антикор"],
  },
  "/services/maintenance": {
    path: "/services/maintenance",
    title: "Сопровождение и ТО автомобиля | Triumph Auto Service",
    description:
      "Обслуживание на весь срок владения: масла, фильтры, плановое ТО, сезонная подготовка. История сервиса и напоминания о регламенте.",
    serviceType: "Сопровождение и техническое обслуживание",
    breadcrumb: ["Главная", "Сопровождение и ТО"],
  },
} as const satisfies Record<string, SeoPageConfig>;

export type SeoPath = keyof typeof SEO_PAGES;

function absoluteUrl(path: string) {
  const origin = getSiteOrigin();
  if (path === "/") return `${origin}/`;
  return `${origin}${path}`;
}

function businessId(origin: string) {
  return `${origin}/#business`;
}

export function localBusinessJsonLd(origin = getSiteOrigin()) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": businessId(origin),
    name: SITE.name,
    description: SITE.defaultDescription,
    url: origin,
    image: absoluteUrl(SITE.ogImagePath),
    telephone: COMPANY.phoneHref.replace("tel:", ""),
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ул. Октябрьская, 16к2",
      addressLocality: "Минск",
      addressCountry: "BY",
    },
    areaServed: {
      "@type": "City",
      name: "Минск",
    },
    priceRange: "$$",
    currenciesAccepted: "BYN",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
  };
}

function webSiteJsonLd(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: SITE.name,
    url: origin,
    description: SITE.defaultDescription,
    inLanguage: "ru-BY",
    publisher: { "@id": businessId(origin) },
  };
}

function breadcrumbJsonLd(path: string, labels: readonly string[], origin: string) {
  const items = labels.map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name,
    item: index === 0 ? `${origin}/` : absoluteUrl(path),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function serviceJsonLd(page: SeoPageConfig, origin: string) {
  if (!page.serviceType) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.serviceType,
    description: page.description,
    url: absoluteUrl(page.path),
    serviceType: page.serviceType,
    provider: { "@id": businessId(origin) },
    areaServed: { "@type": "Country", name: "Беларусь" },
  };
}

export function jsonLdForPath(path: SeoPath) {
  const page = SEO_PAGES[path];
  const origin = getSiteOrigin();
  const graphs: object[] = [];

  if (path === "/") {
    graphs.push(localBusinessJsonLd(origin), webSiteJsonLd(origin));
  } else if (path === "/contacts") {
    graphs.push(localBusinessJsonLd(origin));
  }

  if (page.breadcrumb?.length) {
    graphs.push(breadcrumbJsonLd(page.path, page.breadcrumb, origin));
  }

  const service = serviceJsonLd(page, origin);
  if (service) graphs.push(service);

  return graphs;
}

export function buildHead(path: SeoPath) {
  const page = SEO_PAGES[path];
  const origin = getSiteOrigin();
  const url = absoluteUrl(page.path);
  const ogImage = absoluteUrl(page.ogImagePath ?? SITE.ogImagePath);
  const ogTitle = page.ogTitle ?? page.title;
  const ogDescription = page.ogDescription ?? page.description;

  const meta: Array<Record<string, string>> = [
    { title: page.title },
    { name: "description", content: page.description },
    { name: "author", content: SITE.name },
    { name: "theme-color", content: "#0a1628" },
  ];

  if (page.noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  } else {
    meta.push({ name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
  }

  meta.push(
    { property: "og:site_name", content: SITE.name },
    { property: "og:locale", content: SITE.locale.replace("_", "-") },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: String(SITE.ogImageWidth) },
    { property: "og:image:height", content: String(SITE.ogImageHeight) },
    { property: "og:image:alt", content: `${SITE.name} — ${SITE.tagline}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    { name: "twitter:image", content: ogImage },
  );

  if (SITE.twitterHandle) {
    meta.push({ name: "twitter:site", content: SITE.twitterHandle });
  }

  const links: Array<Record<string, string>> = [{ rel: "canonical", href: url }];

  const scripts = jsonLdForPath(path).map((data) => ({
    type: "application/ld+json",
    children: JSON.stringify(data),
  }));

  return { meta, links, scripts };
}

/** Paths that get static HTML shells after Vite build (for crawlers & link previews). */
export function getPrerenderPaths(): SeoPath[] {
  return (Object.keys(SEO_PAGES) as SeoPath[]).filter((p) => !SEO_PAGES[p].noindex);
}
