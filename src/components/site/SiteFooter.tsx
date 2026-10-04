import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/company";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex flex-wrap items-center gap-2 font-display tracking-[0.2em] text-navy-foreground/70 sm:gap-3 sm:tracking-[0.3em]">
              TRIUMPH <span className="h-1 w-1 rotate-45 bg-gold" /> AUTO SERVICE
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/55">{COMPANY.address}</p>
            <a href={COMPANY.phoneHref} className="mt-2 inline-block text-sm font-semibold text-gold transition hover:text-gold-light">
              {COMPANY.phone}
            </a>
            <p className="mt-2 text-xs text-navy-foreground/45">УНП {COMPANY.unp}</p>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-navy-foreground/55">
            <span className="eyebrow text-gold">Документы</span>
            <Link to="/privacy" className="transition hover:text-gold">
              Политика ПДн
            </Link>
            <Link to="/consent" className="transition hover:text-gold">
              Согласие на обработку
            </Link>
          </nav>

          <div className="text-sm text-navy-foreground/55">
            <span className="eyebrow text-gold">Гарантия</span>
            <p className="mt-3">{COMPANY.warrantyShort}</p>
            <p className="mt-4 text-xs leading-relaxed text-navy-foreground/45">
              Антикор — от {COMPANY.prices.anticorFromByn} BYN · Подбор авто и торги — {COMPANY.prices.usaSelectionByn} BYN
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-navy-foreground/10 pt-6 text-center text-xs text-navy-foreground/45 sm:text-left sm:text-sm">
          © 2026 Пригон, ремонт, покраска, обслуживание.
        </div>
      </div>
    </footer>
  );
}
