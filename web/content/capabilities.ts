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
  intro: "Five deliverables. All of them shipped to real clients.",
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
      body: "High-fidelity screens in Figma with the states, breakpoints and edge cases already resolved — so the build has nothing left to guess.",
      meta: "Figma · Prototypes · Responsive",
    },
    {
      index: "03",
      title: "Design Systems",
      body: "Colour tokens, type scales, spacing grids and a documented component library. Built to survive the next feature and the next designer.",
      meta: "Tokens · Components · Documentation",
    },
    {
      index: "04",
      title: "Website Build",
      body: "The design shipped, not handed over. Next.js or Webflow, animated where it earns attention, fast on a phone, deployed and live.",
      meta: "Next.js · Webflow · Vercel",
    },
    {
      index: "05",
      title: "Visual Production",
      body: "Photography, campaign imagery and motion when a client's library falls short. Retouched, generated or shot — whatever gets the right frame.",
      meta: "Photoshop · After Effects · Midjourney",
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
