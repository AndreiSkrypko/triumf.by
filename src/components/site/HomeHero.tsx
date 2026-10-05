import { useRef, type CSSProperties } from "react";
import hero from "@/assets/hero.webp";
import { useHeroParallax } from "@/hooks/use-hero-parallax";

/** Headlight ring centres in % of the 16:9 hero photo. */
const HEADLIGHTS = [
  { x: 11.6, y: 52.4 },
  { x: 14.8, y: 52.4 },
  { x: 41.0, y: 54.2 },
  { x: 45.7, y: 54.4 },
];

const FLARES = [
  { x: 13.2, y: 52.4 },
  { x: 43.3, y: 54.3 },
];

const TITLE_LINE = "Автомобиль";

const TRUST = [
  ["Аукционы", "Copart · IAAI · Manheim"],
  ["Договор", "работаем официально"],
  ["Гарантия", "3 года на работы"],
] as const;

type HomeHeroProps = {
  onOpenModal: () => void;
};

export function HomeHero({ onOpenModal }: HomeHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroParallax(sectionRef);

  return (
    <section ref={sectionRef} id="top" className="hero grain relative min-h-screen overflow-hidden">
      <div className="hero-frame">
        <div className="hero-media">
          <div className="hero-media-parallax">
            <div className="hero-intro-zoom absolute inset-0">
              <img
                src={hero}
                alt="Dodge Challenger в премиальном сервисе Triumph Auto"
                width={1600}
                height={900}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {HEADLIGHTS.map((light, i) => (
                <span
                  key={`light-${i}`}
                  className="hero-headlight"
                  style={{ left: `${light.x}%`, top: `${light.y}%`, animationDelay: `${1.15 + (i % 2) * 0.08}s, 3.2s` } as CSSProperties}
                />
              ))}
              {FLARES.map((flare, i) => (
                <span key={`flare-${i}`} className="hero-flare" style={{ left: `${flare.x}%`, top: `${flare.y}%` }} />
              ))}
              <span className="hero-sweep" />
            </div>
          </div>
        </div>
        <div className="hero-scrim absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-transparent via-red-950/10 to-red-900/25 mix-blend-soft-light" />
        <div className="hero-blob absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-gold/10 blur-[140px]" />
        <div className="hero-blob hero-blob-alt absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-red-600/15 blur-[120px]" />
        <div className="hero-blackout absolute inset-0 bg-navy" />
      </div>

      <div className="hero-content relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36">
        <div data-reveal style={{ transitionDelay: "500ms" }} className="reveal flex flex-wrap items-center gap-3 text-gold sm:gap-4">
          <span className="h-px w-10 bg-linear-to-r from-transparent to-gold sm:w-14" />
          <span className="eyebrow">Авто из США и Канады</span>
        </div>

        <h1
          aria-label="Автомобиль под ключ"
          className="mt-8 max-w-5xl font-display text-[clamp(2.8rem,8vw,7.5rem)] font-bold uppercase leading-[0.95] tracking-tight"
        >
          <span aria-hidden="true" className="hero-line">
            {Array.from(TITLE_LINE).map((char, i) => (
              <span key={i} className="hero-char" style={{ "--i": i } as CSSProperties}>
                {char}
              </span>
            ))}
          </span>
          <span aria-hidden="true" className="hero-line">
            <span className="hero-rise" style={{ animationDelay: "1.05s" }}>
              <span className="gold-text">под ключ</span>
            </span>
          </span>
        </h1>

        <p data-reveal style={{ transitionDelay: "1350ms" }} className="reveal mt-9 max-w-xl text-lg leading-relaxed text-navy-foreground/75 md:text-xl">
          Покупка авто из США — кузовной ремонт — покраска — полировка. Один сервис и одна ответственность на всём пути.
        </p>

        <div
          data-reveal
          style={{ transitionDelay: "1500ms" }}
          className="reveal mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-11 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <button
            type="button"
            onClick={onOpenModal}
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

        <div
          data-reveal
          style={{ transitionDelay: "1650ms" }}
          className="reveal mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-navy-foreground/10 bg-navy-foreground/10 backdrop-blur-md sm:mt-20 sm:grid-cols-3"
        >
          {TRUST.map(([a, b]) => (
            <div key={a} className="bg-navy/60 px-4 py-4 sm:px-6 sm:py-5">
              <div className="font-display text-base font-bold uppercase tracking-wide text-gold sm:text-lg">{a}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-navy-foreground/55">{b}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#steps"
        aria-label="Листать вниз"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-foreground/50 transition hover:text-gold md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="hero-scroll-line relative h-10 w-px overflow-hidden bg-navy-foreground/15" />
      </a>
    </section>
  );
}
