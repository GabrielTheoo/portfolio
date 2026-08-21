"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { profile } from "@/content/profile";

/** Nav mirrors the section order of the home page. */
export const NAV = [
  { label: "About me", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "What you get", href: "/#capabilities" },
  { label: "Resume", href: "/#resume" },
  { label: "Contact", href: "/#contact" },
];

/** Past this scroll depth the header condenses into a floating pill. */
const SCROLL_THRESHOLD = 80;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page while the full-screen menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled ? "px-4 py-3 md:px-6 md:py-4" : "px-6 py-6 md:px-10",
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between gap-6 transition-all duration-500",
            scrolled
              ? "max-w-3xl rounded-full border border-white/10 bg-surface-lowest/70 px-5 py-2.5 backdrop-blur-xl"
              : "max-w-6xl",
          )}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "font-headline tracking-tight text-primary-fixed transition-all duration-500 hover:opacity-70",
              scrolled ? "text-lg" : "text-xl",
            )}
          >
            Gabriel<span className="text-primary">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-light text-primary-fixed/70 transition-all duration-200 hover:bg-white/10 hover:text-primary-fixed"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Gooey pair: the arrow slides out from behind the primary button. */}
            <div
              className="group relative hidden items-center md:flex"
              style={{ filter: "url(#gooey-filter)" }}
            >
              <span
                aria-hidden
                className="absolute right-0 z-0 flex h-8 -translate-x-10 items-center justify-center rounded-full bg-primary-fixed px-2.5 py-2 text-on-primary-fixed transition-all duration-300 group-hover:-translate-x-[4.75rem]"
              >
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="z-10 flex h-8 items-center rounded-full bg-primary-fixed px-6 py-2 text-xs font-normal text-on-primary-fixed transition-all duration-300 hover:bg-white"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex size-9 items-center justify-center rounded-full bg-white/5 text-primary-fixed transition-colors hover:bg-white/10 md:hidden"
            >
              {menuOpen ? (
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-surface-lowest/97 backdrop-blur-xl md:hidden"
      >
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className="font-headline text-3xl leading-none text-primary-fixed transition-colors hover:text-primary"
          >
            {item.label}
          </a>
        ))}
        <a
          href={`mailto:${profile.email}`}
          onClick={() => setMenuOpen(false)}
          className="mt-4 rounded-full bg-primary px-8 py-3 text-xs font-normal text-white"
        >
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
