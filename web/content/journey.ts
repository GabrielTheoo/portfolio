/**
 * Narrative career timeline for the About section.
 *
 * Separate from `experience.ts` on purpose: that file is the resume (roles,
 * titles, responsibilities), this one is the story (what changed each year).
 * Same history, two different jobs to do.
 *
 * Milestone bodies are deliberately one sentence. The section is a scan, not
 * a read — the resume below it carries the detail.
 */
export const journey = {
  eyebrow: "Print to product",
  heading: "About Me (&)\nMy Journey",
  intro: "Six years. Catalogues to design systems.",
  /** Closing paragraphs under the timeline. */
  body: [
    "I design interfaces and build the sites they live in. Research to wireframe to shipped front-end, without a handoff where the intent gets lost.",
    "Six years across e-commerce, product, and a multinational trade marketing floor. The through-line is the same: make the thing clear enough that people act.",
  ],
  portrait: {
    src: "/about/gabriel-portrait.webp",
    alt: "Gabriel Teobaldo, portrait",
  },
  milestones: [
    {
      year: "2020",
      title: "Everything, badly",
      body: "Junior designer at a clothing label doing print, social, catalogues and paid traffic. No specialism — which turned out to be the point.",
    },
    {
      year: "2021",
      title: "Design meets revenue",
      body: "Ran the full creative pipeline at an electronics retailer. First time my work was measured against sales instead of taste.",
    },
    {
      year: "2022",
      title: "Into the product",
      body: "UX/UI at Privacy. Shipped a full navigation redesign and learned to defend a decision with metrics in front of executives.",
    },
    {
      year: "2023",
      title: "Inside a multinational",
      body: "Lead creative for Motorola's trade marketing through ProSolution. Campaigns, sales kits, executive decks, real approval chains.",
    },
    {
      year: "2024",
      title: "Fixing the bottleneck",
      body: "Redesigned how the team produced assets instead of hunting for them. Delivery time dropped about 30%.",
    },
    {
      year: "2025",
      title: "End to end, my own",
      body: "Three sites from brand audit to build: a product launch, a Florida therapy practice, a luxury property redesign.",
    },
    {
      year: "2026",
      title: "Systems, not screens",
      body: "UX/UI at Earned Media Productions, building design systems for software products alongside the engineers who ship them.",
    },
  ],
};
