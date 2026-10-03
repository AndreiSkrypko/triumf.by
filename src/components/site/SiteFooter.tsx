export function SiteFooter() {
  return (
    <footer className="border-t border-navy-foreground/10 bg-navy">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-xs text-navy-foreground/45 sm:px-6 sm:py-10 sm:text-sm md:flex-row md:text-left">
        <div className="flex flex-wrap items-center justify-center gap-2 font-display tracking-[0.2em] text-navy-foreground/70 sm:gap-3 sm:tracking-[0.3em]">
          TRIUMPH <span className="h-1 w-1 rotate-45 bg-gold" /> AUTO SERVICE
        </div>
        <div>© 2026 Пригон, ремонт, покраска, обслуживание.</div>
      </div>
    </footer>
  );
}
