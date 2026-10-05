import { createFileRoute } from "@tanstack/react-router";
import s1 from "@/assets/s1.webp";
import { COMPANY } from "@/lib/company";
import { buildHead } from "@/lib/seo";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServiceOfferCardsSection } from "@/components/site/ServiceOfferCardsSection";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";

export const Route = createFileRoute("/services/usa-cars")({
  head: () => buildHead("/services/usa-cars"),
  component: UsaCarsPage,
});

function UsaCarsPage() {
  return (
    <ServicePageShell
      contact={{
        titleBefore: "Рассчитаем стоимость",
        goldPhrase: "авто из США",
        description: "Оставьте контакты — перезвоним в течение 15 минут и подготовим прозрачный расчёт до покупки.",
      }}
    >
      <ServiceHero
        breadcrumb={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/#services" },
          { label: "Авто из США и Канады", href: "/services/usa-cars" },
        ]}
        serviceLabel="Услуга 01"
        title={
          <>
            Авто из <span className="gold-text">США и Канады</span>
          </>
        }
        description="Подбор на аукционах Copart, IAAI и Manheim. Работаем по договору — проверка истории, торги, доставка и растаможка."
        image={s1}
        imageAlt="Авто из США"
      />
      <ServiceOfferCardsSection
        eyebrow="Прайс"
        title="Подбор и"
        titleGold="торги"
        offers={[
          {
            title: "Подбор авто и участие в торгах",
            priceFrom: COMPANY.prices.usaSelectionByn,
            desc: "Copart, IAAI, Manheim — проверка VIN и сопровождение сделки. Остальные расходы согласуем до покупки.",
            featured: true,
          },
        ]}
      />
      <ServiceStepsSection
        title="Как мы"
        titleGold="работаем"
        steps={[
          { title: "Подбор и проверка VIN", desc: "Анализируем аукционы Copart, IAAI и Manheim, проверяем историю автомобиля по VIN, оцениваем реальное состояние и стоимость ремонта." },
          { title: "Участие в торгах", desc: "Участвуем в аукционах от вашего имени, контролируем ставку, избегаем переплат. Опыт работы с американскими аукционами с 2020 года." },
          { title: "Доставка и таможня", desc: "Организуем доставку в порт, оформляем документы, проводим растаможку. Полное сопровождение до момента получения автомобиля." },
          { title: "Ремонт и подготовка", desc: "Кузовной ремонт, покраска, полировка. Автомобиль готов к эксплуатации — вы получаете машину под ключ." },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Надёжность"
        title="Почему выбирают нас"
        features={[
          { title: "Работаем по договору", desc: "Заключаем договор до старта работ и фиксируем смету — все расходы прозрачны до покупки." },
          { title: "Опыт работы", desc: "Более 500 автомобилей из США и Канады за 5 лет работы." },
          { title: "Стоимость подбора", desc: `Подбор автомобиля и участие в торгах — ${COMPANY.prices.usaSelectionByn} BYN. Остальные расходы согласуем до покупки.` },
        ]}
      />
    </ServicePageShell>
  );
}
