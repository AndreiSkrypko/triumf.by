type Step = { step: string; title: string; desc: string };

type ServiceStepsSectionProps = {
  eyebrow?: string;
  title: string;
  titleGold?: string;
  steps: Step[];
};

export function ServiceStepsSection({ eyebrow = "Процесс", title, titleGold, steps }: ServiceStepsSectionProps) {
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

      <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-navy-foreground/10">
        {steps.map((item, i) => (
          <div
            key={item.step}
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
            className="reveal group relative grid items-start gap-4 bg-navy px-5 py-7 transition-colors duration-300 hover:bg-navy-foreground/5 sm:gap-6 sm:px-7 sm:py-9 md:grid-cols-[88px_1fr]"
          >
            <span className="pointer-events-none absolute inset-x-7 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            <div className="gold-text font-display text-4xl font-bold md:text-5xl">{item.step}</div>
            <div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/65 md:text-lg">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
