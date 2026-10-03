import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const PAGE_NAV = [
  ["Услуги", "/#services"],
  ["Как работаем", "/#steps"],
  ["Почему мы", "/#facts"],
  ["Контакты", "/#contact"],
] as const;

const HOME_NAV = [
  ["Услуги", "#services"],
  ["Как работаем", "#steps"],
  ["Почему мы", "#facts"],
  ["Контакты", "#contact"],
] as const;

type SiteHeaderProps = {
  onOpenModal: () => void;
  variant?: "home" | "page";
};

export function SiteHeader({ onOpenModal, variant = "page" }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(variant === "page");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (variant !== "home") return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const nav = variant === "home" ? HOME_NAV : PAGE_NAV;
  const solid = scrolled || menuOpen;

  const closeMenu = () => setMenuOpen(false);

  const openModal = () => {
    closeMenu();
    onOpenModal();
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "border-b border-gold/20 bg-navy/90 py-2 backdrop-blur-xl" : "border-b border-transparent py-3 sm:py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6">
          {variant === "home" ? (
            <a href="#top" className="group flex min-w-0 items-center gap-2.5 sm:gap-4" onClick={closeMenu}>
              <LogoMark />
            </a>
          ) : (
            <Link to="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-4" onClick={closeMenu}>
              <LogoMark />
            </Link>
          )}

          <nav className="hidden items-center gap-9 text-[13px] font-semibold uppercase tracking-[0.14em] md:flex" aria-label="Основное меню">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="group relative py-1 text-navy-foreground/75 transition-colors hover:text-gold">
                {label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={openModal}
              className="sheen rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-navy shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30 sm:px-5 sm:py-2.5 sm:text-[12px] md:px-6 md:text-[13px] md:tracking-[0.12em]"
            >
              <span className="md:hidden">Расчёт</span>
              <span className="hidden md:inline">Получить расчёт</span>
            </button>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-navy-foreground/20 text-navy-foreground transition hover:border-gold/50 hover:text-gold md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-navy/80 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
          aria-label="Закрыть меню"
          onClick={closeMenu}
        />

        <nav
          className={`absolute inset-x-0 top-[3.75rem] flex max-h-[calc(100dvh-3.75rem)] flex-col overflow-y-auto border-b border-gold/20 bg-navy px-4 pb-8 pt-4 transition-all duration-300 sm:top-[4.25rem] sm:max-h-[calc(100dvh-4.25rem)] ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
          aria-label="Мобильное меню"
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="border-b border-navy-foreground/10 py-4 font-display text-lg font-semibold uppercase tracking-wide text-navy-foreground/90 transition-colors active:text-gold"
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={openModal}
            className="sheen mt-6 w-full rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-lg shadow-gold/20"
          >
            Получить расчёт
          </button>
        </nav>
      </div>
    </>
  );
}

function LogoMark() {
  return (
    <>
      <span className="relative shrink-0">
        <span className="absolute -inset-1 rounded-full bg-gold/25 opacity-0 blur-md transition group-hover:opacity-100" />
        <img src="/image.png" alt="" width={48} height={48} className="relative h-10 w-10 rounded-full object-cover ring-1 ring-gold/40 sm:h-12 sm:w-12" />
      </span>
      <span className="min-w-0 font-display leading-none">
        <span className="block truncate text-base font-bold tracking-[0.14em] sm:text-xl sm:tracking-[0.18em]">TRIUMPH</span>
        <span className="mt-0.5 block truncate text-[9px] tracking-[0.32em] text-gold/80 sm:mt-1 sm:text-[10px] sm:tracking-[0.42em]">AUTO SERVICE</span>
      </span>
    </>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
