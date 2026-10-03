import { createFileRoute } from "@tanstack/react-router";
import s2 from "@/assets/s2.jpg";
import { Breadcrumb } from "@/components/Breadcrumb";

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
    <div className="font-sans text-foreground">
      <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-navy-foreground">
          <div className="flex items-center gap-4">
            <img src="/image.png" alt="Triumph Auto Service" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
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
          <Breadcrumb items={[{ label: "Главная", href: "/" }, { label: "Услуги", href: "/#services" }, { label: "Кузовной ремонт", href: "/services/bodywork" }]} />
        </div>
      </div>

      <section className="relative min-h-[60vh] overflow-hidden bg-navy text-navy-foreground">
        <img src={s2} alt="Кузовной ремонт" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-20">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />Услуга 02
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold uppercase leading-[1.05] md:text-7xl">
            Кузовной <span className="text-gold">ремонт</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed opacity-90">Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка. Возвращаем автомобилю заводские параметры.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">Наши услуги</h2>
        <div className="mt-16 space-y-12">
          {[
            { step: "01", title: "Стапельные работы", desc: "Восстановление геометрии кузова на профессиональном стапеле. Контроль точности с помощью лазерного измерительного оборудования." },
            { step: "02", title: "Замена элементов", desc: "Замена повреждённых деталей кузова на оригинальные или качественные аналоги. Подбор и заказ запчастей из США и Европы." },
            { step: "03", title: "Рихтовка", desc: "Ремонт деформированных элементов без замены. Восстанавливаем форму и сохраняем оригинальный металл." },
            { step: "04", title: "Выправка рамы", desc: "Выправка рамы и лонжеронов после серьёзных ДТП. Восстанавливаем несущую конструкцию автомобиля." },
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
          <h2 className="font-display text-4xl font-bold uppercase">Оборудование</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { title: "Стапель Car-o-liner", desc: "Профессиональный стапель для восстановления геометрии кузова любой сложности." },
              { title: "Лазерный измеритель", desc: "Точное измерение геометрических параметров кузова с точностью до 1 мм." },
              { title: "Споттер", desc: "Вытяжка вмятин без разборки кузова. Сохранение заводского покрытия." },
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
            <h2 className="font-display text-4xl font-bold uppercase">Рассчитаем стоимость <span className="text-gold">кузовного ремонта</span></h2>
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
