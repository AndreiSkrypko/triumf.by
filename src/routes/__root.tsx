import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4 text-navy-foreground">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold uppercase">
          <span className="gold-text">404</span>
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold uppercase">Страница не найдена</h2>
        <p className="mt-3 text-sm text-navy-foreground/60">Такой страницы нет или она была перенесена.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="sheen inline-flex items-center justify-center rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-8 py-3 text-sm font-bold uppercase tracking-[0.12em] text-navy"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4 text-navy-foreground">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold uppercase">Страница не загрузилась</h1>
        <p className="mt-3 text-sm text-navy-foreground/60">Попробуйте обновить страницу или вернитесь на главную.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="sheen inline-flex items-center justify-center rounded-sm bg-linear-to-r from-gold-deep via-gold to-gold-light px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-navy"
          >
            Повторить
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-sm border border-navy-foreground/25 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition hover:border-gold/70 hover:text-gold"
          >
            На главную
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Triumph Auto Service" },
      { name: "description", content: "Triumph Auto Service — авто под ключ из США и Канады" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Oswald:wght@500;600;700&display=swap" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
