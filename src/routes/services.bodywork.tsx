import { createFileRoute } from "@tanstack/react-router";
import s2 from "@/assets/s2.webp";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServiceOfferCardsSection } from "@/components/site/ServiceOfferCardsSection";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/services/bodywork")({
  head: () => ({
    meta: [
      { title: "Кузовной ремонт — Triumph Auto Service" },
      {
        name: "description",
        content: "Кузовной ремонт и сварочные работы, стапель, рихтовка. Закуп и подбор кузовных запчастей с нашей стороны.",
      },
    ],
  }),
  component: BodyworkPage,
});

const { prices } = COMPANY;

function BodyworkPage() {
  return (
    <ServicePageShell
      contact={{
        titleBefore: "Рассчитаем стоимость",
        goldPhrase: "кузовного ремонта",
        description: "Оставьте контакты — перезвоним в течение 15 минут и подготовим расчёт.",
      }}
    >
      <ServiceHero
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/#services" },
          { label: "Кузовной ремонт", href: "/services/bodywork" },
        ]}
        serviceLabel="Услуга 02"
        title={
          <>
            Кузовной <span className="gold-text">ремонт</span>
          </>
        }
        description="Восстановление геометрии кузова после ДТП, сварочные работы, замена элементов и рихтовка. Подбор и покупка кузовных запчастей — с нашей стороны."
        image={s2}
        imageAlt="Кузовной ремонт"
      />
      <ServiceOfferCardsSection
        eyebrow="Прайс"
        title="Наши"
        titleGold="услуги"
        offers={[
          {
            title: "Кузовной ремонт",
            priceFrom: prices.bodyRepairFromByn,
            desc: "Восстановление элементов кузова после ДТП и коррозии.",
            featured: true,
          },
          {
            title: "Рихтовка и выпрямление",
            priceFrom: prices.straighteningFromByn,
            desc: "Ремонт деформированных деталей без замены, сохранение оригинального металла.",
          },
          {
            title: "Восстановление геометрии кузова",
            priceFrom: prices.geometryFromByn,
            desc: "Стапельные работы и контроль геометрии на профессиональном оборудовании.",
          },
          {
            title: "Ремонт и замена деталей",
            priceFrom: prices.partsRepairFromByn,
            desc: "Замена повреждённых элементов, подбор и покупка запчастей с нашей стороны.",
          },
          {
            title: "Сварочные работы",
            priceFrom: prices.weldingFromByn,
            desc: "Ремонт лонжеронов, порогов и листового металла с контролем качества швов.",
          },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Сервис"
        title="Запчасти и оборудование"
        features={[
          {
            title: "Подбор запчастей",
            desc: "Берём на себя подбор и покупку кузовных деталей — вам не нужно искать поставщиков самостоятельно.",
          },
          { title: "Стапель Car-o-liner", desc: "Профессиональный стапель для восстановления геометрии кузова любой сложности." },
          { title: "Сварка и рихтовка", desc: "Сварочный участок и споттер для восстановления кузова после ДТП любой сложности." },
        ]}
      />
    </ServicePageShell>
  );
}
