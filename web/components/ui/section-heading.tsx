import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  /** `\n` marks an intentional line break in the display type. */
  heading: string;
  intro?: string;
  className?: string;
  align?: "left" | "center";
}

/**
 * Shared section header.
 *
 * The display type is set at leading 1.0 with a light weight — the structural
 * signature borrowed from the reference layout, applied to this site's serif
 * and its red/dark palette rather than the reference's own colours.
 */
export function SectionHeading({
  eyebrow,
  heading,
  intro,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="font-headline text-4xl leading-[0.95] tracking-tight text-on-surface md:text-6xl">
        {heading.split("\n").map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-xl text-sm font-light leading-relaxed text-on-surface-variant",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
