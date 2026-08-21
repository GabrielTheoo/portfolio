import type { Stat, ToolGroup } from "./types";

export const profile = {
  name: "Gabriel Teobaldo",
  shortName: "Gabriel",
  role: "AI Creative Technologist",
  /** One-line positioning used in meta tags and the footer. */
  tagline: "AI Creative Technologist. Available for select projects and collaborations.",
  email: "gabriel.teobaldo@hotmail.com",
  phone: "+55 (11) 99958-4897",
  location: "São Paulo, Brazil",
  socials: [
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "https://github.com/GabrielTheoo" },
  ],
};

export const about = {
  eyebrow: "— Introduction",
  heading:
    "I am Gabriel, an AI specialist transforming the way brands create and communicate in the digital world.",
  body: [
    "I operate at the intersection of artificial intelligence and visual creativity. I work with the most powerful AI platforms on the market to produce generative images, cinematic videos, immersive websites, and high-impact brand experiences.",
    "From early-stage startups to global multinationals like Motorola, I have worked across industries: crafting campaigns, interfaces, and brand systems that combine strategic thinking with strong visual execution.",
  ],
};

export const stats: Stat[] = [
  { value: "100", unit: "+", label: "Projects Delivered" },
  { value: "5", unit: "+", label: "Years of Experience" },
  { value: "Multico", unit: ".", label: "Multinational Projects" },
  { value: "AI", unit: "+ Adobe", label: "Full Creative Toolkit" },
];

export const toolkit = {
  eyebrow: "— Toolkit",
  heading: "The platforms I command.",
  intro:
    "I leverage the most advanced tools on the market to generate images, produce videos, build interactive experiences, and craft entire digital worlds.",
  groups: [
    {
      title: "AI Platforms",
      meta: "Generative · Vision · Language",
      items: [
        "Gemini",
        "Nano Banana",
        "Claude Code",
        "Anti-Gravity",
        "ChatGPT",
        "Midjourney",
        "RunwayML",
      ],
    },
    {
      title: "Designing Tools",
      meta: "Design · Motion · Visual",
      items: [
        "Photoshop",
        "Illustrator",
        "After Effects",
        "Premiere Pro",
        "InDesign",
        "XD",
        "Figma",
      ],
    },
    {
      title: "UX Process",
      meta: "Research · Prototype · Deliver",
      items: [
        "Agile",
        "Sprint",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Design Thinking",
        "Journey Mapping",
      ],
    },
  ] satisfies ToolGroup[],
  /** Marquee / capability strip under the toolkit grid. */
  capabilities: [
    "Image Generation",
    "Video Production",
    "Website Creation",
    "Brand Identity",
    "Generative Art",
  ],
};
