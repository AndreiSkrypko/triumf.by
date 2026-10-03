import { createFileRoute } from "@tanstack/react-router";
import s4 from "@/assets/s4.jpg";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";

export const Route = createFileRoute("/services/mechanical")({
  head: () => ({
    meta: [
      { title: "Слесарные работы — Triumph Auto Service" },
      { name: "description", content: "Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона." },
    ],
  }),
  component: MechanicalPage,
});

function MechanicalPage() {
  return (
    <ServicePageShell
      contact={{
        titleBefore: "Рассчитаем стоимость",
        goldPhrase: "слесарных работ",
        description: "Оставьте контакты — перезвоним в течение 15 минут и подготовим расчёт.",
      }}
    >
      <ServiceHero
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/#services" },
          { label: "Слесарные работы", href: "/services/mechanical" },
        ]}
        serviceLabel="Услуга 04"
        title={
          <>
            Слесарные <span className="gold-text">работы</span>
          </>
        }
        description="Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона. Полное техническое обслуживание."
        image={s4}
        imageAlt="Слесарные работы"
      />
      <ServiceStepsSection
        title="Наши"
        titleGold="услуги"
        steps={[
          { step: "01", title: "Диагностика", desc: "Компьютерная диагностика всех систем автомобиля. Выявление скрытых проблем после пригона." },
          { step: "02", title: "Ходовая и тормоза", desc: "Ремонт подвески, замена амортизаторов, тормозных колодок и дисков. Безопасность на дороге." },
          { step: "03", title: "Двигатель и КПП", desc: "Ремонт двигателя, коробки передач, замена ремня ГРМ, масла и фильтров. Надёжная работа агрегатов." },
          { step: "04", title: "Электрика", desc: "Диагностика и ремонт электроники, замена аккумулятора, ремонт стартера и генератора." },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Технологии"
        title="Оборудование"
        features={[
          { title: "Диагностический сканер", desc: "Профессиональное оборудование для диагностики всех марок автомобилей." },
          { title: "Подъёмник 4-тонный", desc: "Надёжный подъёмник для безопасного доступа к ходовой части и днищу автомобиля." },
          { title: "Стенд развал-схождения", desc: "Точная регулировка углов установки колёс для ровного износа и устойчивости на дороге." },
        ]}
      />
    </ServicePageShell>
  );
}
