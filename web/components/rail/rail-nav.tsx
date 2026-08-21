"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/** Section ids drive both the links and the active-state observer. */
export const NAV_ITEMS = [
  { label: "Home", id: "top" },
  { label: "About me", id: "about" },
  { label: "Projects", id: "work" },
  { label: "What you get", id: "capabilities" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

/**
 * Rail nav menu.
 *
 * The reference sizes each row to its own label rather than the full rail
 * width, and the highlight pill sits behind the text — so the pill is a
 * content-width block, not a full-bleed row. Active and hover share the
 * same treatment.
 */
export function RailNav({ onNavigate }: { onNavigate?: () => void }) {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    // rootMargin biases toward the section occupying the upper viewport,
    // so the highlight changes when a section actually takes over.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="rounded-sm bg-glass p-[0.888rem] backdrop-blur-xl">
      <ul className="flex flex-col items-start gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.id === "top" ? "/" : `#${item.id}`}
                onClick={onNavigate}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative flex h-8 items-center gap-2 rounded-sm px-[0.552rem] transition-colors duration-300",
                  isActive ? "bg-inner" : "hover:bg-inner",
                )}
              >
                {/* Marker: a dot that grows into an arrow on hover/active. */}
                <span
                  aria-hidden
                  className={cn(
                    "flex size-3.5 shrink-0 items-center justify-center transition-colors duration-300",
                    isActive ? "text-accent" : "text-ink-muted group-hover:text-accent",
                  )}
                >
                  <svg
                    className="size-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </span>

                <span
                  className={cn(
                    "font-display text-[1rem] font-medium uppercase leading-none transition-colors duration-300",
                    isActive ? "text-ink" : "text-ink-60 group-hover:text-ink",
                  )}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
