import type { Project } from "../types";

export const nikeJordan: Project = {
  slug: "nike-jordan-maestro",
  title: { lead: "Nike", rest: "Jordan Maestro" },
  summary: "AI-powered product site for the Jordan Tiempo Maestro Elite SE.",
  category: "UX & UI Design",
  year: "2026",
  tags: ["UX & UI Design", "Web Development", "AI-Generated", "Brand Identity"],
  liveUrl: "https://gabrieltheoo.github.io/jordan-maestro-site-en/",
  liveLabel: "gabrieltheoo.github.io/jordan-maestro-site-en",
  cover: {
    kind: "image",
    src: "/projects/nike-jordan/identity-hero.webp",
    alt: "Jordan Tiempo Maestro Elite SE Infrared 23 cleat, hero render",
  },
  sections: [
    {
      eyebrow: "— The Challenge",
      heading: "A world-class cleat.\nA digital presence that didn't match.",
      body: [
        "Browsing Nike's digital ecosystem, one thing stood out: the Jordan Tiempo Maestro Elite SE Infrared 23 — one of the most visually striking products in the football line, with no dedicated web experience that did it justice. For a cleat with that level of craft and heritage, the absence of an immersive digital narrative was a missed opportunity.",
        "The challenge was clear: design and build a product website that matched the ambition of the cleat itself, merging Jordan Brand's basketball legacy with elite football culture, and doing it entirely through AI-powered tools.",
      ],
    },
    {
      eyebrow: "— Design System",
      heading: "Every pixel rooted\nin brand truth.",
      body: [
        "A full design system was created in Figma using AI to ensure brand consistency across every screen. Color tokens, typography scales, spacing grids, and UI components were all defined before a single line of code was written, guaranteeing that Nike and Jordan Brand guidelines were respected throughout the build.",
      ],
    },
  ],
  process: {
    eyebrow: "— Process",
    heading: "From research to\nfully rendered experience.",
    intro:
      "Every decision was deliberate. The project started with deep immersion in Nike and Jordan Brand's visual language — studying typography hierarchies, motion behavior, color application, and the emotional tone that makes the brand recognisable at a glance.",
    steps: [
      {
        index: "01",
        title: "Research & Brand Audit",
        body: "Analysed Nike's existing digital touchpoints to identify gaps. Studied the Jordan Brand design language: color, type, motion, and storytelling structure.",
      },
      {
        index: "02",
        title: "AI-Powered Design System",
        body: "Built a full Figma design system using AI assistance, defining color tokens, typography scale, spacing, and component rules aligned to Nike brand guidelines.",
      },
      {
        index: "03",
        title: "Visual Production",
        body: "Generated all campaign imagery and product renders using AI tools. Every frame of the scroll animation was AI-produced, then curated for maximum visual impact.",
      },
      {
        index: "04",
        title: "UX & Interaction Design",
        body: "Designed the full user experience with scroll-driven animation, parallax storytelling, colorway switching, and immersive product visualization. All performance-optimised.",
      },
    ],
  },
  gallery: {
    eyebrow: "— Design System",
    heading: "Jordan Cleat and SNKRS, one system.",
    items: [
      {
        kind: "image",
        src: "/projects/nike-jordan/design-system.svg",
        alt: "Figma design system board with color tokens, type scale and components",
        caption: "Jordan Cleat / SNKRS — Design System",
      },
    ],
  },
  results: {
    eyebrow: "— The Result",
    heading: "A cinematic product\nexperience, live on the web.",
    body: [
      "The final site delivers a full immersive journey: a 106-frame scroll-driven 3D product animation, dynamic colorway selector, glassmorphism UI, animated starfield, and a specs section styled like an engineering brief. Fully in Portuguese, honoring the cleat's Brazilian football connection.",
    ],
    stats: [
      { value: "106", unit: "+", label: "Animation Frames" },
      { value: "4", label: "AI Tools Used" },
      { value: "100", unit: "%", label: "AI-Generated Visuals" },
      { value: "0", label: "Stock Images Used" },
    ],
  },
  stack: {
    eyebrow: "— AI Toolkit",
    heading: "Built with the most\npowerful tools available.",
    tools: [
      { name: "Gemini", role: "Research & Concept" },
      { name: "Flow", role: "Visual Generation" },
      { name: "Claude", role: "Development & Copy" },
      { name: "Figma", role: "Design System" },
      { name: "Vercel", role: "Deployment" },
    ],
  },
  cta: {
    heading: "Want something like this\nfor your brand?",
    body: "I design and build AI-powered digital experiences that turn products into stories worth experiencing.",
  },
};
