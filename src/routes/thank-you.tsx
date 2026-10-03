import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="font-sans text-foreground">
      <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-navy-foreground">
          <div className="flex items-center gap-4">
            <img src="/image.png" alt="Triumph Auto Service" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
            <div className="font-display leading-none">
              <div className="text-xl font-bold tracking-wide">TRIUMPH</div>
              <div className="text-[10px] tracking-[0.3em] opacity-70 mt-1">AUTO SERVICE</div>
            </div>
          </div>
          <nav className="flex gap-6 text-sm font-semibold">
            <Link to="/" className="hover:text-gold transition-colors">Главная</Link>
            <Link to="/#services" className="hover:text-gold transition-colors">Услуги</Link>
            <Link to="/#steps" className="hover:text-gold transition-colors">Как работаем</Link>
            <Link to="/#contact" className="hover:text-gold transition-colors">Контакты</Link>
          </nav>
          <Link to="/#contact" className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-primary hover:text-primary-foreground">Получить расчёт</Link>
        </div>
      </header>

      <section className="relative min-h-[80vh] overflow-hidden bg-navy text-navy-foreground">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy-foreground/10" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/20 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gold">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          
          <h1 className="font-display text-5xl font-bold uppercase text-gold mb-6 md:text-7xl">
            Спасибо!
          </h1>
          
          <p className="text-xl md:text-2xl text-navy-foreground/90 max-w-2xl leading-relaxed mb-8">
            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время для уточнения деталей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/"
              className="rounded-sm bg-gold px-8 py-4 font-semibold uppercase tracking-wider text-navy transition hover:bg-primary hover:text-primary-foreground"
            >
              Вернуться на главную
            </Link>
            <Link
              to="/#services"
              className="rounded-sm border-2 border-gold/50 px-8 py-4 font-semibold uppercase tracking-wider transition hover:border-gold hover:text-gold"
            >
              Наши услуги
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-2 text-navy-foreground/60 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Свяжемся с вами в течение 15 минут</span>
          </div>
        </div>
      </section>

      <footer className="bg-navy py-8 text-center text-sm text-navy-foreground/60 border-t border-navy-foreground/10">
        © 2026 Triumph Auto Service. Пригон, ремонт, покраска, обслуживание.
      </footer>
    </div>
  );
}
