import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ContactModal } from "@/components/ContactModal";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LegalPageShellProps = {
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function LegalPageShell({ title, eyebrow = "Документ", children }: LegalPageShellProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <SiteHeader variant="page" onOpenModal={() => setIsModalOpen(true)} />

      <div className="site-header-offset">
        <div className="border-b border-navy-foreground/10 bg-navy/50">
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
            <div className="eyebrow text-gold">{eyebrow}</div>
            <h1 className="mt-3 font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-navy-foreground/55">
              Triumph Auto Service ·{" "}
              <Link to="/" className="text-gold transition hover:text-gold-light">
                На главную
              </Link>
            </p>
          </div>
        </div>

        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">{children}</article>
      </div>

      <SiteFooter />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-b border-navy-foreground/10 py-8 last:border-b-0">
      <h2 className="font-display text-xl font-bold uppercase tracking-wide text-gold sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy-foreground/75 sm:text-base">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
