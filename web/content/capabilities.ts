/**
 * "What You Get" — capability blocks.
 *
 * Written as deliverables, not skills: each one names the thing that lands in
 * the client's hands, because that is what they are actually buying.
 */
export const capabilities = {
  eyebrow: "Capabilities Overview",
  heading: "What You Get?",
  intro:
    "Five things I deliver. Each one has shipped to a real brand, not a case study exercise.",
  items: [
    {
      index: "01",
      title: "Generative Imagery",
      body: "Product renders, campaign visuals, and architectural photography produced on demand instead of sourced. When a client has no photo library, we stop treating that as a blocker.",
      meta: "Midjourney · Gemini · Nano Banana",
    },
    {
      index: "02",
      title: "Cinematic Video",
      body: "AI-generated product video built to a campaign brief, reviewed against brand guidelines, and delivered in hours. Five of them ran in Motorola trade marketing.",
      meta: "Envato AI · RunwayML · After Effects",
    },
    {
      index: "03",
      title: "Immersive Web",
      body: "Sites that behave like products: scroll-driven animation, parallax narrative, colorway switching, glassmorphism. Designed in Figma, built and deployed, performance-optimised.",
      meta: "Next.js · Webflow · Vercel",
    },
    {
      index: "04",
      title: "Design Systems",
      body: "Colour tokens, type scales, spacing grids, and component libraries defined before the first line of code. Scalable, documented, and maintained as the product grows.",
      meta: "Figma · Tokens · Component libraries",
    },
    {
      index: "05",
      title: "AI Pipelines",
      body: "The process itself as a deliverable: mapping where your creative workflow leaks time, then replacing it with a generation, review, and approval loop your brand team trusts.",
      meta: "Process design · Brand validation",
    },
  ],
};

/** Closing narrative block, in the slot the reference uses for its
 *  "Transform Your Experience" section. */
export const transform = {
  eyebrow: "The offer",
  heading: "Most teams don't need\nmore designers.\nThey need a faster way\nto make the work.",
  body: [
    "The bottleneck is almost never creativity. It is the days spent hunting for an asset that does not exist, the approval chain nobody owns, the design system that lives in one person's head.",
    "I fix that layer. Then the visual work gets to be the interesting part again.",
  ],
  ctaLabel: "Let's Talk",
};
