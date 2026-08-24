import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { cn } from "@/lib/utils";

/**
 * Section header: label and heading on the left, intro copy on the right.
 *
 * Stacking these three vertically left the whole right half of the page
 * empty, because a readable measure is nowhere near the available width.
 * Splitting them fills that space without stretching a paragraph past the
 * line length anyone can actually read.
 *
 * Below the rail breakpoint it collapses back to a single column.
 */
export function SectionIntro({
  eyebrow,
  heading,
  intro,
  className,
  aside,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  className?: string;
  /** Optional extra node under the intro, e.g. a count pill. */
  aside?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-8 rail:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] rail:items-end rail:gap-16",
        className,
      )}
    >
      <div>
        <LabelPill tone="accent">{eyebrow}</LabelPill>
        <div className="mt-6">
          <Display text={heading} size="display" />
        </div>
      </div>

      {intro || aside ? (
        <div className="rail:pb-2">
          {intro ? (
            <p data-reveal="up" className="text-copy text-ink-80">
              {intro}
            </p>
          ) : null}
          {aside ? <div className="mt-5">{aside}</div> : null}
        </div>
      ) : null}
    </div>
  );
}
