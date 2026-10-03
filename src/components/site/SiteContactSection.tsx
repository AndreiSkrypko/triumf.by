type SiteContactSectionProps = {
  goldPhrase: string;
  titleBefore: string;
  titleAfter?: string;
  description: string;
  submitLabel?: string;
};

export function SiteContactSection({
  goldPhrase,
  titleBefore,
  titleAfter = "",
  description,
  submitLabel = "Получить расчёт",
}: SiteContactSectionProps) {
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
          onSubmit={(e) => {
            e.preventDefault();
            alert("Спасибо! Мы скоро свяжемся.");
          }}
        >
          <input
            required
            placeholder="Ваше имя"
            className="w-full rounded-sm border border-navy-foreground/20 bg-navy/40 px-5 py-4 outline-hidden transition placeholder:text-navy-foreground/40 focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
          />
          <input
            required
            placeholder="Телефон"
            className="w-full rounded-sm border border-navy-foreground/20 bg-navy/40 px-5 py-4 outline-hidden transition placeholder:text-navy-foreground/40 focus:border-gold/60 focus:ring-1 focus:ring-gold/40"
          />
          <button
            type="submit"
            className="sheen w-full rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy shadow-lg shadow-gold/20 transition hover:shadow-xl hover:shadow-gold/30"
          >
            {submitLabel}
          </button>
          <p className="pt-1 text-center text-xs text-navy-foreground/40">Нажимая кнопку, вы соглашаетесь на обработку данных</p>
        </form>
      </div>
    </section>
  );
}
