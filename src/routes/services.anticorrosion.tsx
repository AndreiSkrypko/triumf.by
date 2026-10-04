import { createFileRoute } from "@tanstack/react-router";
import sAnticor from "@/assets/s-anticor.jpg";
import { COMPANY } from "@/lib/company";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";

export const Route = createFileRoute("/services/anticorrosion")({
  head: () => ({
    meta: [
      { title: "Антикоррозийная обработка — Triumph Auto Service" },
      {
        name: "description",
        content: "Антикоррозийная обработка автомобиля: подготовка, нанесение составов, защита скрытых полостей и днища. Работаем по договору.",
      },
    ],
  }),
  component: AnticorrosionPage,
});

function AnticorrosionPage() {
  return (
    <ServicePageShell
      contact={{
        titleBefore: "Рассчитаем стоимость",
        goldPhrase: "антикоррозийной обработки",
        description: "Оставьте контакты — перезвоним в течение 15 минут и подберём оптимальный пакет защиты.",
      }}
    >
      <ServiceHero
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/#services" },
          { label: "Антикоррозийная обработка", href: "/services/anticorrosion" },
        ]}
        serviceLabel="Услуга 05"
        title={
          <>
            Антикоррозийная <span className="gold-text">обработка</span>
          </>
        }
        description={`Комплексная защита кузова от коррозии: подготовка, скрытые полости, днище и арки. Стоимость — от ${COMPANY.prices.anticorFromByn} BYN. Особенно актуально для авто после пригона из США.`}
        image={sAnticor}
        imageAlt="Антикоррозийная обработка автомобиля"
      />
      <ServiceStepsSection
        title="Этапы"
        titleGold="обработки"
        steps={[
          {
            step: "01",
            title: "Диагностика и мойка",
            desc: "Осматриваем днище и скрытые зоны, оцениваем состояние металла, выполняем подготовительную мойку и сушку.",
          },
          {
            step: "02",
            title: "Подготовка поверхности",
            desc: "Удаляем ржавчину и старые покрытия, обезжириваем и подготавливаем металл под нанесение защитных составов.",
          },
          {
            step: "03",
            title: "Скрытые полости",
            desc: "Обрабатываем лонжероны, пороги, стойки и другие полости восковыми или полимерными составами.",
          },
          {
            step: "04",
            title: "Днище и арки",
            desc: "Наносим антигравий и антикор на днище, арки и уязвимые элементы для защиты от влаги и реагентов.",
          },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Надёжность"
        title="Почему это важно"
        features={[
          {
            title: "После пригона из США",
            desc: "Авто с американских аукционов часто нуждаются в усиленной защите перед нашей зимой и реагентами.",
          },
          {
            title: "Долгий срок службы",
            desc: "Качественная антикоррозийная обработка сохраняет кузов и снижает риск скрытой коррозии на годы.",
          },
          {
            title: "По договору",
            desc: "Фиксируем объём работ и материалы в договоре — вы заранее понимаете, что входит в обработку.",
          },
        ]}
      />
    </ServicePageShell>
  );
}
