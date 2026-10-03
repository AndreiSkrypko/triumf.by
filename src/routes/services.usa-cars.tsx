import { createFileRoute } from "@tanstack/react-router";
import s1 from "@/assets/s1.jpg";
import { ServiceFeaturesSection } from "@/components/site/ServiceFeaturesSection";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServicePageShell } from "@/components/site/ServicePageShell";
import { ServiceStepsSection } from "@/components/site/ServiceStepsSection";

export const Route = createFileRoute("/services/usa-cars")({
  head: () => ({
    meta: [
      { title: "Авто из США и Канады — Triumph Auto Service" },
      { name: "description", content: "Подбор автомобилей на аукционах Copart и IAAI, проверка истории, участие в торгах, доставка и растаможка. Прозрачный расчёт до покупки." },
    ],
  }),
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
        description="Подбор на аукционах Copart и IAAI, проверка истории, торги, доставка и растаможка. Прозрачный расчёт до покупки."
        image={s1}
        imageAlt="Авто из США"
      />
      <ServiceStepsSection
        title="Как мы"
        titleGold="работаем"
        steps={[
          { step: "01", title: "Подбор и проверка VIN", desc: "Анализируем аукционы Copart и IAAI, проверяем историю автомобиля по VIN, оцениваем реальное состояние и стоимость ремонта." },
          { step: "02", title: "Участие в торгах", desc: "Участвуем в аукционах от вашего имени, контролируем ставку, избегаем переплат. Опыт работы с американскими аукционами с 2020 года." },
          { step: "03", title: "Доставка и таможня", desc: "Организуем доставку в порт, оформляем документы, проводим растаможку. Полное сопровождение до момента получения автомобиля." },
          { step: "04", title: "Ремонт и подготовка", desc: "Кузовной ремонт, покраска, полировка. Автомобиль готов к эксплуатации — вы получаете машину под ключ." },
        ]}
      />
      <ServiceFeaturesSection
        eyebrow="Надёжность"
        title="Почему выбирают нас"
        features={[
          { title: "Прозрачный расчёт", desc: "Показываем все расходы до покупки — никаких скрытых платежей." },
          { title: "Опыт работы", desc: "Более 500 автомобилей из США и Канады за 5 лет работы." },
          { title: "Гарантия", desc: "Гарантия на все виды работ — от подбора до ремонта." },
        ]}
      />
    </ServicePageShell>
  );
}
