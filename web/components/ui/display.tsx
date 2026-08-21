import { cn } from "@/lib/utils";

type Size = "mega" | "huge" | "display" | "card";

const SIZES: Record<Size, string> = {
  mega: "text-mega font-bold",
  huge: "text-huge font-bold",
  display: "text-display font-medium",
  card: "text-title font-medium",
};

/**
 * Display heading.
 *
 * Splits on `\n` so the line breaks are the ones the copy was written
 * for, and wraps each line in an overflow-hidden band whose inner span is
 * the reveal target — that gives GSAP a mask to slide lines up from, the
 * effect the reference gets out of SplitText.
 */
export function Display({
  text,
  as: Tag = "h2",
  size = "display",
  className,
  reveal = true,
}: {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  size?: Size;
  className?: string;
  reveal?: boolean;
}) {
  const lines = text.split("\n");

  return (
    <Tag
      className={cn(
        "font-display tracking-tight text-ink",
        SIZES[size],
        className,
      )}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <span
            className="block"
            data-reveal={reveal ? "line" : undefined}
            data-reveal-index={i}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
