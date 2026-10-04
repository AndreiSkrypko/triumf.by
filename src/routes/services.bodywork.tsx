import { createFileRoute } from "@tanstack/react-router";
import s2 from "@/assets/s2.jpg";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";

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
      <ServiceStepsSection
        title="Наши"
        titleGold="услуги"
        steps={[
          {
            step: "01",
            title: "Стапельные работы",
            desc: "Восстановление геометрии кузова на профессиональном стапеле. Контроль точности с помощью лазерного измерительного оборудования.",
          },
          {
            step: "02",
            title: "Замена элементов",
            desc: "Замена повреждённых деталей кузова. Подбираем и приобретаем кузовные запчасти — оригинал или качественные аналоги из США и Европы.",
          },
          {
            step: "03",
            title: "Сварочные работы",
            desc: "Ремонт и восстановление элементов кузова сваркой: лонжероны, пороги, листовой металл. Контроль качества швов и геометрии.",
          },
          {
            step: "04",
            title: "Рихтовка",
            desc: "Ремонт деформированных элементов без замены. Восстанавливаем форму и сохраняем оригинальный металл.",
          },
          {
            step: "05",
            title: "Выправка рамы",
            desc: "Выправка рамы и лонжеронов после серьёзных ДТП. Восстанавливаем несущую конструкцию автомобиля.",
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
