import { cn } from "@/lib/utils";

/**
 * Section shell.
 *
 * The reference keeps `main` full-bleed and clears the rail with a large
 * left padding rather than a margin, so backgrounds can still run edge to
 * edge. Below the rail breakpoint the inset collapses to normal gutters.
 */
export function Section({
  id,
  children,
  className,
  tight,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Halves the vertical rhythm, for sections that follow closely. */
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]",
        tight ? "py-20 rail:py-24" : "py-24 rail:py-[var(--section-gap)]",
        className,
      )}
    >
      {children}
    </section>
  );
}
