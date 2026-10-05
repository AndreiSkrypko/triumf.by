import { createFileRoute } from "@tanstack/react-router";
import s3 from "@/assets/s3.webp";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServiceOfferCardsSection } from "@/components/site/ServiceOfferCardsSection";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/services/paintwork")({
  head: () => ({
    meta: [
      { title: "Малярные работы — Triumph Auto Service" },
      { name: "description", content: "Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска." },
    ],
  }),
  component: PaintworkPage,
});

function PaintworkPage() {
  return (
    <ServicePageShell
      contact={{
        titleBefore: "Рассчитаем стоимость",
        goldPhrase: "малярных работ",
        description: "Оставьте контакты — перезвоним в течение 15 минут и подготовим расчёт.",
      }}
    >
      <ServiceHero
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/#services" },
          { label: "Малярные работы", href: "/services/paintwork" },
        ]}
        serviceLabel="Услуга 03"
        title={
          <>
            Малярные <span className="gold-text">работы</span>
          </>
        }
        description="Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска. Идеальное покрытие на долгие годы."
        image={s3}
        imageAlt="Малярные работы"
      />
      <ServiceOfferCardsSection
        eyebrow="Прайс"
        title="Ориентир"
        titleGold="по стоимости"
        offers={[
          {
            title: "Полная покраска автомобиля",
            priceFrom: COMPANY.prices.fullPaintFromByn,
            desc: "Покраска кузова в камере с подбором цвета и контролем качества покрытия.",
            featured: true,
          },
        ]}
      />
      <ServiceStepsSection
        title="Что"
        titleGold="делаем"
        steps={[
          { title: "Подбор цвета", desc: "Точный подбор цвета по спектрофотометру. Совпадение с заводским цветом до 99%." },
          { title: "Покраска в камере", desc: "Покраска в профессиональной покрасочной камере с контролем температуры и влажности." },
          { title: "Локальный ремонт", desc: "Ремонт небольших повреждений без полной покраски элемента. Экономия времени и средств." },
          { title: "Полировка и защита", desc: "Полировка до заводского блеска, нанесение керамического покрытия для защиты от царапин." },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Качество"
        title="Материалы"
        features={[
          { title: "Краски PPG", desc: "Профессиональные краски PPG с высокой стойкостью к выгоранию и механическим повреждениям." },
          { title: "Лаки Glasurit", desc: "Высококачественные лаки Glasurit для идеального блеска и долговечности покрытия." },
          { title: "Керамическое покрытие", desc: "Нанесение керамики для защиты лакокрасочного слоя от царапин, химии и ультрафиолета." },
        ]}
      />
    </ServicePageShell>
  );
}
