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
      {
        name: "description",
        content: "Ремонт тормозной системы, рулевого, подвески, двигателя. Замена масла, техжидкостей и ГРМ. Подбор слесарных запчастей с нашей стороны.",
      },
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
        description="Ремонт тормозов, рулевого, подвески и двигателя. Замена масла, технических жидкостей и ГРМ. Закуп и подбор слесарных запчастей — с нашей стороны."
        image={s4}
        imageAlt="Слесарные работы"
      />
      <ServiceStepsSection
        title="Наши"
        titleGold="услуги"
        steps={[
          {
            step: "01",
            title: "Ремонт тормозной системы",
            desc: "Диагностика и ремонт тормозов: колодки, диски, суппорты, тормозные магистрали. Безопасность на дороге.",
          },
          {
            step: "02",
            title: "Ремонт рулевой",
            desc: "Ремонт рулевой рейки, наконечников, тяг и элементов управления. Устранение люфтов и стуков.",
          },
          {
            step: "03",
            title: "Ремонт подвески",
            desc: "Замена и ремонт амортизаторов, рычагов, сайлентблоков, опор. Восстановление после пригона и ДТП.",
          },
          {
            step: "04",
            title: "Масло ДВС и техжидкости",
            desc: "Замена моторного масла, фильтров, охлаждающей, тормозной и других рабочих жидкостей по регламенту.",
          },
          {
            step: "05",
            title: "Замена ГРМ",
            desc: "Замена ремня или цепи ГРМ, роликов и сопутствующих элементов. Предотвращаем критические поломки двигателя.",
          },
          {
            step: "06",
            title: "Ремонт ДВС",
            desc: "Диагностика и ремонт двигателя: устранение течей, замена прокладок, восстановление агрегата после пригона.",
          },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Сервис"
        title="Запчасти и оборудование"
        features={[
          {
            title: "Закуп запчастей",
            desc: "Подбираем и закупаем слесарные запчасти под ваш автомобиль — качество и совместимость под контролем.",
          },
          { title: "Диагностический сканер", desc: "Профессиональное оборудование для диагностики всех марок автомобилей." },
          { title: "Стенд развал-схождения", desc: "Точная регулировка углов установки колёс после ремонта подвески и рулевого." },
        ]}
      />
    </ServicePageShell>
  );
}
