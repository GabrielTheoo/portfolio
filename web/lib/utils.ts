import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn convention: merge conditional classes, last Tailwind utility wins. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
