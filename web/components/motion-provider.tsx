"use client";

import { useEffect } from "react";

/**
 * Smooth scroll + scroll-reveal.
 *
 * The reference pairs Lenis momentum scrolling with GSAP ScrollTrigger.
 * Both are imported dynamically so neither ships in the initial bundle,
 * and both are skipped entirely under prefers-reduced-motion — a momentum
 * hijack is precisely what that setting is asking us not to do.
 */
export function MotionProvider() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: import("lenis").default | null = null;
    let killed = false;
    let cleanupTriggers: (() => void) | null = null;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (killed) return;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({ duration: 1.1, smoothWheel: true });

      // Drive Lenis from GSAP's ticker so scroll position and tweens are
      // read on the same frame; otherwise ScrollTrigger lags a frame behind.
      const onTick = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);

      // Mark the document so the CSS can hide reveal targets. Done only
      // now, after GSAP is confirmed loaded, so a failed import can never
      // leave content stuck at opacity 0.
      document.documentElement.classList.add("reveal-ready");

      const ctx = gsap.context(() => {
        // Masked line reveals for display headings.
        gsap.utils.toArray<HTMLElement>('[data-reveal="line"]').forEach((el) => {
          gsap.from(el, {
            yPercent: 110,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: Number(el.dataset.revealIndex ?? 0) * 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        // Everything else fades up, staggered by its group.
        gsap.utils.toArray<HTMLElement>('[data-reveal="up"]').forEach((el, i) => {
          gsap.from(el, {
            y: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 4) * 0.06,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });

        // Horizontal project gallery: pin the viewport and translate the
        // track by its own overflow width.
        const track = document.querySelector<HTMLElement>("[data-h-track]");
        const pin = document.querySelector<HTMLElement>("[data-h-pin]");
        if (track && pin && window.innerWidth >= 1024) {
          const distance = () => track.scrollWidth - pin.clientWidth;
          if (distance() > 0) {
            gsap.to(track, {
              x: () => -distance(),
              ease: "none",
              scrollTrigger: {
                trigger: pin,
                start: "top top",
                end: () => `+=${distance()}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            });
          }
        }
      });

      cleanupTriggers = () => {
        ctx.revert();
        gsap.ticker.remove(onTick);
        document.documentElement.classList.remove("reveal-ready");
      };

      ScrollTrigger.refresh();
    })();

    return () => {
      killed = true;
      cleanupTriggers?.();
      lenis?.destroy();
    };
  }, []);

  return null;
}
