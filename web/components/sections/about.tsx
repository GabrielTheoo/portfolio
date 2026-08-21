import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import { journey } from "@/content/journey";

/**
 * About + journey.
 *
 * Follows the reference's timeline treatment: an oversized accent year set
 * against each card, and the card itself styled like a social post — a
 * handle and a relative timestamp along the bottom.
 */
export function About() {
  return (
    <Section id="about">
      <Display text={journey.heading} size="huge" />

      <div className="mt-6">
        <LabelPill>{journey.eyebrow}</LabelPill>
      </div>

      <p
        data-reveal="up"
        className="mt-8 max-w-[24.5rem] text-copy text-ink-80"
      >
        {journey.intro}
      </p>

      <ol className="mt-20 flex flex-col gap-3">
        {journey.milestones.map((milestone) => (
          <li
            key={milestone.year}
            data-reveal="up"
            className="grid gap-5 rounded-sm bg-card p-[1.112rem] sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8 sm:p-[1.776rem]"
          >
            {/* Oversized accent year, the reference's anchor for each row. */}
            <p className="font-display text-year font-bold text-accent">
              <span className="text-ink-muted">&apos;</span>
              {milestone.year.slice(2)}
            </p>

            <div className="flex flex-col">
              <h3 className="font-display text-row font-medium text-ink">
                {milestone.title}
              </h3>
              <p className="mt-3 max-w-[32rem] text-copy text-ink-80">
                {milestone.body}
              </p>

              {/* Social-post footer. */}
              <div className="mt-6 flex items-baseline gap-3 text-meta text-ink-muted">
                <span className="font-display">@gabrielteobaldo</span>
                <span aria-hidden>·</span>
                <span>{yearsAgo(milestone.year)}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 max-w-[34rem] space-y-5">
        {journey.body.map((paragraph) => (
          <p key={paragraph} data-reveal="up" className="text-copy text-ink-80">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

/** Relative age of a milestone, matching the reference's "7years ago". */
function yearsAgo(year: string) {
  // Fixed reference point so the string is stable across prerenders — a
  // static export must not bake in whatever "now" the build machine had.
  const delta = 2026 - Number(year);
  if (delta <= 0) return "this year";
  return delta === 1 ? "1 year ago" : `${delta} years ago`;
}
