import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import s1 from "@/assets/s1.jpg";
import s2 from "@/assets/s2.jpg";
import s3 from "@/assets/s3.jpg";
import s4 from "@/assets/s4.jpg";
import s5 from "@/assets/s5.jpg";
import logo from "@/assets/logo.png.asset.json";

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
  { img: s1, t: "Авто из США и Канады", d: "Подбор на аукционах Copart и IAAI, проверка истории, торги, доставка и растаможка. Прозрачный расчёт до покупки.", l: ["Подбор и проверка VIN", "Участие в торгах", "Доставка и таможня"] },
  { img: s2, t: "Кузовные работы", d: "Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка.", l: ["Стапельные работы", "Замена элементов", "Рихтовка"] },
  { img: s3, t: "Малярные работы", d: "Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска.", l: ["Подбор цвета", "Покраска в камере", "Полировка и защита"] },
  { img: s4, t: "Слесарные работы", d: "Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона.", l: ["Диагностика", "Ходовая и тормоза", "Двигатель и КПП"] },
  { img: s5, t: "Сопровождение авто", d: "Обслуживаем автомобиль весь срок владения: масла, фильтры, плановое ТО, сезонные работы.", l: ["Масла и фильтры", "Плановое ТО", "Сезонное обслуживание"] },
];

function Index() {
  return (
    <div className="font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-navy-foreground">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Triumph Auto Service" width={56} height={56} className="h-14 w-14 rounded-full" />
            <div className="font-display leading-tight">
              <div className="text-xl font-bold tracking-wide">TRIUMPH</div>
              <div className="text-[10px] tracking-[0.3em] opacity-70">AUTO SERVICE</div>
            </div>
          </div>
          <nav className="hidden gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-accent">Услуги</a>
            <a href="#steps" className="hover:text-accent">Как работаем</a>
            <a href="#contact" className="hover:text-accent">Контакты</a>
          </nav>
          <a href="#contact" className="rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent">Получить расчёт</a>
        </div>
      </header>

      <section className="relative min-h-[92vh] overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Автомобиль после покраски и полировки" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/75 to-transparent" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-16 pt-32">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-10 bg-accent" />Авто из США и Канады
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.05] md:text-7xl">
            Автомобиль <span className="text-accent">под ключ</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Покупка авто из США — кузовной ремонт — покраска — полировка — авто готово. Один сервис и одна ответственность на всём пути.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-sm bg-primary px-8 py-4 font-semibold uppercase tracking-wide text-primary-foreground transition hover:bg-accent">Подобрать авто</a>
            <a href="#services" className="rounded-sm border border-navy-foreground/40 px-8 py-4 font-semibold uppercase tracking-wide transition hover:border-accent hover:text-accent">Наши услуги</a>
          </div>
          <div className="mt-14 flex gap-1 text-accent">★ ★ ★ <span className="ml-3 text-sm text-navy-foreground/70">Гарантия на все виды работ</span></div>
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

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Полный цикл</div>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold uppercase md:text-5xl">Пригон → ремонт → покраска → готово</h2>
        <div className="mt-16 space-y-20">
          {blocks.map((b, i) => (
            <article key={b.t} className="grid items-center gap-10 md:grid-cols-2">
              <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
                <img src={b.img} alt={b.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-sm object-cover" />
                <div className="absolute -bottom-5 left-6 bg-primary px-5 py-2 font-display text-2xl font-bold text-primary-foreground">0{i + 1}</div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-bold uppercase">{b.t}</h3>
                <div className="mt-4 h-1 w-14 bg-primary" />
                <p className="mt-6 text-lg text-muted-foreground">{b.d}</p>
                <ul className="mt-6 space-y-3">
                  {b.l.map((x) => (
                    <li key={x} className="flex items-center gap-3 font-medium"><span className="h-2 w-2 bg-primary" />{x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          {[["5 этапов", "в одних руках"], ["Договор", "и фиксированная смета"], ["Гарантия", "на все виды работ"], ["Фотоотчёт", "на каждом этапе"]].map(([a, b]) => (
            <div key={a} className="border-l-2 border-primary pl-4">
              <div className="font-display text-3xl font-bold uppercase">{a}</div>
              <div className="text-sm opacity-70">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 border-2 border-primary p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase">Купили авто не через нас?</h2>
            <p className="mt-2 text-muted-foreground">Негде ремонтироваться — приезжайте к нам. Возьмём машину в работу на любом этапе.</p>
          </div>
          <a href="#contact" className="shrink-0 rounded-sm bg-primary px-8 py-4 font-semibold uppercase tracking-wide text-primary-foreground transition hover:bg-accent">Записаться</a>
        </div>
      </section>

      <section id="contact" className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold uppercase">Рассчитаем стоимость <span className="text-accent">авто под ключ</span></h2>
            <p className="mt-4 opacity-75">Оставьте контакты — перезвоним в течение 15 минут и подготовим расчёт.</p>
          </div>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Спасибо! Мы скоро свяжемся."); }}>
            <input required placeholder="Ваше имя" className="w-full rounded-sm border border-navy-foreground/20 bg-transparent px-4 py-4 outline-hidden placeholder:text-navy-foreground/50 focus:border-primary" />
            <input required placeholder="Телефон" className="w-full rounded-sm border border-navy-foreground/20 bg-transparent px-4 py-4 outline-hidden placeholder:text-navy-foreground/50 focus:border-primary" />
            <button className="w-full rounded-sm bg-primary px-6 py-4 font-semibold uppercase tracking-wide text-primary-foreground transition hover:bg-accent">Получить расчёт</button>
          </form>
        </div>
      </section>

      <footer className="bg-navy py-8 text-center text-sm text-navy-foreground/60 border-t border-navy-foreground/10">© 2026 Triumph Auto Service. Пригон, ремонт, покраска, обслуживание.</footer>
    </div>
  );
}
