import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Авто под ключ из США и Канады — пригон, ремонт, покраска" },
      { name: "description", content: "Пригон авто из США/Канады, кузовной ремонт, покраска, слесарные работы и обслуживание. Автомобиль под ключ в одной компании." },
      { property: "og:title", content: "Авто под ключ из США и Канады" },
      { property: "og:description", content: "Пригон, ремонт, покраска, слесарка и сопровождение — всё в одних руках." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = ["Пригон", "Ремонт", "Малярные", "Слесарные", "Сопровождение"];

const blocks = [
  { n: "01", t: "Авто из США и Канады", d: "Подбор на аукционах Copart и IAAI, проверка истории, торги, доставка и растаможка. Прозрачный расчёт стоимости до покупки.", l: ["Подбор и проверка VIN", "Участие в торгах", "Доставка и таможня"] },
  { n: "02", t: "Кузовные работы", d: "Восстановление геометрии кузова после ДТП на стапеле, замена и ремонт элементов, рихтовка.", l: ["Стапельные работы", "Замена элементов", "Рихтовка без покраски"] },
  { n: "03", t: "Малярные работы", d: "Покраска в камере с точным подбором цвета, локальный ремонт и полировка до заводского блеска.", l: ["Подбор цвета", "Покраска в камере", "Полировка и защита"] },
  { n: "04", t: "Слесарные работы", d: "Ремонт ходовой, двигателя, тормозной системы. Диагностика и устранение скрытых проблем после пригона.", l: ["Компьютерная диагностика", "Ходовая и тормоза", "Двигатель и КПП"] },
  { n: "05", t: "Сопровождение авто", d: "Берём автомобиль на обслуживание на весь срок владения: масла, фильтры, плановое ТО, сезонные работы.", l: ["Замена масел и фильтров", "Плановое ТО", "Напоминания о сервисе"] },
];

function Index() {
  return (
    <div className="font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-navy-foreground">
          <span className="text-lg font-extrabold tracking-tight">АВТО<span className="text-accent">•</span>ПОД КЛЮЧ</span>
          <a href="#contact" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground">Получить расчёт</a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Автомобиль после ремонта и покраски" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Авто из США и Канады</p>
          <h1 className="mt-4 max-w-2xl text-5xl font-extrabold leading-tight md:text-6xl">Автомобиль под ключ — от аукциона до вашего гаража</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Покупаем, пригоняем, ремонтируем, красим и обслуживаем. Один подрядчик и одна ответственность на всём пути.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">Подобрать авто</a>
            <a href="#services" className="rounded-md border border-navy-foreground/30 px-6 py-3 font-semibold">Наши услуги</a>
          </div>
          <ol className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-lg bg-navy-foreground/15 sm:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s} className="bg-navy/90 px-4 py-4">
                <span className="text-xs text-accent">0{i + 1}</span>
                <div className="font-semibold">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[["5 этапов", "в одних руках"], ["Договор", "и фиксированная смета"], ["Гарантия", "на все виды работ"], ["Фотоотчёт", "на каждом этапе"]].map(([a, b]) => (
            <div key={a}><div className="text-2xl font-extrabold text-primary">{a}</div><div className="text-sm text-muted-foreground">{b}</div></div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-xl text-4xl font-extrabold">Полный цикл: пригон → ремонт → покраска → готово</h2>
        <div className="mt-14 space-y-4">
          {blocks.map((b) => (
            <article key={b.n} className="grid gap-6 rounded-lg border bg-card p-8 md:grid-cols-[80px_1fr_260px]">
              <div className="text-4xl font-extrabold text-accent">{b.n}</div>
              <div><h3 className="text-2xl font-bold">{b.t}</h3><p className="mt-2 text-muted-foreground">{b.d}</p></div>
              <ul className="space-y-2 text-sm">{b.l.map((x) => <li key={x} className="flex gap-2"><span className="text-primary">✓</span>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Купили авто не через нас?</h2>
            <p className="mt-2 opacity-85">Негде ремонтироваться — приезжайте. Возьмём машину в работу на любом этапе.</p>
          </div>
          <a href="#contact" className="rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">Записаться на ремонт</a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 rounded-xl bg-navy p-10 text-navy-foreground md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Рассчитаем стоимость авто под ключ</h2>
            <p className="mt-3 opacity-80">Оставьте контакты — перезвоним в течение 15 минут и подготовим расчёт.</p>
          </div>
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Спасибо! Мы скоро свяжемся."); }}>
            <input required placeholder="Ваше имя" className="w-full rounded-md bg-navy-foreground/10 px-4 py-3 outline-none placeholder:text-navy-foreground/50" />
            <input required placeholder="Телефон" className="w-full rounded-md bg-navy-foreground/10 px-4 py-3 outline-none placeholder:text-navy-foreground/50" />
            <button className="w-full rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground">Получить расчёт</button>
          </form>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Авто под ключ. Пригон, ремонт, покраска, обслуживание.</footer>
    </div>
  );
}
