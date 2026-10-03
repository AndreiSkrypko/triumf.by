import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

type BreadcrumbItem = { label: string; href: string };

type ServiceHeroProps = {
  breadcrumb: BreadcrumbItem[];
  serviceLabel: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
};

export function ServiceHero({ breadcrumb, serviceLabel, title, description, image, imageAlt }: ServiceHeroProps) {
  return (
    <>
      <div className="border-b border-navy-foreground/10 bg-navy/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Breadcrumb items={breadcrumb} />
        </div>
      </div>

      <section className="grain relative min-h-[55vh] overflow-hidden md:min-h-[62vh]">
        <img src={image} alt={imageAlt} width={1600} height={1008} className="absolute inset-0 h-full w-full scale-105 object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/88 to-navy/25" />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-navy/60" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-center px-4 pb-12 pt-8 sm:min-h-[55vh] sm:px-6 sm:pb-16 sm:pt-12 md:min-h-[62vh] md:pt-16">
          <div data-reveal className="reveal eyebrow flex items-center gap-3 text-gold sm:gap-4">
            <span className="h-px w-14 bg-linear-to-r from-transparent to-gold" />
            {serviceLabel}
          </div>
          <h1
            data-reveal
            style={{ transitionDelay: "100ms" }}
            className="reveal mt-8 max-w-4xl font-display text-[clamp(2.25rem,6vw,5.5rem)] font-bold uppercase leading-[1.02] tracking-tight"
          >
            {title}
          </h1>
          <p data-reveal style={{ transitionDelay: "200ms" }} className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-navy-foreground/75 md:text-xl">
            {description}
          </p>
        </div>
      </section>
    </>
  );
}
