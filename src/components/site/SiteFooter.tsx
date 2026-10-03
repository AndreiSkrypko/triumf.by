import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <div className="flex flex-wrap items-center justify-center gap-2 font-display tracking-[0.2em] text-navy-foreground/70 sm:gap-3 sm:tracking-[0.3em]">
            TRIUMPH <span className="h-1 w-1 rotate-45 bg-gold" /> AUTO SERVICE
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.1em] text-navy-foreground/55 sm:text-sm">
            <Link to="/privacy" className="transition hover:text-gold">
              Политика ПДн
            </Link>
            <Link to="/consent" className="transition hover:text-gold">
              Согласие на обработку
            </Link>
          </nav>
        </div>

        <div className="mt-6 text-center text-xs text-navy-foreground/45 sm:text-sm md:text-left">
          © 2026 Пригон, ремонт, покраска, обслуживание.
        </div>
      </div>
    </footer>
  );
}
