import { cn } from "@/lib/utils";

/**
 * Section shell.
 *
 * The reference keeps `main` full-bleed and clears the rail with a large
 * left padding rather than a margin, so backgrounds can still run edge to
 * edge. Below the rail breakpoint the inset collapses to normal gutters.
 *
 * `tone` decides whether the section lets the ambient backdrop through or
 * covers it. Alternating the two is what stops a long page of glass panels
 * from reading as one continuous wash — the solid sections give the eye a
 * hard edge to register a change of subject.
 */
export function Section({
  id,
  children,
  className,
  tight,
  tone = "ambient",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Halves the vertical rhythm, for sections that follow closely. */
  tight?: boolean;
  /** `ambient` shows the page backdrop; `solid` covers it. */
  tone?: "ambient" | "solid";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-5 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]",
        tight ? "py-20 rail:py-24" : "py-24 rail:py-[var(--section-gap)]",
        tone === "solid" && "bg-page",
        className,
      )}
    >
      {children}
    </section>
  );
}
