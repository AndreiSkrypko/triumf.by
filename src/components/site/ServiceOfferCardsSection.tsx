export type ServiceOffer = {
  title: string;
  priceFrom: number;
  desc?: string;
  featured?: boolean;
};

type ServiceOfferCardsSectionProps = {
  eyebrow?: string;
  title: string;
  titleGold?: string;
  offers: ServiceOffer[];
};

export function ServicePriceBadge({ amount, className = "" }: { amount: number; className?: string }) {
  return (
    <div className={`inline-flex flex-col gap-0.5 ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-navy-foreground/45">от</span>
      <div className="flex items-baseline gap-1.5">
        <span className="gold-text font-display text-3xl font-bold leading-none sm:text-4xl">{amount.toLocaleString("ru-RU")}</span>
        <span className="text-sm font-semibold uppercase tracking-wide text-gold/75">BYN</span>
      </div>
    </div>
  );
}

function PriceTag({ amount }: { amount: number }) {
  return (
    <div className="mt-auto pt-6">
      <ServicePriceBadge amount={amount} />
    </div>
  );
}

export function ServiceOfferCardsSection({
  eyebrow = "Стоимость",
  title,
  titleGold,
  offers,
}: ServiceOfferCardsSectionProps) {
  return (
    <section className="section-y mx-auto max-w-7xl px-4 sm:px-6">
      <div data-reveal className="reveal eyebrow text-gold">
        {eyebrow}
      </div>
      <h2 data-reveal style={{ transitionDelay: "80ms" }} className="reveal mt-4 max-w-3xl font-display text-3xl font-bold uppercase leading-tight sm:text-4xl md:text-5xl">
        {title}
        {titleGold ? (
          <>
            {" "}
            <span className="gold-text">{titleGold}</span>
          </>
        ) : null}
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {offers.map((item, i) => (
          <article
            key={item.title}
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
            className={`reveal group relative flex min-h-[220px] flex-col overflow-hidden rounded-sm border p-6 transition duration-300 sm:min-h-[240px] sm:p-7 ${
              item.featured
                ? "border-gold/45 bg-linear-to-br from-gold/15 via-navy-foreground/[0.08] to-navy shadow-lg shadow-gold/10"
                : "border-navy-foreground/12 bg-navy-foreground/[0.04] hover:border-gold/30 hover:bg-navy-foreground/[0.07]"
            }`}
          >
            <span className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/10 blur-3xl transition group-hover:bg-gold/15" />
            <h3 className="relative font-display text-lg font-bold uppercase leading-snug tracking-wide text-navy-foreground sm:text-xl">{item.title}</h3>
            {item.desc ? <p className="relative mt-3 text-sm leading-relaxed text-navy-foreground/60">{item.desc}</p> : null}
            <PriceTag amount={item.priceFrom} />
          </article>
        ))}
      </div>
    </section>
  );
}
