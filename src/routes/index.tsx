import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import { SiteContactSection } from "@/components/site/SiteContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { useReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import sAnticor from "@/assets/s-anticor.jpg";
import sMaintenance from "@/assets/s-maintenance.jpg";
import { ContactModal } from "@/components/ContactModal";
import { ServicePriceBadge } from "@/components/site/ServiceOfferCardsSection";
import { COMPANY } from "@/lib/company";

const { prices } = COMPANY;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triumph Auto Service — авто под ключ из США и Канады" },
      { name: "description", content: "Пригон авто из США/Канады, кузовной ремонт, покраска, антикор, слесарные работы и обслуживание. Автомобиль под ключ в одной компании." },
      { property: "og:title", content: "Triumph Auto Service — авто под ключ" },
      { property: "og:description", content: "Пригон, ремонт, покраска, слесарка и сопровождение — всё в одних руках." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { t: "Пригон", d: "Аукцион, торги, доставка" },
  { t: "Кузовной ремонт", d: "Стапель, сварка" },
  { t: "Покраска", d: "Камера и подбор цвета" },
  { t: "Слесарные", d: "Подвеска, ДВС, ГРМ" },
  { t: "Антикор", d: "Защита кузова" },
  { t: "Сопровождение", d: "ТО на весь срок" },
];

const blocks = [
  {
    img: s1,
    t: "Авто из США и Канады",
    d: "Подбор на аукционах Copart, IAAI и Manheim. Работаем по договору, прозрачный расчёт до покупки.",
    l: ["Подбор и проверка VIN", "Copart · IAAI · Manheim", "Доставка и таможня"],
    link: "/services/usa-cars",
    priceFrom: prices.usaSelectionByn,
  },
  {
    img: s2,
    t: "Кузовные работы",
    d: "Стапель, сварка, замена элементов и рихтовка. Подбор и покупка кузовных запчастей — с нашей стороны.",
    l: ["Стапель и сварка", "Подбор запчастей", "Рихтовка"],
    link: "/services/bodywork",
    priceFrom: prices.bodyRepairFromByn,
  },
  {
    img: s3,
    t: "Малярные работы",
    d: "Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска.",
    l: ["Подбор цвета", "Покраска в камере", "Полировка и защита"],
    link: "/services/paintwork",
    priceFrom: prices.fullPaintFromByn,
  },
  {
    img: s4,
    t: "Слесарные работы",
    d: "Тормоза, рулевое, подвеска, двигатель, замена масла, техжидкостей и ГРМ. Подбор и покупка слесарных запчастей — с нашей стороны.",
    l: ["Тормоза и подвеска", "ДВС и ГРМ", "Подбор запчастей"],
    link: "/services/mechanical",
    priceFrom: prices.mechanicalFromByn,
  },
  {
    img: sAnticor,
    t: "Антикоррозийная обработка",
    d: "Защита днища, арок и скрытых полостей от коррозии. Особенно актуально для авто после пригона из США.",
    l: ["Скрытые полости", "Днище и арки", "По договору"],
    link: "/services/anticorrosion",
    priceFrom: prices.anticorFromByn,
  },
  {
    img: sMaintenance,
    t: "Сопровождение авто",
    d: "Обслуживаем автомобиль весь срок владения: масла, фильтры, плановое ТО, сезонные работы.",
    l: ["Масла и фильтры", "Плановое ТО", "Сезонное обслуживание"],
    link: "/services/maintenance",
  },
];

const marquee = ["Copart · IAAI · Manheim", "Работаем по договору", "Кузовной ремонт и сварка", "Антикоррозийная обработка", "Подбор запчастей", "Слесарные работы", "Плановое ТО", "Авто под ключ"];

const facts = [
  ["6", "этапов в одних руках"],
  ["100%", "по договору и смете"],
  ["3 года", "гарантия на работы"],
  ["24/7", "фотоотчёт по этапам"],
];

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <SiteHeader variant="home" onOpenModal={() => setIsModalOpen(true)} />

      <section id="top" className="grain relative min-h-screen overflow-hidden">
        <img
          src={hero}
          alt="Dodge Challenger в премиальном сервисе Triumph Auto"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full scale-105 object-cover object-[62%_center] sm:object-[58%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/88 to-navy/30 md:via-navy/82 md:to-navy/15" />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/15 to-navy/70" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-red-950/10 to-red-900/25 mix-blend-soft-light" />
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
          <div data-reveal className="reveal flex flex-wrap items-center gap-3 text-gold sm:gap-4">
            <span className="h-px w-10 bg-linear-to-r from-transparent to-gold sm:w-14" />
            <span className="eyebrow">Авто из США и Канады</span>
          </div>

          <h1 data-reveal style={{ transitionDelay: "120ms" }} className="reveal mt-8 max-w-5xl font-display text-[clamp(2.8rem,8vw,7.5rem)] font-bold uppercase leading-[0.95] tracking-tight">
            Автомобиль
            <br />
            <span className="gold-text">под ключ</span>
          </h1>

          <p data-reveal style={{ transitionDelay: "240ms" }} className="reveal mt-9 max-w-xl text-lg leading-relaxed text-navy-foreground/75 md:text-xl">
            Покупка авто из США — кузовной ремонт — покраска — полировка. Один сервис и одна ответственность на всём пути.
          </p>

          <div data-reveal style={{ transitionDelay: "340ms" }} className="reveal mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-11 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="sheen w-full rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-navy shadow-xl shadow-gold/25 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-gold/35 sm:w-auto sm:px-11 sm:py-4 sm:tracking-[0.14em]"
            >
              Подобрать авто
            </button>
            <a
              href="#services"
              className="w-full rounded-sm border border-navy-foreground/25 px-8 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-navy-foreground/85 backdrop-blur-sm transition hover:border-gold/70 hover:bg-gold/5 hover:text-gold sm:w-auto sm:px-11 sm:py-4 sm:tracking-[0.14em]"
            >
              Наши услуги
            </a>
          </div>

          <div data-reveal style={{ transitionDelay: "460ms" }} className="reveal mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy-foreground/10 bg-navy-foreground/10 backdrop-blur-md sm:mt-20 sm:grid-cols-3">
            {[
              ["Аукционы", "Copart · IAAI · Manheim"],
              ["Договор", "работаем официально"],
              ["Гарантия", "3 года на работы"],
            ].map(([a, b]) => (
              <div key={a} className="bg-navy/60 px-4 py-4 sm:px-6 sm:py-5">
                <div className="font-display text-base font-bold uppercase tracking-wide text-gold sm:text-lg">{a}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.12em] text-navy-foreground/55">{b}</div>
              </div>
            ))}
          </div>
        </div>

        <a href="#steps" aria-label="Листать вниз" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-foreground/50 transition hover:text-gold md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-linear-to-b from-gold to-transparent" />
        </a>
      </section>

      <div className="overflow-hidden border-y border-gold/15 bg-navy py-3 sm:py-4">
        <div className="marquee-track flex w-max gap-6 whitespace-nowrap sm:gap-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-6 font-display text-xs font-semibold uppercase tracking-[0.2em] text-navy-foreground/40 sm:gap-10 sm:text-sm sm:tracking-[0.3em]">
              {m}
              <span className="h-1 w-1 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>

      <section id="steps" className="section-y relative mx-auto max-w-7xl px-4 sm:px-6">
        <div data-reveal className="reveal eyebrow text-gold">Процесс</div>
        <h2 data-reveal style={{ transitionDelay: "100ms" }} className="reveal mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
          Шесть этапов — <span className="gold-text">одна команда</span>
        </h2>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((s, i) => (
            <li
              key={s.t}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group relative bg-navy px-5 py-8 transition-colors duration-300 hover:bg-navy-foreground/5 sm:px-7 sm:py-10"
            >
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              <div className="font-display text-5xl font-bold text-navy-foreground/10 transition-colors duration-300 group-hover:text-gold/70">0{i + 1}</div>
              <div className="mt-4 font-display text-lg font-semibold uppercase tracking-wide">{s.t}</div>
              <div className="mt-2 text-sm text-navy-foreground/50">{s.d}</div>
            </li>
          ))}
        </ol>
      </section>

      <section id="services" className="section-y relative mx-auto max-w-7xl px-4 sm:px-6">
        <div data-reveal className="reveal eyebrow text-gold">Полный цикл</div>
        <h2 data-reveal style={{ transitionDelay: "100ms" }} className="reveal mt-4 max-w-4xl font-display text-3xl font-bold uppercase leading-[1.05] sm:text-4xl md:text-6xl">
          Пригон, ремонт, покраска — <span className="gold-text">готово</span>
        </h2>

        <div className="mt-12 space-y-16 sm:mt-20 sm:space-y-24 md:space-y-32">
          {blocks.map((b, i) => (
            <Link
              to={b.link}
              key={b.t}
              data-reveal
              className="reveal group grid items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-16"
            >
              <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
                <div className="pointer-events-none absolute -inset-2 rounded-sm border border-gold/20 transition duration-500 group-hover:-inset-4 group-hover:border-gold/50 sm:-inset-3 sm:group-hover:-inset-5" />
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={b.img}
                    alt={b.t}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-4/3 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/10 to-transparent" />
                  {"priceFrom" in b && b.priceFrom != null ? (
                    <div className="absolute bottom-4 left-4 rounded-sm border border-gold/35 bg-navy/85 px-4 py-3 backdrop-blur-sm sm:bottom-5 sm:left-5 sm:px-5">
                      <ServicePriceBadge amount={b.priceFrom} />
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-gold sm:text-3xl md:text-4xl">{b.t}</h3>
                <div className="mt-5 h-px w-20 bg-linear-to-r from-gold to-transparent transition-all duration-500 group-hover:w-32" />
                <p className="mt-6 text-lg leading-relaxed text-navy-foreground/65">{b.d}</p>
                <ul className="mt-7 space-y-3">
                  {b.l.map((x) => (
                    <li key={x} className="flex items-center gap-3 text-navy-foreground/85">
                      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                      {x}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-gold">
                  Подробнее
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="facts" className="relative overflow-hidden border-y border-navy-foreground/10 bg-navy-foreground/[0.03]">
        <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]" />
        <div className="section-y relative mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:gap-10 sm:px-6 lg:grid-cols-4">
          {facts.map(([a, b], i) => (
            <div key={a} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="reveal border-l border-gold/40 pl-5 sm:pl-6">
              <div className="gold-text font-display text-4xl font-bold uppercase sm:text-5xl">{a}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.12em] text-navy-foreground/55">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y mx-auto max-w-7xl px-4 sm:px-6">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-sm border border-gold/25 bg-linear-to-br from-navy-foreground/[0.06] to-transparent p-6 sm:p-10 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl">Купили авто не через нас?</h2>
              <p className="mt-3 max-w-xl text-navy-foreground/65">Негде ремонтироваться — приезжайте к нам. Возьмём машину в работу на любом этапе.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="sheen w-full rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-11 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-xl shadow-gold/20 transition hover:-translate-y-0.5 sm:w-auto sm:shrink-0"
            >
              Записаться
            </button>
          </div>
        </div>
      </section>

      <SiteContactSection
        titleBefore="Рассчитаем стоимость"
        goldPhrase="авто под ключ"
        description="Оставьте контакты — перезвоним в течение 15 минут и подготовим прозрачный расчёт до покупки."
      />

      <SiteFooter />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
