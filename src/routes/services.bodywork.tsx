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
      { name: "description", content: "Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка. Профессиональный кузовной ремонт." },
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
        description="Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка. Возвращаем автомобилю заводские параметры."
        image={s2}
        imageAlt="Кузовной ремонт"
      />
      <ServiceStepsSection
        title="Наши"
        titleGold="услуги"
        steps={[
          { step: "01", title: "Стапельные работы", desc: "Восстановление геометрии кузова на профессиональном стапеле. Контроль точности с помощью лазерного измерительного оборудования." },
          { step: "02", title: "Замена элементов", desc: "Замена повреждённых деталей кузова на оригинальные или качественные аналоги. Подбор и заказ запчастей из США и Европы." },
          { step: "03", title: "Рихтовка", desc: "Ремонт деформированных элементов без замены. Восстанавливаем форму и сохраняем оригинальный металл." },
          { step: "04", title: "Выправка рамы", desc: "Выправка рамы и лонжеронов после серьёзных ДТП. Восстанавливаем несущую конструкцию автомобиля." },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Технологии"
        title="Оборудование"
        features={[
          { title: "Стапель Car-o-liner", desc: "Профессиональный стапель для восстановления геометрии кузова любой сложности." },
          { title: "Лазерный измеритель", desc: "Точное измерение геометрических параметров кузова с точностью до 1 мм." },
          { title: "Споттер", desc: "Вытяжка вмятин без разборки кузова. Сохранение заводского покрытия." },
        ]}
      />
    </ServicePageShell>
  );
}
