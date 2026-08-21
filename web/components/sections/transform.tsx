import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import { transform } from "@/content/capabilities";
import { profile } from "@/content/profile";

/** Closing narrative, in the reference's CTA-section slot. */
export function Transform() {
  return (
    <Section tight>
      <div className="relative overflow-hidden rounded-sm bg-card p-[1.776rem] sm:p-16">
        {/* Ambient accent glow rather than a border, so the block lifts
            without drawing a line around it. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-accent/25 blur-[110px]"
        />

        <div className="relative">
          <LabelPill tone="accent">{transform.eyebrow}</LabelPill>

          <div className="mt-6 max-w-[46rem]">
            <Display text={transform.heading} size="display" />
          </div>

          <div className="mt-8 max-w-[34rem] space-y-4">
            {transform.body.map((paragraph) => (
              <p key={paragraph} data-reveal="up" className="text-copy text-ink-80">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-11 inline-flex h-11 items-center gap-2 rounded-md bg-accent px-8 text-copy font-medium text-on-accent transition-colors duration-200 hover:bg-accent-bright"
          >
            {transform.ctaLabel}
            <svg aria-hidden className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
}
