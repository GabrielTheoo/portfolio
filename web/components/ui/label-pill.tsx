import { cn } from "@/lib/utils";

/**
 * Eyebrow label.
 *
 * The reference's `.label`: uppercase, bold, 12.4px, hugging its text
 * inside a fully-rounded 1px outline at 30% opacity. Replaces the plain
 * "— Section" text eyebrow the previous build used.
 */
export function LabelPill({
  children,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "accent";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-label font-bold uppercase leading-none",
        tone === "accent"
          ? "border-accent/40 text-accent"
          : "border-rule-strong text-ink-80",
        className,
      )}
    >
      {children}
    </span>
  );
}
