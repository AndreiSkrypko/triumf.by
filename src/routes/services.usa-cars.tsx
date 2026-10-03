import { createFileRoute } from "@tanstack/react-router";
import s1 from "@/assets/s1.jpg";
import { Breadcrumb } from "@/components/Breadcrumb";

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
    <div className="font-sans text-foreground">
      <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-navy-foreground">
          <div className="flex items-center gap-4">
            <img src="/favicon.png" alt="Triumph Auto Service" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
            <div className="font-display leading-none">
              <div className="text-xl font-bold tracking-wide">TRIUMPH</div>
              <div className="text-[10px] tracking-[0.3em] opacity-70 mt-1">AUTO SERVICE</div>
            </div>
          </div>
          <nav className="flex gap-6 text-sm font-semibold">
            <a href="/" className="hover:text-gold transition-colors">Главная</a>
            <a href="/#services" className="hover:text-gold transition-colors">Услуги</a>
            <a href="/#steps" className="hover:text-gold transition-colors">Как работаем</a>
            <a href="/#contact" className="hover:text-gold transition-colors">Контакты</a>
          </nav>
          <a href="/#contact" className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-primary hover:text-primary-foreground">Получить расчёт</a>
        </div>
      </header>

      <div className="bg-navy border-b border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/#services" }, { label: "Авто из США и Канады", href: "/services/usa-cars" }]} />
        </div>
      </div>

      <section className="relative min-h-[60vh] overflow-hidden bg-navy text-navy-foreground">
        <img src={s1} alt="Авто из США" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-20">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />Услуга 01
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold uppercase leading-[1.05] md:text-7xl">
            Авто из <span className="text-gold">США и Канады</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed opacity-90">Подбор на аукционах Copart и IAAI, проверка истории, торги, доставка и растаможка. Прозрачный расчёт до покупки.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">Как мы работаем</h2>
        <div className="mt-16 space-y-12">
          {[
            { step: "01", title: "Подбор и проверка VIN", desc: "Анализируем аукционы Copart и IAAI, проверяем историю автомобиля по VIN, оцениваем реальное состояние и стоимость ремонта." },
            { step: "02", title: "Участие в торгах", desc: "Участвуем в аукционах от вашего имени, контролируем ставку, избегаем переплат. Опыт работы с американскими аукционами с 2020 года." },
            { step: "03", title: "Доставка и таможня", desc: "Организуем доставку в порт, оформляем документы, проводим растаможку. Полное сопровождение до момента получения автомобиля." },
            { step: "04", title: "Ремонт и подготовка", desc: "Кузовной ремонт, покраска, полировка. Автомобиль готов к эксплуатации — вы получаете машину под ключ." },
          ].map((item) => (
            <div key={item.step} className="grid items-center gap-8 md:grid-cols-[100px_1fr]">
              <div className="font-display text-5xl font-bold text-gold">{item.step}</div>
              <div>
                <h3 className="font-display text-2xl font-bold uppercase">{item.title}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-4xl font-bold uppercase">Почему выбирают нас</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { title: "Прозрачный расчёт", desc: "Показываем все расходы до покупки — никаких скрытых платежей." },
              { title: "Опыт работы", desc: "Более 500 автомобилей из США и Канады за 5 лет работы." },
              { title: "Гарантия", desc: "Гарантия на все виды работ — от подбора до ремонта." },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-gold pl-4">
                <h3 className="font-display text-2xl font-bold uppercase text-gold">{item.title}</h3>
                <p className="mt-2 opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase">Рассчитаем стоимость <span className="text-gold">авто из США</span></h2>
            <p className="mt-4 opacity-80">Оставьте контакты — перезвоним в течение 15 минут и подготовим расчёт.</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Спасибо! Мы скоро свяжемся."); }}>
            <input required placeholder="Ваше имя" className="w-full rounded-sm border border-navy-foreground/30 bg-transparent px-4 py-4 outline-hidden placeholder:text-navy-foreground/50 focus:border-gold focus:ring-1 focus:ring-gold transition" />
            <input required placeholder="Телефон" className="w-full rounded-sm border border-navy-foreground/30 bg-transparent px-4 py-4 outline-hidden placeholder:text-navy-foreground/50 focus:border-gold focus:ring-1 focus:ring-gold transition" />
            <button className="w-full rounded-sm bg-gold px-6 py-4 font-semibold uppercase tracking-wider text-navy transition hover:bg-primary hover:text-primary-foreground">Получить расчёт</button>
          </form>
        </div>
      </section>

      <footer className="bg-navy py-8 text-center text-sm text-navy-foreground/60 border-t border-navy-foreground/10">© 2026 Triumph Auto Service. Пригон, ремонт, покраска, обслуживание.</footer>
    </div>
  );
}
