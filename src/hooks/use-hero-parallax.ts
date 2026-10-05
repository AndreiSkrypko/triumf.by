import { useEffect, type RefObject } from "react";

/**
 * Writes --px / --py (pointer, −1…1, eased) and --sy (scroll progress through the hero, 0…1)
 * onto the given element. Runs only while the hero is on screen.
 */
export function useHeroParallax(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;
    let running = false;

    const onPointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      x += (targetX - x) * 0.06;
      y += (targetY - y) * 0.06;
      const height = el.offsetHeight || 1;
      const scroll = Math.min(Math.max(window.scrollY / height, 0), 1);
      el.style.setProperty("--px", x.toFixed(4));
      el.style.setProperty("--py", y.toFixed(4));
      el.style.setProperty("--sy", scroll.toFixed(4));
      if (running) raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()));
    io.observe(el);

    if (finePointer) {
      el.addEventListener("pointermove", onPointerMove);
      el.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      stop();
      io.disconnect();
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [ref]);
}
