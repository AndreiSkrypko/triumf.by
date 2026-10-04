import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { SiteContactSection } from "@/components/site/SiteContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { useReveal } from "@/hooks/use-reveal";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Triumph Auto Service" },
      { name: "description", content: "Адрес, телефон и реквизиты Triumph Auto Service в Минске." },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useReveal();

  const mapQuery = encodeURIComponent("Минск, Октябрьская улица, 16к2");

  return (
    <div className="min-h-screen bg-navy font-sans text-navy-foreground antialiased selection:bg-gold selection:text-navy">
      <SiteHeader variant="page" onOpenModal={() => setIsModalOpen(true)} />

      <div className="site-header-offset">
        <div className="border-b border-navy-foreground/10 bg-navy/50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
            <div data-reveal className="reveal eyebrow text-gold">
              Связь с нами
            </div>
            <h1 data-reveal style={{ transitionDelay: "80ms" }} className="reveal mt-4 font-display text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
              <span className="gold-text">Контакты</span>
            </h1>
            <p data-reveal style={{ transitionDelay: "160ms" }} className="reveal mt-5 max-w-2xl text-navy-foreground/70">
              Приезжайте в сервис, звоните или оставьте заявку — перезвоним в течение 15 минут.
            </p>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Адрес",
                value: COMPANY.addressLine,
                extra: (
                  <a
                    href={`https://yandex.ru/maps/?text=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-gold transition hover:text-gold-light"
                  >
                    Открыть на карте →
                  </a>
                ),
              },
              {
                label: "Телефон",
                value: COMPANY.phone,
                extra: (
                  <a
                    href={COMPANY.phoneHref}
                    className="mt-3 inline-block text-sm font-semibold text-gold transition hover:text-gold-light"
                  >
                    Позвонить
                  </a>
                ),
              },
              {
                label: "Реквизиты",
                value: `УНП ${COMPANY.unp}`,
                extra: <p className="mt-3 text-sm text-navy-foreground/55">{COMPANY.name}</p>,
              },
          ].map((item, i) => (
              <div
                key={item.label}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="reveal rounded-sm border border-navy-foreground/12 bg-navy-foreground/[0.04] p-6 sm:p-8"
              >
                <div className="eyebrow text-gold">{item.label}</div>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-navy-foreground">{item.value}</p>
                {item.extra}
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="reveal mt-10 flex flex-col items-start justify-between gap-6 rounded-sm border border-gold/25 bg-linear-to-br from-navy-foreground/[0.06] to-transparent p-8 sm:flex-row sm:items-center"
          >
            <div>
              <h2 className="font-display text-2xl font-bold uppercase">Нужен расчёт?</h2>
              <p className="mt-2 text-sm text-navy-foreground/65">Оставьте заявку онлайн или позвоните — подберём решение под вашу задачу.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="sheen rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-navy"
              >
                Оставить заявку
              </button>
              <Link
                to="/"
                className="rounded-sm border border-navy-foreground/25 px-8 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] transition hover:border-gold/70 hover:text-gold"
              >
                На главную
              </Link>
            </div>
          </div>
        </section>

        <SiteContactSection
          titleBefore="Напишите"
          goldPhrase="нам"
          description="Заполните форму — мы свяжемся с вами и ответим на все вопросы."
          source="Страница контактов"
        />
      </div>

      <SiteFooter />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
