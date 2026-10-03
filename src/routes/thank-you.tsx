import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Спасибо за заявку — Triumph Auto Service" },
      { name: "description", content: "Ваша заявка принята. Мы свяжемся с вами в ближайшее время." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useReveal();

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <SiteHeader variant="page" onOpenModal={() => setIsModalOpen(true)} />

      <section className="grain site-header-offset relative flex min-h-screen flex-col overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-navy via-navy to-navy-foreground/5" />
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

        <div className="relative mx-auto flex min-h-[calc(100dvh-4.25rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[calc(100dvh-5.5rem)] sm:px-6 sm:py-24">
          <div
            data-reveal
            className="reveal mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-gold/30 bg-gold/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gold">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 data-reveal style={{ transitionDelay: "100ms" }} className="reveal font-display text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase">
            <span className="gold-text">Спасибо!</span>
          </h1>

          <p data-reveal style={{ transitionDelay: "200ms" }} className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/75 md:text-xl">
            Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время для уточнения деталей.
          </p>

          <div data-reveal style={{ transitionDelay: "300ms" }} className="reveal mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="sheen rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-10 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-xl shadow-gold/25 transition hover:-translate-y-0.5"
            >
              На главную
            </Link>
            <a
              href="/#services"
              className="rounded-sm border border-navy-foreground/25 px-10 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy-foreground/85 transition hover:border-gold/70 hover:bg-gold/5 hover:text-gold"
            >
              Наши услуги
            </a>
          </div>

          <div data-reveal style={{ transitionDelay: "400ms" }} className="reveal mt-16 flex items-center gap-2 text-sm text-navy-foreground/50">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-gold">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Свяжемся с вами в течение 15 минут</span>
          </div>
        </div>
      </section>

      <SiteFooter />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
