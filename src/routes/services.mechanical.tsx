import { createFileRoute } from "@tanstack/react-router";
import s4 from "@/assets/s4.jpg";

export const Route = createFileRoute("/services/mechanical")({
  head: () => ({
    meta: [
      { title: "Слесарные работы — Triumph Auto Service" },
      { name: "description", content: "Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона. Профессиональный ремонт." },
    ],
  }),
  component: MechanicalPage,
});

function MechanicalPage() {
  return (
    <div className="font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-navy-foreground">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Triumph Auto Service" width={56} height={56} className="h-14 w-14 rounded-full" />
            <div className="font-display leading-tight">
              <div className="text-xl font-bold tracking-wide">TRIUMPH</div>
              <div className="text-[10px] tracking-[0.3em] opacity-70">AUTO SERVICE</div>
            </div>
          </div>
          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="/#services" className="hover:text-gold transition-colors">Услуги</a>
            <a href="/#steps" className="hover:text-gold transition-colors">Как работаем</a>
            <a href="/#contact" className="hover:text-gold transition-colors">Контакты</a>
          </nav>
          <a href="/#contact" className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-primary hover:text-primary-foreground">Получить расчёт</a>
        </div>
      </header>

      <section className="relative min-h-[60vh] overflow-hidden bg-navy text-navy-foreground">
        <img src={s4} alt="Слесарные работы" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-32">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />Услуга 04
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold uppercase leading-[1.05] md:text-7xl">
            Слесарные <span className="text-gold">работы</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed opacity-90">Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона. Полное техническое обслуживание.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">Наши услуги</h2>
        <div className="mt-16 space-y-12">
          {[
            { step: "01", title: "Диагностика", desc: "Компьютерная диагностика всех систем автомобиля. Выявление скрытых проблем после пригона." },
            { step: "02", title: "Ходовая и тормоза", desc: "Ремонт подвески, замена амортизаторов, тормозных колодок и дисков. Безопасность на дороге." },
            { step: "03", title: "Двигатель и КПП", desc: "Ремонт двигателя, коробки передач, замена ремня ГРМ, масла и фильтров. Надёжная работа агрегатов." },
            { step: "04", title: "Электрика", desc: "Диагностика и ремонт электроники, замена аккумулятора, ремонт стартера и генератора." },
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
              { title: "Диагностический сканер", desc: "Профессиональное оборудование для диагностики всех марок автомобилей." },
              { title: "Подъёмник 4-тонный", desc: "Надёжный подъёмник для безопасного доступа к ходовой части и днищу автомобиля." },
              { title: "Шиномонтажный станок", desc: "Профессиональный шиномонтаж и балансировка колёс с точностью до 1 грамма." },
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
            <h2 className="font-display text-4xl font-bold uppercase">Рассчитаем стоимость <span className="text-gold">слесарных работ</span></h2>
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
