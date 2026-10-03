import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triumph Auto Service — авто под ключ из США и Канады" },
      { name: "description", content: "Пригон авто из США/Канады, кузовной ремонт, покраска, слесарные работы и обслуживание. Автомобиль под ключ в одной компании." },
      { property: "og:title", content: "Triumph Auto Service — авто под ключ" },
      { property: "og:description", content: "Пригон, ремонт, покраска, слесарка и сопровождение — всё в одних руках." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = ["Пригон", "Кузовной ремонт", "Покраска", "Слесарные", "Сопровождение"];

const blocks = [
  { img: s1, t: "Авто из США и Канады", d: "Подбор на аукционах Copart и IAAI, проверка истории, торги, доставка и растаможка. Прозрачный расчёт до покупки.", l: ["Подбор и проверка VIN", "Участие в торгах", "Доставка и таможня"], link: "/services/usa-cars" },
  { img: s2, t: "Кузовные работы", d: "Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка.", l: ["Стапельные работы", "Замена элементов", "Рихтовка"], link: "/services/bodywork" },
  { img: s3, t: "Малярные работы", d: "Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска.", l: ["Подбор цвета", "Покраска в камере", "Полировка и защита"], link: "/services/paintwork" },
  { img: s4, t: "Слесарные работы", d: "Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона.", l: ["Диагностика", "Ходовая и тормоза", "Двигатель и КПП"], link: "/services/mechanical" },
  { img: s5, t: "Сопровождение авто", d: "Обслуживаем автомобиль весь срок владения: масла, фильтры, плановое ТО, сезонные работы.", l: ["Масла и фильтры", "Плановое ТО", "Сезонное обслуживание"], link: "/services/maintenance" },
];

function Index() {
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
            <a href="#services" className="hover:text-gold transition-colors">Услуги</a>
            <a href="#steps" className="hover:text-gold transition-colors">Как работаем</a>
            <a href="#contact" className="hover:text-gold transition-colors">Контакты</a>
          </nav>
          <a href="#contact" className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-navy transition hover:bg-primary hover:text-primary-foreground">Получить расчёт</a>
        </div>
      </header>

      <section className="relative min-h-[92vh] overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Автомобиль после покраски и полировки" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-20">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-12 bg-gold" />Авто из США и Канады
          </div>
          <h1 className="mt-8 max-w-5xl font-display text-6xl font-bold uppercase leading-[1.05] md:text-8xl">
            Автомобиль <span className="text-gold">под ключ</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed opacity-90">Покупка авто из США — кузовной ремонт — покраска — полировка — авто готово. Один сервис и одна ответственность на всём пути.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-sm bg-gold px-10 py-4 font-semibold uppercase tracking-wider text-navy transition hover:bg-primary hover:text-primary-foreground">Подобрать авто</a>
            <a href="#services" className="rounded-sm border-2 border-gold/50 px-10 py-4 font-semibold uppercase tracking-wider transition hover:border-gold hover:text-gold">Наши услуги</a>
          </div>
          <div className="mt-16 flex gap-1 text-gold text-lg">★ ★ ★ <span className="ml-4 text-base text-navy-foreground/80">Гарантия на все виды работ</span></div>
        </div>
      </section>

      <section id="steps" className="bg-primary text-primary-foreground">
        <ol className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s} className="border-primary-foreground/20 px-6 py-8 md:border-l md:first:border-l-0">
              <div className="font-display text-3xl font-bold opacity-60">0{i + 1}</div>
              <div className="mt-1 font-semibold uppercase tracking-wide">{s}</div>
            </li>
          ))}
        </ol>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Полный цикл</div>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold uppercase md:text-6xl">Пригон → ремонт → покраска → готово</h2>
        <div className="mt-16 space-y-20">
          {blocks.map((b, i) => (
            <Link to={b.link} key={b.t} className="grid items-center gap-10 md:grid-cols-2 cursor-pointer group">
              <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
                <img src={b.img} alt={b.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-sm object-cover group-hover:opacity-90 transition" />
                <div className="absolute -bottom-5 left-6 bg-gold px-6 py-2 font-display text-2xl font-bold text-navy">0{i + 1}</div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold uppercase group-hover:text-gold transition">{b.t}</h3>
                <div className="mt-4 h-1 w-16 bg-gold" />
                <p className="mt-6 text-lg text-muted-foreground">{b.d}</p>
                <ul className="mt-6 space-y-3">
                  {b.l.map((x) => (
                    <li key={x} className="flex items-center gap-3 font-medium"><span className="h-2 w-2 bg-gold" />{x}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-20 md:grid-cols-4">
          {[
            ["5 этапов", "в одних руках"],
            ["Договор", "и фиксированная смета"],
            ["Гарантия", "на все виды работ"],
            ["Фотоотчёт", "на каждом этапе"]
          ].map(([a, b]) => (
            <div key={a} className="border-l-2 border-gold pl-4">
              <div className="font-display text-3xl font-bold uppercase text-gold">{a}</div>
              <div className="text-sm opacity-80">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 border-2 border-gold/30 bg-navy/50 p-12 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase">Купили авто не через нас?</h2>
            <p className="mt-2 text-muted-foreground">Негде ремонтироваться — приезжайте к нам. Возьмём машину в работу на любом этапе.</p>
          </div>
          <a href="#contact" className="shrink-0 rounded-sm bg-gold px-10 py-4 font-semibold uppercase tracking-wider text-navy transition hover:bg-primary hover:text-primary-foreground">Записаться</a>
        </div>
      </section>

      <section id="contact" className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase">Рассчитаем стоимость <span className="text-gold">авто под ключ</span></h2>
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
