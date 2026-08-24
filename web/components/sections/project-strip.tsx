"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Horizontal project strip with a scroll progress indicator.
 *
 * Below the rail breakpoint the strip is swiped natively. The native
 * horizontal scrollbar was the wrong control for that: the global
 * `::-webkit-scrollbar` rule only set `width`, which does nothing for a
 * horizontal bar, so it rendered a stray accent thumb that did not track
 * the swipe. The bar is hidden here and replaced with a real indicator.
 *
 * Above the breakpoint the motion provider pins the section and drives the
 * track by transform instead, so the indicator is not shown.
 */
export function ProjectStrip({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  /** Thumb geometry in percentages, so it reads as a real scrollbar: the
   *  width is the share of the track in view, and it slides across the
   *  remainder rather than filling from the left. */
  const [thumb, setThumb] = useState({ width: 0, offset: 0 });
  const scrollable = thumb.width > 0 && thumb.width < 100;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Event-driven, not a rAF loop: scroll events are delivered even when
    // rAF is throttled, and a poll would burn frames to watch a value that
    // only changes on interaction. ResizeObserver covers the geometry,
    // since the card widths are viewport-dependent.
    const measure = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 8) {
        setThumb({ width: 0, offset: 0 });
        return;
      }
      const width = Math.max(14, (el.clientWidth / el.scrollWidth) * 100);
      setThumb({ width, offset: (el.scrollLeft / max) * (100 - width) });
    };

    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", measure);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={scrollerRef}
        className="strip-scroller mt-14 overflow-x-auto pb-2 rail:mt-20 rail:overflow-x-visible rail:pb-0"
      >
        {children}
      </div>

      {/* Indicator. Hidden once the pinned desktop behaviour takes over. */}
      {scrollable ? (
        <div
          aria-hidden
          className="relative mx-5 mt-5 h-0.5 rounded-full bg-rule rail:hidden"
        >
          <div
            className="absolute inset-y-0 rounded-full bg-accent"
            style={{ width: `${thumb.width}%`, left: `${thumb.offset}%` }}
          />
        </div>
      ) : null}
    </>
  );
}
