import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";
import { ContactModal } from "@/components/ContactModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triumph Auto Service — авто под ключ из США и Канады" },
      { name: "description", content: "Пригон авто из США/Канады, кузовной ремонт, покраска, слесарные работы и обслуживание. Автомобиль под ключ в одной компании." },
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
  { t: "Кузовной ремонт", d: "Стапель и геометрия" },
  { t: "Покраска", d: "Камера и подбор цвета" },
  { t: "Слесарные", d: "Ходовая, двигатель, КПП" },
  { t: "Сопровождение", d: "ТО на весь срок" },
];

const blocks = [
  { img: s1, t: "Авто из США и Канады", d: "Подбор на аукционах Copart и IAAI, проверка истории, торги, доставка и растаможка. Прозрачный расчёт до покупки.", l: ["Подбор и проверка VIN", "Участие в торгах", "Доставка и таможня"], link: "/services/usa-cars" },
  { img: s2, t: "Кузовные работы", d: "Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка.", l: ["Стапельные работы", "Замена элементов", "Рихтовка"], link: "/services/bodywork" },
  { img: s3, t: "Малярные работы", d: "Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска.", l: ["Подбор цвета", "Покраска в камере", "Полировка и защита"], link: "/services/paintwork" },
  { img: s4, t: "Слесарные работы", d: "Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона.", l: ["Диагностика", "Ходовая и тормоза", "Двигатель и КПП"], link: "/services/mechanical" },
  { img: s5, t: "Сопровождение авто", d: "Обслуживаем автомобиль весь срок владения: масла, фильтры, плановое ТО, сезонные работы.", l: ["Масла и фильтры", "Плановое ТО", "Сезонное обслуживание"], link: "/services/maintenance" },
];

const marquee = ["Copart & IAAI", "Кузовной ремонт", "Покраска в камере", "Полировка", "Слесарные работы", "Плановое ТО", "Авто под ключ"];

const facts = [
  ["5", "этапов в одних руках"],
  ["100%", "фиксированная смета"],
  ["12 мес", "гарантия на работы"],
  ["24/7", "фотоотчёт по этапам"],
];

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-gold/20 bg-navy/80 py-2 backdrop-blur-xl" : "border-b border-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <a href="#top" className="group flex items-center gap-4">
            <span className="relative">
              <span className="absolute -inset-1 rounded-full bg-gold/25 opacity-0 blur-md transition group-hover:opacity-100" />
              <img src="/image.png" alt="Triumph Auto Service" width={48} height={48} className="relative h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
            </span>
            <span className="font-display leading-none">
              <span className="block text-xl font-bold tracking-[0.18em]">TRIUMPH</span>
              <span className="mt-1 block text-[10px] tracking-[0.42em] text-gold/80">AUTO SERVICE</span>
            </span>
          </a>

          <nav className="hidden gap-9 text-[13px] font-semibold uppercase tracking-[0.14em] md:flex">
            {[
              ["Услуги", "#services"],
              ["Как работаем", "#steps"],
              ["Почему мы", "#facts"],
              ["Контакты", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="group relative py-1 text-navy-foreground/75 transition-colors hover:text-gold">
                {label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="sheen rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-navy shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30"
          >
            Получить расчёт
          </button>
        </div>
      </header>

      <section id="top" className="grain relative min-h-screen overflow-hidden">
        <img
          src={hero}
          alt="Автомобиль после покраски и полировки"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/85 to-navy/20" />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-navy/70" />
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[140px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-28 pt-36">
          <div data-reveal className="reveal flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.42em] text-gold">
            <span className="h-px w-14 bg-linear-to-r from-transparent to-gold" />
            Авто из США и Канады
          </div>

          <h1 data-reveal style={{ transitionDelay: "120ms" }} className="reveal mt-8 max-w-5xl font-display text-[clamp(2.8rem,8vw,7.5rem)] font-bold uppercase leading-[0.95] tracking-tight">
            Автомобиль
            <br />
            <span className="gold-text">под ключ</span>
          </h1>

          <p data-reveal style={{ transitionDelay: "240ms" }} className="reveal mt-9 max-w-xl text-lg leading-relaxed text-navy-foreground/75 md:text-xl">
            Покупка авто из США — кузовной ремонт — покраска — полировка. Один сервис и одна ответственность на всём пути.
          </p>

          <div data-reveal style={{ transitionDelay: "340ms" }} className="reveal mt-11 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="sheen rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-11 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-xl shadow-gold/25 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-gold/35"
            >
              Подобрать авто
            </button>
            <a
              href="#services"
              className="rounded-sm border border-navy-foreground/25 px-11 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy-foreground/85 backdrop-blur-sm transition hover:border-gold/70 hover:bg-gold/5 hover:text-gold"
            >
              Наши услуги
            </a>
          </div>

          <div data-reveal style={{ transitionDelay: "460ms" }} className="reveal mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-navy-foreground/10 bg-navy-foreground/10 backdrop-blur-md sm:grid-cols-3">
            {[
              ["Аукционы", "Copart · IAAI"],
              ["Договор", "фиксированная смета"],
              ["Гарантия", "на все виды работ"],
            ].map(([a, b]) => (
              <div key={a} className="bg-navy/60 px-6 py-5">
                <div className="font-display text-lg font-bold uppercase tracking-wide text-gold">{a}</div>
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

      <div className="overflow-hidden border-y border-gold/15 bg-navy py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.3em] text-navy-foreground/40">
              {m}
              <span className="h-1 w-1 rotate-45 bg-gold" />
            </span>
          ))}
        </div>
      </div>

      <section id="steps" className="relative mx-auto max-w-7xl px-6 py-24">
        <div data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.42em] text-gold">Процесс</div>
        <h2 data-reveal style={{ transitionDelay: "100ms" }} className="reveal mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
          Пять этапов — <span className="gold-text">одна команда</span>
        </h2>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-sm bg-navy-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.t}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal group relative bg-navy px-7 py-10 transition-colors duration-300 hover:bg-navy-foreground/5"
            >
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              <div className="font-display text-5xl font-bold text-navy-foreground/10 transition-colors duration-300 group-hover:text-gold/70">0{i + 1}</div>
              <div className="mt-4 font-display text-lg font-semibold uppercase tracking-wide">{s.t}</div>
              <div className="mt-2 text-sm text-navy-foreground/50">{s.d}</div>
            </li>
          ))}
        </ol>
      </section>

      <section id="services" className="relative mx-auto max-w-7xl px-6 py-24">
        <div data-reveal className="reveal text-xs font-semibold uppercase tracking-[0.42em] text-gold">Полный цикл</div>
        <h2 data-reveal style={{ transitionDelay: "100ms" }} className="reveal mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[1.05] md:text-6xl">
          Пригон, ремонт, покраска — <span className="gold-text">готово</span>
        </h2>

        <div className="mt-20 space-y-24 md:space-y-32">
          {blocks.map((b, i) => (
            <Link
              to={b.link}
              key={b.t}
              data-reveal
              className="reveal group grid items-center gap-12 md:grid-cols-2 md:gap-16"
            >
              <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
                <div className="pointer-events-none absolute -inset-3 rounded-sm border border-gold/20 transition duration-500 group-hover:-inset-5 group-hover:border-gold/50" />
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
                </div>
                <div className="absolute -bottom-5 left-6 bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-2 font-display text-2xl font-bold text-navy shadow-lg shadow-navy/50">
                  0{i + 1}
                </div>
              </div>

              <div>
                <h3 className="font-display text-3xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-gold md:text-4xl">{b.t}</h3>
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
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([a, b], i) => (
            <div key={a} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="reveal border-l border-gold/40 pl-6">
              <div className="gold-text font-display text-5xl font-bold uppercase">{a}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.12em] text-navy-foreground/55">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div
          data-reveal
          className="reveal relative overflow-hidden rounded-sm border border-gold/25 bg-linear-to-br from-navy-foreground/[0.06] to-transparent p-10 md:p-14"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">Купили авто не через нас?</h2>
              <p className="mt-3 max-w-xl text-navy-foreground/65">Негде ремонтироваться — приезжайте к нам. Возьмём машину в работу на любом этапе.</p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="sheen shrink-0 rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-11 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-xl shadow-gold/20 transition hover:-translate-y-0.5"
            >
              Записаться
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-navy-foreground/10">
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/8 blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
          <div data-reveal className="reveal">
            <div className="text-xs font-semibold uppercase tracking-[0.42em] text-gold">Заявка</div>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.1] md:text-5xl">
              Рассчитаем стоимость <span className="gold-text">авто под ключ</span>
            </h2>
            <p className="mt-5 max-w-md text-navy-foreground/65">Оставьте контакты — перезвоним в течение 15 минут и подготовим прозрачный расчёт до покупки.</p>
          </div>

          <form
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="reveal space-y-4 rounded-sm border border-navy-foreground/12 bg-navy-foreground/[0.04] p-8 backdrop-blur-sm"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Спасибо! Мы скоро свяжемся.");
            }}
          >
            <input
              required
              placeholder="Ваше имя"
              className="w-full rounded-sm border border-navy-foreground/20 bg-navy/40 px-5 py-4 outline-hidden transition placeholder:text-navy-foreground/40 focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
            />
            <input
              required
              placeholder="Телефон"
              className="w-full rounded-sm border border-navy-foreground/20 bg-navy/40 px-5 py-4 outline-hidden transition placeholder:text-navy-foreground/40 focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
            />
            <button className="sheen w-full rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30">
              Получить расчёт
            </button>
            <p className="pt-1 text-center text-xs text-navy-foreground/40">Нажимая кнопку, вы соглашаетесь на обработку данных</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-navy-foreground/10 bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-navy-foreground/45 md:flex-row">
          <div className="flex items-center gap-3 font-display tracking-[0.3em] text-navy-foreground/70">
            TRIUMPH <span className="h-1 w-1 rotate-45 bg-gold" /> AUTO SERVICE
          </div>
          <div>© 2026 Пригон, ремонт, покраска, обслуживание.</div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
