import type { Project } from "../types";

export const lifethrive: Project = {
  slug: "life-thrive-solutions",
  title: { lead: "Life", rest: "Thrive Solutions" },
  summary: "Psychology & therapy website designed for a Florida practice.",
  category: "UX & UI · Webflow",
  year: "2024 — 2025",
  tags: ["UX & UI Design", "Webflow", "Brand Strategy", "Psychology"],
  liveUrl: "https://www.lifethrivesolutions.com",
  liveLabel: "lifethrivesolutions.com",
  cover: {
    kind: "image",
    src: "/projects/lifethrive/hero-lifethrive.jpg",
    alt: "Life Thrive Solutions homepage hero, warm cream and sage palette",
  },
  pull: {
    quote:
      "A space where you can talk openly about trauma, anxiety, and the heavy moments of life without judgment, pressure, or clinical stiffness.",
    attribution: "Life Thrive Solutions brand voice",
  },
  sections: [
    {
      eyebrow: "— The Brief",
      heading: "A therapy practice in Florida\nthat needed a digital home\nas warm as its mission.",
      body: [
        "Life Thrive Solutions is a trauma-informed therapy practice based in Stuart, Florida, founded by Madonna DeBlauwe with a clear intention: to create a therapeutic space that feels safe, human, and genuinely supportive. The practice offers individual, couples, and family therapy, serving clients in-person in Stuart and across all of Florida via telehealth.",
        "The challenge was building a digital presence that matched that mission: a website where potential clients would feel welcomed the moment they arrived, even before speaking to a therapist. A site that converts visitors into appointments not through pressure, but through trust.",
      ],
    },
    {
      eyebrow: "— Brand Analysis",
      heading: "Understanding the brand\nbefore touching the design.",
      body: [
        "Before opening Figma, the first step was immersing in the brand. What does Life Thrive Solutions stand for? Who are their clients? What do those clients feel when they first visit the site, and what should we make them feel instead?",
        "The brand audit revealed a clear positioning: Life Thrive Solutions is explicitly not clinical. Their language, their philosophy, their care model, all of it rejects the cold, institutional aesthetic of traditional mental health websites. This shaped every design decision that followed.",
      ],
    },
    {
      eyebrow: "— UX Strategy",
      heading: "Every decision designed\nto make someone feel\nsafe enough to ask for help.",
      body: [
        "The UX of a therapy website carries unique weight. A person visiting this site may be in pain, in crisis, or taking one of the hardest steps of their life. The experience had to be frictionless, reassuring, and warm, guiding them naturally toward scheduling a session without pressure.",
      ],
    },
  ],
  palette: {
    eyebrow: "— Palette",
    heading: "Warm, not clinical.",
    swatches: [
      { name: "Soft Cream", hex: "#F7F4F0", role: "Primary Background" },
      { name: "Sage Green", hex: "#8BA98B", role: "Brand Accent" },
      { name: "Warm Sand", hex: "#C9B99A", role: "Secondary Tone" },
      { name: "Soft Lavender", hex: "#B8ADC8", role: "Supporting Accent" },
      { name: "Deep Charcoal", hex: "#1F1F1F", role: "Primary Text" },
    ],
  },
  typography: {
    name: "Bitter",
    meta: "Bitter · 400 / 700 · Google Fonts",
    specimen: "Therapy in Florida\nThat Helps You Feel\nSafe, Seen, and Supported",
    rationale:
      "The choice of Bitter, a warm editorial serif, was deliberate. Serif typography communicates trust, care, and human depth. It distances the brand from the cold, sans-serif clinical aesthetic of institutional healthcare.",
  },
  process: {
    eyebrow: "— Design Process",
    heading: "From brand audit to\nlive Webflow build.",
    intro:
      "The full project was designed in Figma, from initial wireframes and component libraries to high-fidelity prototypes, before being handed off and built in Webflow in close collaboration with the development team.",
    steps: [
      {
        index: "01",
        title: "Discovery & Brand Audit",
        body: "Deep-dive into the practice's values, clients, competitive landscape, and emotional positioning. This informed every visual and copy decision that followed.",
      },
      {
        index: "02",
        title: "Information Architecture",
        body: "Mapped all service pathways (Individual, Couples, Family), specialty pages, and conversion funnels. Built a clear, intuitive site structure before any visual design began.",
      },
      {
        index: "03",
        title: "UI Design in Figma",
        body: "Full high-fidelity design system in Figma: color tokens, Bitter typography scale, component library, responsive layouts, and interactive prototypes for stakeholder review.",
      },
      {
        index: "04",
        title: "Webflow Development",
        body: "Worked alongside the dev team to translate Figma designs pixel-perfectly into Webflow, preserving animations, responsive behavior, and brand fidelity at every breakpoint.",
      },
    ],
  },
  results: {
    eyebrow: "— The Impact",
    heading: "More sessions booked.\nMore people helped.",
    body: [
      "A well-designed therapy website isn't just a digital business card. It's the first moment of trust between a practice and someone who needs help. When that experience is warm, clear, and welcoming, people take the next step. And when more people take that step, the practice grows, and more lives improve.",
      "By aligning the brand's visual language and UX strategy with the emotional needs of the client, Life Thrive Solutions gained a digital presence that works as hard as their therapists do: building trust, capturing leads, and most importantly helping more people in Florida access the support they deserve.",
    ],
    stats: [
      { value: "1", unit: "st", label: "Dedicated Digital Presence" },
      { value: "3", label: "Client Pathways Designed" },
      { value: "FL", label: "Statewide Telehealth Reach" },
      { value: "↑", label: "Lead Conversion Rate" },
    ],
  },
  stack: {
    eyebrow: "— Tools & Stack",
    heading: "Designed in Figma.\nBuilt in Webflow.",
    tools: [
      { name: "Figma", role: "UI & UX Design" },
      { name: "Webflow", role: "Development" },
      { name: "Photoshop", role: "Image Treatment" },
      { name: "Illustrator", role: "Brand Assets" },
      { name: "Gemini", role: "Brand Research" },
      { name: "Claude", role: "Copy Refinement" },
    ],
  },
  cta: {
    heading: "Your brand deserves\na digital presence\nthat actually works.",
    body: "I design websites that feel right, for the people who visit them and the business behind them. Let's build yours.",
  },
};

/** UX principles rendered as a grid on the case page. */
export const lifethrivePrinciples = [
  {
    title: "Emotional Safety First",
    body: "Warm photography, gentle curves, and soft copy create an environment where visitors feel accepted before they read a single word.",
  },
  {
    title: "Zero Friction to Contact",
    body: 'CTAs are placed at every natural decision moment. "Take Your Next Step" replaces aggressive "Book Now" language, meeting the client where they are.',
  },
  {
    title: "Multi-Client Architecture",
    body: "Clear pathways for Individual, Couples, and Family therapy, each with its own entry point, so no visitor feels unseen or unaddressed.",
  },
  {
    title: "Digital-First Accessibility",
    body: "Online therapy options prominently featured alongside in-person, because healing works best when it meets the client where they feel most comfortable.",
  },
  {
    title: "Trust Signals by Design",
    body: "Insurance acceptance logos, named team leadership, and evidence-based practice references positioned strategically to build credibility without clinical coldness.",
  },
  {
    title: "Lead Conversion",
    body: "Every page section flows toward a single goal: turning a hesitant visitor into a scheduled appointment. Gently, respectfully, and effectively.",
  },
];
