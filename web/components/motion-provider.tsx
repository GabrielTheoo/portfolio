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
        // ── Hero handoff ──
        // Scrubbed across the hero's scroll length: the copy fades and lifts
        // away while the rail cards assemble in, so the hero visibly hands
        // over to the rest of the page.
        const hero = document.querySelector<HTMLElement>("[data-hero]");
        const heroFades = gsap.utils.toArray<HTMLElement>("[data-hero-fade]");
        const railCards = gsap.utils.toArray<HTMLElement>("[data-rail-card]");
        const railBreakpoint = window.matchMedia("(min-width: 72rem)").matches;

        /** Release the rail unconditionally. The CSS hides it, so any path
         *  that does not run the timeline has to call this or the rail would
         *  stay invisible for good. */
        const showRail = () => gsap.set(railCards, { autoAlpha: 1, x: 0 });

        if (hero && railBreakpoint) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              // If the measured distance collapses — a zero-height hero, a
              // layout that has not settled — there is no scroll range to
              // drive the handoff, so hand the rail over immediately rather
              // than leaving the page with no navigation at all.
              onRefresh: (self) => {
                if (self.end - self.start < 1) showRail();
              },
            },
          });

          // Durations are explicit and normalised to a 1.0 timeline: on the
          // defaults the copy hit zero at ~47% while the rail was still
          // assembling, leaving a stretch of bare shader with a half-built
          // rail. The copy now clears over most of the range and the rail
          // starts a beat later, so it reads as a handoff.
          tl.to(
            heroFades,
            { opacity: 0, y: -80, ease: "none", duration: 0.62 },
            0,
          );

          // autoAlpha, not opacity: it flips visibility too, so the
          // still-invisible rail cannot swallow clicks over the hero.
          tl.fromTo(
            railCards,
            { autoAlpha: 0, x: -28 },
            {
              autoAlpha: 1,
              x: 0,
              ease: "none",
              duration: 0.45,
              stagger: 0.045,
            },
            0.28,
          );
        } else {
          // No hero on this route, or below the rail breakpoint where the rail
          // is a toggled sheet rather than a fixed column.
          showRail();
        }

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
