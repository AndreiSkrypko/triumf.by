import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import s1 from "@/assets/s1.webp";
import s2 from "@/assets/s2.webp";
import s3 from "@/assets/s3.webp";
import s4 from "@/assets/s4.webp";
import sAnticor from "@/assets/s-anticor.webp";
import sMaintenance from "@/assets/s-maintenance.webp";

const STEPS = [
  {
    title: "Пригон",
    short: "Аукцион, торги, доставка",
    text: "Подбираем авто на Copart, IAAI и Manheim, проверяем историю по VIN, участвуем в торгах и везём машину до Минска с растаможкой.",
    img: s1,
    link: "/services/usa-cars",
  },
  {
    title: "Кузовной ремонт",
    short: "Стапель, сварка",
    text: "Восстанавливаем геометрию на стапеле, варим, рихтуем и меняем элементы. Кузовные запчасти подбираем и закупаем сами.",
    img: s2,
    link: "/services/bodywork",
  },
  {
    title: "Покраска",
    short: "Камера и подбор цвета",
    text: "Красим в камере с точным подбором цвета, делаем локальный ремонт и полировку до заводского блеска.",
    img: s3,
    link: "/services/paintwork",
  },
  {
    title: "Слесарные",
    short: "Подвеска, ДВС, ГРМ",
    text: "Подвеска, тормоза, рулевое, двигатель и ГРМ. Диагностика и подбор запчастей — с нашей стороны.",
    img: s4,
    link: "/services/mechanical",
  },
  {
    title: "Антикор",
    short: "Защита кузова",
    text: "Обрабатываем днище, арки и скрытые полости. Особенно важно для машин после пригона из США.",
    img: sAnticor,
    link: "/services/anticorrosion",
  },
  {
    title: "Сопровождение",
    short: "ТО на весь срок",
    text: "Обслуживаем автомобиль весь срок владения: масла, фильтры, плановое ТО и сезонные работы.",
    img: sMaintenance,
    link: "/services/maintenance",
  },
] as const;

const COUNT = STEPS.length;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));
const pad = (value: number) => String(value).padStart(2, "0");

export function StepsTimeline() {
  const pinRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;

      const pin = pinRef.current;
      if (pin && pin.offsetParent !== null) {
        const rect = pin.getBoundingClientRect();
        const range = rect.height - vh;
        const t = (range > 0 ? clamp01(-rect.top / range) : 0) * COUNT;
        const index = Math.min(COUNT - 1, Math.floor(t));
        pin.style.setProperty("--fill", Math.min(1, t / (COUNT - 1)).toFixed(4));
        pin.style.setProperty("--lp", clamp01(t - index).toFixed(4));
        setActive((prev) => (prev === index ? prev : index));
      }

      const mobile = mobileRef.current;
      if (mobile && mobile.offsetParent !== null) {
        const rect = mobile.getBoundingClientRect();
        const line = vh * 0.62;
        mobile.style.setProperty("--fill", clamp01((line - rect.top) / rect.height).toFixed(4));
        mobile.querySelectorAll<HTMLElement>("[data-step]").forEach((item) => {
          item.classList.toggle("is-active", item.getBoundingClientRect().top < line);
        });
      }
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const goTo = (index: number) => {
    const pin = pinRef.current;
    if (!pin) return;
    const rect = pin.getBoundingClientRect();
    const range = rect.height - window.innerHeight;
    window.scrollTo({ top: window.scrollY + rect.top + ((index + 0.2) / COUNT) * range, behavior: "smooth" });
  };

  const current = STEPS[active] ?? STEPS[0];

  return (
    <div id="steps">
      {/* Desktop: pinned scrollytelling */}
      <section ref={pinRef} className="steps-pin relative hidden lg:block" style={{ height: `calc(100vh + ${COUNT * 55}vh)` }}>
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pb-10 pt-28">
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-gold/6 blur-[140px]" />

          <div className="relative mx-auto flex w-full max-w-7xl min-h-0 flex-1 flex-col px-6">
            <div className="flex items-end justify-between gap-8">
              <div>
                <div className="eyebrow text-gold">Процесс</div>
                <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight xl:text-5xl">
                  Шесть этапов — <span className="gold-text">одна команда</span>
                </h2>
              </div>
              <div className="pb-2 font-display text-sm uppercase tracking-[0.3em] text-navy-foreground/45">
                Этап <span className="text-gold">{pad(active + 1)}</span> / {pad(COUNT)}
              </div>
            </div>

            <div className="mt-8 grid min-h-0 flex-1 grid-cols-12 gap-10">
              <div className="relative col-span-7 min-h-0 overflow-hidden rounded-sm border border-navy-foreground/10">
                {STEPS.map((step, i) => (
                  <img
                    key={step.title}
                    src={step.img}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={960}
                    className={`steps-photo absolute inset-0 h-full w-full object-cover ${i === active ? "is-active" : ""}`}
                  />
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/10 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-navy/40 to-transparent" />
                <div key={active} className="steps-in absolute bottom-6 left-7 font-display text-sm font-semibold uppercase tracking-[0.3em] text-navy-foreground/80">
                  {current.short}
                </div>
              </div>

              <div className="col-span-5 flex min-h-0 flex-col justify-center">
                <div key={active} className="steps-in">
                  <div className="steps-number font-display text-[clamp(5rem,9vw,9rem)] font-bold leading-none">{pad(active + 1)}</div>
                  <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-tight xl:text-4xl">{current.title}</h3>
                  <div className="mt-5 h-px w-24 bg-linear-to-r from-gold to-transparent" />
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-foreground/70">{current.text}</p>
                  <Link
                    to={current.link}
                    className="group mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-gold transition hover:text-gold-light"
                  >
                    Подробнее об этапе
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <ol className="relative mt-10 grid grid-cols-6">
              <span className="absolute left-[calc(100%/12)] right-[calc(100%/12)] top-[13px] h-px bg-navy-foreground/15">
                <span className="steps-fill absolute inset-y-0 left-0 bg-linear-to-r from-gold-deep via-gold to-gold-light" />
                <span className="steps-head absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light" />
              </span>
              {STEPS.map((step, i) => {
                const state = i < active ? "is-done" : i === active ? "is-current" : "";
                return (
                  <li key={step.title} className="relative flex justify-center">
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={i === active ? "step" : undefined}
                      className={`steps-node group flex flex-col items-center gap-3 ${state}`}
                    >
                      <span className="steps-dot grid h-[27px] w-[27px] place-items-center rounded-full border font-display text-[10px] font-bold">
                        {pad(i + 1)}
                      </span>
                      <span className="steps-label font-display text-xs font-semibold uppercase tracking-[0.18em]">{step.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Phones and tablets: vertical line that fills while scrolling */}
      <section className="section-y relative mx-auto max-w-7xl px-4 sm:px-6 lg:hidden">
        <div data-reveal className="reveal eyebrow text-gold">
          Процесс
        </div>
        <h2 data-reveal style={{ transitionDelay: "100ms" }} className="reveal mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
          Шесть этапов — <span className="gold-text">одна команда</span>
        </h2>

        <div ref={mobileRef} className="steps-mobile relative mt-12">
          <span className="absolute bottom-4 left-[15px] top-4 w-px bg-navy-foreground/15" />
          <span className="steps-mobile-fill absolute left-[15px] top-4 w-px bg-linear-to-b from-gold-light via-gold to-gold-deep" />

          <ol className="space-y-14">
            {STEPS.map((step, i) => (
              <li key={step.title} data-step className="steps-m-item relative pl-12 sm:pl-16">
                <span className="steps-m-node absolute left-0 top-0.5 grid h-8 w-8 place-items-center rounded-full border font-display text-[11px] font-bold">
                  {pad(i + 1)}
                </span>
                <h3 className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-foreground/60 sm:text-base">{step.text}</p>
                <div className="relative mt-5 overflow-hidden rounded-sm border border-navy-foreground/10">
                  <img src={step.img} alt={step.title} loading="lazy" decoding="async" width={1280} height={960} className="steps-m-photo aspect-16/10 w-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-navy-foreground/80">{step.short}</span>
                </div>
                <Link to={step.link} className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  Подробнее →
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
