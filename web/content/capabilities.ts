/**
 * "What You Get" — capability blocks.
 *
 * Written as deliverables, not skills: each names the thing that lands in
 * the client's hands. Ordered the way the work actually runs, research
 * first and production last, so AI-assisted image work reads as one tool at
 * the end of a process rather than the product itself.
 */
export const capabilities = {
  eyebrow: "Capabilities",
  heading: "What\nYou Get?",
  intro: "Five deliverables. All shipped to real clients.",
  items: [
    {
      index: "01",
      title: "Research & Strategy",
      body: "Journey mapping, usability testing, and analytics read closely enough to find where visitors actually leave. Findings become decisions, not a deck.",
      meta: "User research · Journey mapping · Testing",
    },
    {
      index: "02",
      title: "Interface Design",
      body: "High-fidelity screens in Figma with states, breakpoints and edge cases resolved before the build starts. I prototype the tricky interactions in Claude Code rather than describing them, so what gets approved is the thing that actually behaves that way.",
      meta: "Figma · Claude Code · Prototypes",
    },
    {
      index: "03",
      title: "Systems",
      body: "Colour tokens, type scales, spacing grids and a documented component library. Built to survive the next feature and the next designer.",
      meta: "Tokens · Components · Documentation",
    },
    {
      index: "04",
      title: "Website Build",
      body: "The design shipped, not handed over. I build in Next.js with Claude Code — the way I work day to day now — animated where it earns attention, fast on a phone, deployed and live.",
      meta: "Next.js · Claude Code · Vercel",
    },
    {
      index: "05",
      title: "Visual Production",
      body: "Imagery, motion and campaign assets when a client's library falls short. Retouched in Adobe, art-directed by hand, and assembled with Claude Code when a piece needs to run in the browser rather than sit in a folder.",
      meta: "Photoshop · After Effects · Claude Code",
    },
  ],
};

/** Closing narrative, in the slot the reference uses for its CTA section. */
export const transform = {
  eyebrow: "The problem",
  heading: "Most sites lose\nthe visitor\nbefore the first\nsentence.",
  body: [
    "Not because the design is ugly. Because nothing on screen tells them they are in the right place.",
    "That is the part I fix.",
  ],
  ctaLabel: "Let's talk",
};
