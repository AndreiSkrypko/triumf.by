import { createFileRoute } from "@tanstack/react-router";
import s5 from "@/assets/s5.jpg";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";

export const Route = createFileRoute("/services/maintenance")({
  head: () => ({
    meta: [
      { title: "Сопровождение авто — Triumph Auto Service" },
      { name: "description", content: "Обслуживание автомобиля весь срок владения: масла, фильтры, плановое ТО, сезонные работы." },
    ],
  }),
  component: MaintenancePage,
});

function MaintenancePage() {
  return (
    <ServicePageShell
      contact={{
        titleBefore: "Запишитесь на",
        goldPhrase: "обслуживание",
        description: "Оставьте контакты — перезвоним в течение 15 минут и подберём удобное время.",
        submitLabel: "Записаться",
      }}
    >
      <ServiceHero
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/#services" },
          { label: "Сопровождение авто", href: "/services/maintenance" },
        ]}
        serviceLabel="Услуга 05"
        title={
          <>
            Сопровождение <span className="gold-text">авто</span>
          </>
        }
        description="Обслуживаем автомобиль весь срок владения: масла, фильтры, плановое ТО, сезонные работы. Ваш автомобиль всегда в идеальном состоянии."
        image={s5}
        imageAlt="Сопровождение авто"
      />
      <ServiceStepsSection
        title="Наши"
        titleGold="услуги"
        steps={[
          { step: "01", title: "Масла и фильтры", desc: "Замена моторного масла, фильтров, жидкостей по регламенту производителя. Используем только качественные материалы." },
          { step: "02", title: "Плановое ТО", desc: "Полное техническое обслуживание по регламенту. Проверка всех систем и узлов автомобиля." },
          { step: "03", title: "Сезонное обслуживание", desc: "Подготовка к зиме и лету: замена резины, проверка аккумулятора, антифриза и тормозной системы." },
          { step: "04", title: "Шиномонтаж", desc: "Профессиональный шиномонтаж, балансировка, хранение резины. Безопасность и комфорт на дороге." },
        ]}
      />
      <ServiceFeaturesSection
        title="Преимущества"
        features={[
          { title: "Напоминания о ТО", desc: "Напоминаем о плановом обслуживании заранее. Вы никогда не пропустите срок." },
          { title: "История обслуживания", desc: "Ведём полную историю обслуживания вашего автомобиля. Всегда знаем, что было сделано." },
          { title: "Скидки постоянным", desc: "Скидки 10% на все работы для постоянных клиентов. Выгодно обслуживаться у нас." },
        ]}
      />
    </ServicePageShell>
  );
}
