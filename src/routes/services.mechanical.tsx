import { createFileRoute } from "@tanstack/react-router";
import s4 from "@/assets/s4.webp";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServiceOfferCardsSection } from "@/components/site/ServiceOfferCardsSection";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";
import { COMPANY } from "@/lib/company";

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
        description="Ремонт тормозов, рулевого, подвески и двигателя. Замена масла, технических жидкостей и ГРМ. Подбор и покупка слесарных запчастей — с нашей стороны."
        image={s4}
        imageAlt="Слесарные работы"
      />
      <ServiceOfferCardsSection
        eyebrow="Прайс"
        title="Слесарный"
        titleGold="ремонт"
        offers={[
          {
            title: "Слесарный ремонт",
            priceFrom: COMPANY.prices.mechanicalFromByn,
            desc: "Диагностика и работы по ходовой, тормозам, рулевому, ДВС и расходникам — стоимость зависит от объёма.",
            featured: true,
          },
        ]}
      />
      <ServiceStepsSection
        title="Направления"
        titleGold="работ"
        steps={[
          {
            title: "Ремонт тормозной системы",
            desc: "Диагностика и ремонт тормозов: колодки, диски, суппорты, тормозные магистрали. Безопасность на дороге.",
          },
          {
            title: "Ремонт рулевой",
            desc: "Ремонт рулевой рейки, наконечников, тяг и элементов управления. Устранение люфтов и стуков.",
          },
          {
            title: "Ремонт подвески",
            desc: "Замена и ремонт амортизаторов, рычагов, сайлентблоков, опор. Восстановление после пригона и ДТП.",
          },
          {
            title: "Масло ДВС и техжидкости",
            desc: "Замена моторного масла, фильтров, охлаждающей, тормозной и других рабочих жидкостей по регламенту.",
          },
          {
            title: "Замена ГРМ",
            desc: "Замена ремня или цепи ГРМ, роликов и сопутствующих элементов. Предотвращаем критические поломки двигателя.",
          },
          {
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
            title: "Подбор запчастей",
            desc: "Подбираем и приобретаем слесарные запчасти под ваш автомобиль — качество и совместимость под контролем.",
          },
          { title: "Диагностический сканер", desc: "Профессиональное оборудование для диагностики всех марок автомобилей." },
          { title: "Подъёмник 4-тонный", desc: "Безопасный доступ к ходовой части, тормозной системе и агрегатам автомобиля." },
        ]}
      />
    </ServicePageShell>
  );
}
