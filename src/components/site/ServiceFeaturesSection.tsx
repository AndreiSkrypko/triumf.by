type Feature = { title: string; desc: string };

type ServiceFeaturesSectionProps = {
  eyebrow?: string;
  title: string;
  features: Feature[];
};

export function ServiceFeaturesSection({ eyebrow = "Преимущества", title, features }: ServiceFeaturesSectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-navy-foreground/10 bg-navy-foreground/[0.03]">
      <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold/8 blur-[120px]" />
      <div className="section-y relative mx-auto max-w-7xl px-4 sm:px-6">
        <div data-reveal className="reveal eyebrow text-gold">
          {eyebrow}
        </div>
        <h2 data-reveal style={{ transitionDelay: "80ms" }} className="reveal mt-4 font-display text-3xl font-bold uppercase sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={item.title}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
              className="reveal border-l border-gold/40 pl-6"
            >
              <h3 className="font-display text-xl font-bold uppercase text-gold md:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65 md:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
