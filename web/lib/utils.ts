import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Custom font-size scale names.
 *
 * tailwind-merge cannot tell `text-label` (a size) from `text-ink-80` (a
 * colour) — both look like `text-*`, so it treats them as one conflict
 * group and drops the earlier one. Declaring the sizes explicitly keeps a
 * size and a colour coexisting on the same element.
 */
const FONT_SIZES = [
  "mega",
  "huge",
  "display",
  "year",
  "title",
  "sub",
  "row",
  "copy",
  "meta",
  "tiny",
  "label",
] as const;

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: [...FONT_SIZES] }],
    },
  },
});

/** shadcn convention: merge conditional classes, last Tailwind utility wins. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
