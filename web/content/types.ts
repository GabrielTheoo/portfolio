// ─── Shared content types ────────────────────────────────────────────
// The content layer is design-agnostic on purpose: pages consume these
// shapes, so a visual redesign never forces a copy rewrite.

export type Stat = {
  value: string;
  /** Suffix rendered smaller / dimmer next to the value: "%", "+", "x", "px" */
  unit?: string;
  label: string;
};

export type Tool = {
  name: string;
  /** What this tool actually did on the project. */
  role: string;
};

export type ProcessStep = {
  /** Zero-padded index shown as an editorial marker: "01", "02" */
  index: string;
  title: string;
  body: string;
};

export type Swatch = {
  name: string;
  hex: string;
  role: string;
};

export type Media = {
  src: string;
  /** Poster frame for videos, so the first paint is not a black rectangle. */
  poster?: string;
  alt: string;
  caption?: string;
  kind: "image" | "video";
};

export type Pull = {
  quote: string;
  attribution: string;
};

export type Section = {
  /** Small caps-locked eyebrow: "— The Challenge" */
  eyebrow: string;
  /** Headline; \n marks an intentional line break in display type. */
  heading: string;
  body: string[];
  /** Optional highlighted takeaway rendered as a callout. */
  callout?: string;
};

export type Project = {
  slug: string;
  /** Two-part title so display type can break it deliberately. */
  title: { lead: string; rest: string };
  /** Short line used on the home grid. */
  summary: string;
  category: string;
  year: string;
  tags: string[];
  liveUrl?: string;
  liveLabel?: string;
  cover: Media;
  sections: Section[];
  process?: { eyebrow: string; heading: string; intro: string; steps: ProcessStep[] };
  palette?: { eyebrow: string; heading: string; swatches: Swatch[] };
  typography?: { name: string; meta: string; specimen: string; rationale: string };
  gallery?: { eyebrow: string; heading: string; intro?: string; items: Media[] };
  results: { eyebrow: string; heading: string; body: string[]; stats: Stat[] };
  stack: { eyebrow: string; heading: string; tools: Tool[] };
  cta: { heading: string; body: string };
  pull?: Pull;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  /** Present-tense for the current role, past for the rest. */
  body: string;
  /** Full responsibility list. Rendered on the resume view only, so the
   *  timeline stays scannable while the CV stays complete. */
  bullets?: string[];
  tags: string[];
  /** Marks the role as ongoing so the timeline can render a live dot. */
  current?: boolean;
};

export type ToolGroup = {
  title: string;
  meta: string;
  items: string[];
};
