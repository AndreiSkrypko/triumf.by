import { useEffect } from "react";

/**
 * In-page anchor links: long jumps teleport to just short of the target and glide the last
 * half-screen, so smooth scrolling never drags through the pinned steps timeline.
 */
export function useAnchorScroll() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href");
      if (!href) return;

      const hash = href.startsWith("#") ? href : href.startsWith("/#") && window.location.pathname === "/" ? href.slice(1) : null;
      if (!hash || hash.length < 2) return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target) return;

      event.preventDefault();

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const destination = hash === "#top" ? 0 : Math.round(target.getBoundingClientRect().top + window.scrollY);
      const distance = destination - window.scrollY;
      const viewport = window.innerHeight;

      if (!reduceMotion && Math.abs(distance) > viewport * 1.2) {
        window.scrollTo({ top: destination - Math.sign(distance) * viewport * 0.5, behavior: "instant" });
      }
      window.scrollTo({ top: destination, behavior: reduceMotion ? "instant" : "smooth" });

      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
}
