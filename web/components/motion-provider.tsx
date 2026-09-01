"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import type { gsap as GsapType } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

type Engine = {
  gsap: typeof GsapType;
  ScrollTrigger: typeof ScrollTriggerType;
  lenis: Lenis;
};

/**
 * Smooth scroll + scroll-reveal.
 *
 * Split into two effects on purpose. This component lives in the root
 * layout, which survives client-side navigation, so a single mount-once
 * effect left every scene bound to the DOM of whichever page happened to
 * load first. Coming back to the home page from a case study, the new
 * elements never got their tweens while `.reveal-ready` still held them at
 * opacity 0 — the page rendered blank and scrolling appeared frozen.
 *
 * So: Lenis and the ticker are created once and kept, while the GSAP
 * scenes are torn down and rebuilt on every route change.
 */
export function MotionProvider() {
  const pathname = usePathname();
  const engineRef = useRef<Engine | null>(null);
  const [ready, setReady] = useState(false);

  // ── Engine: created once, lives for the session ──
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let killed = false;
    let teardown: (() => void) | null = null;

    (async () => {
      const [{ default: LenisCtor }, { gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (killed) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new LenisCtor({
        // A long-ish duration with a steep ease-out is what reads as "soft":
        // the scroll leaves the wheel quickly and settles slowly, instead of
        // gliding at a constant rate the whole way.
        duration: 1.15,
        easing: (t) => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        // Touch is left alone: phones already have momentum scrolling, and
        // hijacking it makes the page feel detached from the finger.
        syncTouch: false,
      });

      // Drive Lenis from GSAP's ticker so scroll position and tweens are
      // read on the same frame; otherwise ScrollTrigger lags a frame behind.
      const onTick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(onTick);
      gsap.ticker.lagSmoothing(0);
      lenis.on("scroll", ScrollTrigger.update);

      // In-page anchors: the browser would jump these instantly, since the
      // CSS smooth behaviour is gone and Lenis does not intercept clicks by
      // itself. Delegated at the document so it covers links rendered later.
      const onAnchorClick = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;

        const link = (event.target as Element | null)?.closest?.("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || !href.includes("#")) return;

        const url = new URL(href, window.location.href);
        // Only same-document hashes; let real navigations through.
        if (url.pathname !== window.location.pathname) return;
        if (url.origin !== window.location.origin) return;

        const id = url.hash.slice(1);
        const target = id ? document.getElementById(id) : null;
        if (!id || !target) return;

        event.preventDefault();
        // The fixed top bar only exists below the rail breakpoint; above it
        // the rail is a left column and needs no vertical allowance.
        const offset = window.matchMedia("(min-width: 72rem)").matches ? 0 : -72;
        lenis.scrollTo(target, { offset, duration: 1.4 });
        history.pushState(null, "", url.hash);
      };

      document.addEventListener("click", onAnchorClick);

      // Mark the document so the CSS can hide reveal targets. Done only
      // now, after GSAP is confirmed loaded, so a failed import can never
      // leave content stuck at opacity 0.
      document.documentElement.classList.add("reveal-ready");

      engineRef.current = { gsap, ScrollTrigger, lenis };
      setReady(true);

      teardown = () => {
        document.removeEventListener("click", onAnchorClick);
        gsap.ticker.remove(onTick);
        document.documentElement.classList.remove("reveal-ready");
        lenis.destroy();
        engineRef.current = null;
      };
    })();

    return () => {
      killed = true;
      teardown?.();
    };
  }, []);

  // ── Scenes: rebuilt for the DOM of each route ──
  useEffect(() => {
    const engine = engineRef.current;
    if (!ready || !engine) return;

    const { gsap, ScrollTrigger, lenis } = engine;

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
        tl.to(heroFades, { opacity: 0, y: -80, ease: "none", duration: 0.78 }, 0);

        // autoAlpha, not opacity: it flips visibility too, so the
        // still-invisible rail cannot swallow clicks over the hero.
        tl.fromTo(
          railCards,
          { autoAlpha: 0, x: -28 },
          { autoAlpha: 1, x: 0, ease: "none", duration: 0.45, stagger: 0.045 },
          0.28,
        );
      } else {
        // No hero on this route, or below the rail breakpoint where the rail
        // is a toggled sheet rather than a fixed column.
        showRail();
      }

      // Masked line reveals for display headings.
      //
      // fromTo, never from: the CSS parks these at opacity 0, and `from`
      // reads the *current* value as its destination — so it animated
      // 0 → 0 and the whole page stayed blank. The end state has to be
      // stated explicitly.
      gsap.utils.toArray<HTMLElement>('[data-reveal="line"]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: Number(el.dataset.revealIndex ?? 0) * 0.08,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          },
        );
      });

      // Everything else fades up, staggered by its group.
      gsap.utils.toArray<HTMLElement>('[data-reveal="up"]').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: (i % 4) * 0.06,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      // Horizontal project gallery: pin the viewport and translate the
      // track by its own overflow width.
      const track = document.querySelector<HTMLElement>("[data-h-track]");
      const pin = document.querySelector<HTMLElement>("[data-h-pin]");
      if (track && pin && railBreakpoint) {
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

    // The new document is a different height, and Lenis caches its
    // dimensions — without this the wheel maps onto the old page's extent
    // and the scroll runs out early.
    lenis.resize();
    ScrollTrigger.refresh();

    // Fonts and images settle a frame or two after the route paints, which
    // moves every trigger start. Refresh once more after that.
    const settle = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(settle);
      // revert() kills this route's triggers and strips the inline styles
      // GSAP wrote, so the next route starts from the stylesheet.
      ctx.revert();
    };
  }, [pathname, ready]);

  return null;
}
