import type { Project } from "../types";
import { nikeJordan } from "./nike-jordan";
import { motorolaAi } from "./motorola-ai";
import { lifethrive } from "./lifethrive";
import { lakeside } from "./lakeside";

/** Display order on the home grid and the prev/next case navigation. */
export const projects: Project[] = [nikeJordan, motorolaAi, lifethrive, lakeside];

export const work = {
  eyebrow: "— Selected Work",
  heading: "My Projects.",
  intro:
    "A curated selection of AI-powered work delivered to brands that dare to be different.",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Wraps around, so the last case links forward to the first. */
export function getNeighbours(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}

export { nikeJordan, motorolaAi, lifethrive, lakeside };
