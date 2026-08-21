import type { Stat, ToolGroup } from "./types";

export const profile = {
  name: "Gabriel Teobaldo",
  shortName: "Gabriel",
  role: "UX/UI Designer",
  /** One-line positioning used in meta tags and the rail. */
  tagline: "UX/UI designer. I design and build websites that convert.",
  email: "gabriel.teobaldo@hotmail.com",
  phone: "+55 (11) 99958-4897",
  location: "São Paulo, Brazil",
  socials: [
    { label: "Instagram", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "https://github.com/GabrielTheoo" },
  ],
};

/**
 * Rail intro.
 *
 * Longer than a tagline on purpose: the card has to carry the top of the
 * rail on its own now that the portrait has moved to the About section.
 * Condensed from Gabriel's own bio.
 */
export const railIntro =
  "Graphic designer and UX professional working across branding, interface design and illustration. Research and usability testing feed the work, so what ships is both good-looking and effective.";

/**
 * Hero copy.
 *
 * Short lines set large. The page should carry weight through scale and
 * space, not word count — long paragraphs in a hero go unread.
 */
export const hero = {
  eyebrow: "Available for select projects",
  heading: "Websites that\nsell before\nyou say a word.",
  sub: "UX/UI design and front-end build, end to end.",
  primaryCta: "See the work",
  secondaryCta: "Resume",
};

export const stats: Stat[] = [
  { value: "50", unit: "+", label: "Projects" },
  { value: "5", unit: "+", label: "Years of experience" },
  { value: "Motorola", label: "Multinational client" },
  { value: "Figma", unit: " → Live", label: "Design to deployment" },
];

export const toolkit = {
  eyebrow: "The toolkit",
  heading: "How the work\ngets made.",
  intro: "Research first. Design second. Shipped, not handed off.",
  groups: [
    {
      title: "UX Process",
      meta: "Research · Prototype · Validate",
      items: [
        "User Research",
        "Journey Mapping",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Design Thinking",
        "Agile",
      ],
    },
    {
      title: "Design & Build",
      meta: "Interface · System · Ship",
      items: [
        "Figma",
        "Design Systems",
        "Webflow",
        "Next.js",
        "Tailwind",
        "WordPress",
        "Vercel",
      ],
    },
    {
      title: "Production",
      meta: "Imagery · Motion · Brand",
      items: [
        "Photoshop",
        "Illustrator",
        "After Effects",
        "Premiere Pro",
        "InDesign",
        "Midjourney",
      ],
    },
  ] satisfies ToolGroup[],
  /** Capability strip under the toolkit grid. */
  capabilities: [
    "UX Research",
    "Interface Design",
    "Design Systems",
    "Website Build",
    "Brand Identity",
  ],
};
