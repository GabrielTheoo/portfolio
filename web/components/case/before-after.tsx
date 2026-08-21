"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type Side = { src: string; alt: string; label: string };

/**
 * Before/after comparison slider.
 *
 * Follows the shipped site's behaviour: the divider tracks the pointer on
 * hover with no click required, and drag works on touch. Keyboard users get
 * the range input, which is the actual control — the visuals are layered on
 * top of it.
 */
export function BeforeAfter({
  before,
  after,
  hint,
}: {
  before: Side;
  after: Side;
  hint: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-[0.7rem] font-normal uppercase tracking-[0.14em] text-ink-muted">
          {before.label}
        </p>
        <p className="text-[0.7rem] font-normal uppercase tracking-[0.14em] text-accent">
          {after.label}
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative aspect-[16/9] w-full select-none overflow-hidden rounded-sm bg-card"
        onPointerMove={(e) => updateFromClientX(e.clientX)}
        onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      >
        {/* Before sits underneath, full width. */}
        <Image
          src={before.src}
          alt={before.alt}
          fill
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover"
        />

        {/* After is clipped to the divider position. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={after.src}
            alt={after.alt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </div>

        {/* Divider. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l-4 3 4 3M16 9l4 3-4 3"
              />
            </svg>
          </div>
        </div>

        {/* The real control: invisible, but focusable and keyboard-driven. */}
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Compare before and after"
          className="absolute inset-0 size-full cursor-ew-resize opacity-0"
        />
      </div>

      <p className="mt-4 text-center text-xs font-normal text-ink-muted">{hint}</p>
    </div>
  );
}
