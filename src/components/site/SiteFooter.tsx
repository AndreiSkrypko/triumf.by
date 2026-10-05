import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-wrap items-center gap-2 font-display tracking-[0.2em] text-navy-foreground/80 sm:gap-3 sm:tracking-[0.3em]">
              TRIUMPH <span className="h-1 w-1 rotate-45 bg-gold" /> AUTO SERVICE
            </div>
            <div className="mt-5 space-y-2 text-sm text-navy-foreground/75">
              <p>
                <span className="text-navy-foreground/50">Адрес: </span>
                {COMPANY.addressLine}
              </p>
              <p>
                <span className="text-navy-foreground/50">Телефон: </span>
                <a href={COMPANY.phoneHref} className="font-semibold text-gold transition hover:text-gold-light">
                  {COMPANY.phone}
                </a>
              </p>
              <p>
                <span className="text-navy-foreground/50">УНП: </span>
                {COMPANY.unp}
              </p>
            </div>
            <Link to="/contacts" className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-gold transition hover:text-gold-light">
              Все контакты →
            </Link>
          </div>

          <nav aria-label="Услуги" className="flex flex-col gap-2 text-sm text-navy-foreground/65 lg:col-span-3">
            <span className="eyebrow text-gold">Услуги</span>
            <Link to="/services/usa-cars" className="transition hover:text-gold">
              Авто из США и Канады
            </Link>
            <Link to="/services/bodywork" className="transition hover:text-gold">
              Кузовной ремонт
            </Link>
            <Link to="/services/paintwork" className="transition hover:text-gold">
              Малярные работы
            </Link>
            <Link to="/services/mechanical" className="transition hover:text-gold">
              Слесарные работы
            </Link>
            <Link to="/services/anticorrosion" className="transition hover:text-gold">
              Антикор
            </Link>
            <Link to="/services/maintenance" className="transition hover:text-gold">
              Сопровождение и ТО
            </Link>
          </nav>

          <nav aria-label="Разделы сайта" className="flex flex-col gap-2 text-sm text-navy-foreground/65 lg:col-span-2">
            <span className="eyebrow text-gold">Сайт</span>
            <Link to="/" className="transition hover:text-gold">
              Главная
            </Link>
            <Link to="/contacts" className="transition hover:text-gold">
              Контакты
            </Link>
            <Link to="/#services" className="transition hover:text-gold">
              Все услуги на главной
            </Link>
          </nav>

          <nav aria-label="Документы" className="flex flex-col gap-2 text-sm text-navy-foreground/65 lg:col-span-3">
            <span className="eyebrow text-gold">Документы</span>
            <Link to="/privacy" className="transition hover:text-gold">
              Политика ПДн
            </Link>
            <Link to="/consent" className="transition hover:text-gold">
              Согласие на обработку
            </Link>
            <p className="mt-4 text-xs text-navy-foreground/50">
              Гарантия {COMPANY.warrantyShort} · Антикор от {COMPANY.prices.anticorFromByn} BYN
            </p>
          </nav>
        </div>

        <div className="mt-10 border-t border-navy-foreground/10 pt-6 text-center text-xs text-navy-foreground/45 sm:text-left sm:text-sm">
          © 2026 Пригон, ремонт, покраска, обслуживание.
        </div>
      </div>
    </footer>
  );
}
