"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ClientMarquee } from "@/components/rail/client-marquee";
import { CopyEmail } from "@/components/rail/copy-email";
import { RailNav } from "@/components/rail/rail-nav";
import { SOCIAL_ICONS } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { profile, railIntro, stats } from "@/content/profile";

/**
 * Fixed left navigation rail.
 *
 * Six stacked glass panels, matching the reference's structure: intro, a
 * stat pair split by a hairline, the nav menu, a client marquee, the email
 * row, and the CTA. No portrait — that moved to the About section, and the
 * intro copy grew to hold the top of the rail on its own.
 *
 * Below the rail breakpoint it collapses to a top bar plus a sheet, since a
 * 237px rail leaves nothing for content on a phone.
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
      <div className="glass fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 px-4 py-3 rail:hidden">
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
          // The stack can outrun a short window, so it scrolls rather than
          // clipping the CTA off the bottom.
          "rail:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {/* ── 1. Intro ── */}
        <div data-rail-card className="glass rounded-sm p-[0.888rem]">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-lg font-bold leading-none tracking-tight text-ink"
            >
              Gabriel<span className="text-accent">.</span>
            </Link>

            <div className="flex gap-1.5">
              {profile.socials.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                if (!Icon) return null;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex size-[1.688rem] items-center justify-center rounded-sm bg-inner text-ink-60 transition-colors hover:bg-elevated hover:text-accent"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          <p className="mt-3.5 text-tiny text-ink-80">{railIntro}</p>
        </div>

        {/* ── 2. Stat pair, split by a hairline ── */}
        <div
          data-rail-card
          className="glass flex items-stretch rounded-sm px-[0.888rem] py-[0.888rem]"
        >
          <RailStat {...firstStat} />
          <div aria-hidden className="mx-1 w-px shrink-0 self-center bg-rule" />
          <RailStat {...secondStat} />
        </div>

        {/* ── 3. Nav ── */}
        <RailNav onNavigate={() => setOpen(false)} />

        {/* ── 4. Clients ── */}
        <ClientMarquee />

        {/* ── 5. Email ── */}
        <CopyEmail email={profile.email} />

        {/* ── 6. CTA. Primary swaps to secondary on hover. ── */}
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
      </header>
    </>
  );
}

/**
 * One stat: value large in the accent, label bold beneath — the arrangement
 * the reference uses, rather than a number with a caption beside it.
 */
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
    <div className="flex flex-1 flex-col items-center justify-start gap-2 rounded-sm bg-subcard px-2 py-3 text-center">
      <p className="font-display text-xl font-bold leading-none text-accent">
        {value}
        {unit ? <span className="text-ink-60">{unit}</span> : null}
      </p>
      <p className="text-label font-bold leading-tight text-ink">{label}</p>
    </div>
  );
}
