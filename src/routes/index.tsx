import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { HomeHero } from "@/components/site/HomeHero";
import { SiteContactSection } from "@/components/site/SiteContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StepsTimeline } from "@/components/site/StepsTimeline";
import { useAnchorScroll } from "@/hooks/use-anchor-scroll";
import { useReveal } from "@/hooks/use-reveal";
import s1 from "@/assets/s1.webp";
import s2 from "@/assets/s2.webp";
import s3 from "@/assets/s3.webp";
import s4 from "@/assets/s4.webp";
import sAnticor from "@/assets/s-anticor.webp";
import sMaintenance from "@/assets/s-maintenance.webp";
import { ContactModal } from "@/components/ContactModal";
import { ServicePriceBadge } from "@/components/site/ServiceOfferCardsSection";
import { COMPANY } from "@/lib/company";
import { buildHead } from "@/lib/seo";

const { prices } = COMPANY;

export const Route = createFileRoute("/")({
  head: () => buildHead("/"),
  component: Index,
});

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
  useAnchorScroll();

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <SiteHeader variant="home" onOpenModal={() => setIsModalOpen(true)} />

      <HomeHero onOpenModal={() => setIsModalOpen(true)} />

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

      <StepsTimeline />

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
                    decoding="async"
                    width={1024}
                    height={768}
                    sizes="(min-width: 768px) 50vw, 100vw"
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
