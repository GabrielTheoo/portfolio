/**
 * Narrative career timeline for the About section.
 *
 * Separate from `experience.ts` on purpose: that file is the resume (roles,
 * titles, responsibilities), this one is the story (what changed each year).
 * Same history, two different jobs to do.
 */
export const journey = {
  eyebrow: "Small steps, compounding",
  heading: "About Me (&)\nMy Journey",
  intro:
    "Six years from designing catalogues for a clothing store to building AI pipelines inside a multinational. Every step taught the next one.",
  /** Closing paragraphs under the timeline. */
  body: [
    "I operate at the intersection of artificial intelligence and visual creativity, working with the most powerful AI platforms on the market to produce generative images, cinematic videos, immersive websites, and high-impact brand experiences.",
    "From early-stage startups to global multinationals like Motorola, I have worked across industries: crafting campaigns, interfaces, and brand systems that combine strategic thinking with strong visual execution.",
  ],
  portrait: {
    src: "/about/gabriel-portrait.webp",
    alt: "Gabriel Teobaldo, portrait",
  },
  milestones: [
    {
      year: "2020",
      title: "The first real brief",
      body: "Started at Mariá Modas as a junior graphic designer, doing everything: print, social, e-commerce catalogues, paid traffic, photo editing. No specialism yet, which turned out to be the point.",
    },
    {
      year: "2021",
      title: "Learning the funnel",
      body: "Moved to Eletrônica Santana and got handed the whole creative pipeline: B2B and B2C campaigns, email marketing, landing pages. First time I saw design measured against revenue instead of taste.",
    },
    {
      year: "2022",
      title: "Into the product",
      body: "Joined Privacy as a UX/UI designer and shipped real features to real users, including a full navigation redesign. Learned to read platform metrics and defend a decision with data in front of executives.",
    },
    {
      year: "2023",
      title: "Inside a multinational",
      body: "Embedded at Motorola through ProSolution as the lead creative for Trade Marketing. Campaigns, training material, executive decks, and the constraint that would define the next two years: never enough assets.",
    },
    {
      year: "2024",
      title: "Betting on generative AI",
      body: "Instead of hunting for assets, I started producing them. Designed a generative AI pipeline for product imagery and video, validated it directly with Motorola's brand team, and cut delivery time by around 30%.",
    },
    {
      year: "2025",
      title: "AI as the whole stack",
      body: "Took the approach end-to-end on my own work: the Jordan Maestro product site, 100% AI-generated visuals, zero stock. Then a therapy practice in Florida and a luxury real estate redesign, both from brand audit to build.",
    },
    {
      year: "2026",
      title: "Designing systems, not screens",
      body: "Now at Earned Media Productions as a UX/UI designer, building and evolving scalable design systems for software products — balancing business goals, user needs, and what engineering can actually ship.",
    },
  ],
};
