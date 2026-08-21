"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import type { Media } from "@/content/types";

/**
 * Case gallery with a lightbox.
 *
 * Videos stay paused until hover (or tap on touch), so a gallery of five
 * clips does not start five simultaneous decodes on load.
 */
export function CaseGallery({ items }: { items: Media[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : items[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (event.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + items.length) % items.length,
        );
    };

    document.addEventListener("keydown", onKey);
    // Stop the page behind the lightbox from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [openIndex, items.length, close]);

  return (
    <>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group block text-left"
            aria-label={`Expand: ${item.alt}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-surface-container">
              {item.kind === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label={item.alt}
                  className="size-full object-cover"
                  onMouseEnter={(e) => void e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              )}
            </div>
            {item.caption ? (
              <p className="mt-4 text-xs font-light text-outline">
                {item.caption}
              </p>
            ) : null}
          </button>
        ))}
      </div>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-surface-lowest/95 p-6 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-6 top-6 rounded-full bg-white/10 px-4 py-2 text-xs font-light text-on-surface transition-colors hover:bg-white/20"
          >
            Close
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {active.kind === "video" ? (
              <video
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                loop
                playsInline
                className="max-h-[85vh] w-full rounded-2xl object-contain"
              />
            ) : (
              <Image
                src={active.src}
                alt={active.alt}
                width={1600}
                height={1000}
                sizes="100vw"
                className="max-h-[85vh] w-full rounded-2xl object-contain"
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
