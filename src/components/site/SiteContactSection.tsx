import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { submitLead } from "@/lib/submit-lead";
import { FormPrivacyNote } from "./FormPrivacyNote";

type SiteContactSectionProps = {
  goldPhrase: string;
  titleBefore: string;
  titleAfter?: string;
  description: string;
  submitLabel?: string;
  source?: string;
};

export function SiteContactSection({
  goldPhrase,
  titleBefore,
  titleAfter = "",
  description,
  submitLabel = "Получить расчёт",
  source = "Форма на сайте",
}: SiteContactSectionProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <section id="contact" className="relative overflow-hidden border-t border-navy-foreground/10">
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gold/8 blur-[130px]" />
      <div className="section-y relative mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-14 sm:px-6 md:grid-cols-2">
        <div data-reveal className="reveal">
          <div className="eyebrow text-gold">Заявка</div>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:text-5xl">
            {titleBefore} <span className="gold-text">{goldPhrase}</span>
            {titleAfter}
          </h2>
          <p className="mt-5 max-w-md text-navy-foreground/65">{description}</p>
        </div>

        <form
          data-reveal
          style={{ transitionDelay: "120ms" }}
          className="reveal space-y-4 rounded-sm border border-navy-foreground/12 bg-navy-foreground/[0.04] p-5 backdrop-blur-sm sm:p-8"
          onSubmit={async (e) => {
            e.preventDefault();
            setSending(true);
            setError(null);
            try {
              await submitLead({ name, phone, source });
              router.navigate({ to: "/thank-you" });
            } catch {
              setError("Не удалось отправить заявку. Попробуйте позже или позвоните нам.");
            } finally {
              setSending(false);
            }
          }}
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={sending}
            placeholder="Ваше имя"
            className="w-full rounded-sm border border-navy-foreground/20 bg-navy/40 px-5 py-4 outline-hidden transition placeholder:text-navy-foreground/40 focus:border-gold/60 focus:ring-1 focus:ring-gold/40 disabled:opacity-60"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={sending}
            placeholder="Телефон"
            className="w-full rounded-sm border border-navy-foreground/20 bg-navy/40 px-5 py-4 outline-hidden transition placeholder:text-navy-foreground/40 focus:border-gold/60 focus:ring-1 focus:ring-gold/40 disabled:opacity-60"
          />
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button
            type="submit"
            disabled={sending}
            className="sheen w-full rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? "Отправка…" : submitLabel}
          </button>
          <FormPrivacyNote />
        </form>
      </div>
    </section>
  );
}
