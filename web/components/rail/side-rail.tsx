"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ClientMarquee } from "@/components/rail/client-marquee";
import { CopyEmail } from "@/components/rail/copy-email";
import { RailNav } from "@/components/rail/rail-nav";
import { cn } from "@/lib/utils";
import { profile, stats } from "@/content/profile";
import { journey } from "@/content/journey";

/**
 * Fixed left navigation rail.
 *
 * Mirrors the reference's anatomy: a stack of separate glass cards —
 * intro, a stat pair split by a hairline, the nav menu, a client-logo
 * marquee, a copy-to-clipboard email row, and paired CTA buttons.
 *
 * Below the rail breakpoint it collapses to a top bar plus a sheet, since
 * a 237px rail leaves nothing for content on a phone.
 */
export function SideRail() {
  const [open, setOpen] = useState(false);

  // Lock scroll and wire Escape while the mobile sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const [firstStat, secondStat] = stats;

  return (
    <>
      {/* ── Mobile top bar ── */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 bg-page/80 px-4 py-3 backdrop-blur-xl rail:hidden">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Gabriel<span className="text-accent">.</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="rail-sheet"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-9 items-center justify-center rounded-sm bg-inner text-ink"
        >
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeWidth={1.5}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </div>

      {/* ── The rail ── */}
      <header
        id="rail-sheet"
        className={cn(
          // Mobile: full-screen sheet, toggled.
          "fixed inset-0 z-30 flex flex-col gap-2 overflow-y-auto bg-page/97 px-4 pb-6 pt-20 backdrop-blur-xl",
          !open && "hidden",
          // Desktop: fixed rail, always shown.
          "rail:left-[var(--rail-inset)] rail:right-auto rail:flex rail:w-[var(--rail-width)] rail:bg-transparent rail:px-0 rail:pb-4 rail:pt-4 rail:backdrop-blur-none",
          // The card stack runs ~930px tall; on a shorter window it has to
          // scroll rather than clip the portrait off the bottom.
          "rail:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {/* ── Intro card ── */}
        <div data-rail-card className="rounded-sm bg-glass p-[0.888rem] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-lg font-bold leading-none tracking-tight text-ink"
            >
              Gabriel<span className="text-accent">.</span>
            </Link>

            <div className="flex gap-1.5">
              {profile.socials.slice(0, 2).map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="flex size-[1.688rem] items-center justify-center rounded-sm bg-inner text-ink-60 transition-colors hover:text-accent"
                >
                  <span className="text-label font-bold uppercase">
                    {social.label.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <p className="mt-3.5 text-tiny text-ink-80">{profile.tagline}</p>
        </div>

        {/* ── Stat pair, split by a hairline ── */}
        <div data-rail-card className="flex items-center rounded-sm bg-glass px-[1.336rem] py-[0.8rem] backdrop-blur-xl">
          <RailStat value={firstStat.value} unit={firstStat.unit} label={firstStat.label} />
          <div aria-hidden className="h-11 w-px shrink-0 bg-rule" />
          <RailStat value={secondStat.value} unit={secondStat.unit} label={secondStat.label} />
        </div>

        {/* ── Nav menu ── */}
        <RailNav onNavigate={() => setOpen(false)} />

        {/* ── Client marquee ── */}
        <ClientMarquee />

        {/* ── Email with copy ── */}
        <CopyEmail email={profile.email} />

        {/* ── Paired CTAs: primary swaps to secondary on hover ── */}
        <div data-rail-card className="group/cta relative h-11 shrink-0">
          <a
            href={`mailto:${profile.email}`}
            className="absolute inset-0 flex items-center justify-center rounded-md bg-accent text-copy font-medium text-on-accent transition-opacity duration-300 group-hover/cta:opacity-0"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#resume"
            onClick={() => setOpen(false)}
            aria-hidden
            tabIndex={-1}
            className="absolute inset-0 flex items-center justify-center rounded-md bg-accent-bright text-copy font-medium text-on-accent opacity-0 transition-opacity duration-300 group-hover/cta:opacity-100"
          >
            View Resume
          </a>
        </div>

        {/* ── Portrait, anchoring the bottom of the rail ── */}
        <div data-rail-card className="relative mt-1 aspect-[4/5] shrink-0 overflow-hidden rounded-sm bg-card rail:aspect-square">
          {/* Next flagged this as the LCP element: it sits in the rail above
              the fold, so without priority the browser only discovers it
              after the stylesheet resolves. */}
          <Image
            src={journey.portrait.src}
            alt={journey.portrait.alt}
            fill
            priority
            sizes="15rem"
            className="object-cover"
          />
        </div>
      </header>
    </>
  );
}

function RailStat({
  value,
  unit,
  label,
}: {
  value: string;
  unit?: string;
  label: string;
}) {
  return (
    <div className="flex-1 rounded-sm bg-subcard px-2 py-2.5 text-center">
      <p className="font-display text-meta font-medium leading-none text-ink">
        {value}
        <span className="text-accent">{unit}</span>
      </p>
      <p className="mt-1.5 text-label font-medium leading-tight text-ink-60">{label}</p>
    </div>
  );
}
