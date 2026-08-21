import type { Role } from "./types";

export const experience = {
  eyebrow: "— Career",
  heading: "Latest Experiences.",
  intro:
    "A track record of delivering AI-powered work across multinational corporations and ambitious brands.",
  roles: [
    {
      company: "Earned Media Productions",
      title: "UX/UI Designer · Full-time",
      period: "May 2026 — Present",
      location: "Remote",
      current: true,
      body: "Designing and enhancing digital experiences for software products and web platforms. Running user journey analysis and research to surface pain points, then turning the findings into user flows, wireframes, prototypes, and shipped interfaces backed by a scalable design system.",
      bullets: [
        "Designed and enhanced digital experiences for software products and web platforms.",
        "Conducted user journey analysis and research to identify pain points and improvement opportunities.",
        "Created user flows, wireframes, prototypes, and user-centered interfaces.",
        "Built, maintained, and evolved scalable Design Systems.",
        "Ensured visual consistency and cohesive user experiences across products and features.",
        "Collaborated closely with development teams to implement UX/UI solutions.",
        "Validated technical requirements and monitored implementation to maintain design quality.",
        "Balanced business goals, user needs, and technical feasibility throughout the product development process.",
      ],
      tags: ["Design Systems", "User Research", "Prototyping", "Product Design"],
    },
    {
      company: "Dingus & Zazzy",
      title: "UX/UI Designer · Full-time",
      period: "Jan 2026 — May 2026",
      location: "Canada · Remote",
      body: "Designed conversion-focused landing pages and responsive interfaces for international clients. Led UX research, usability testing, and prototyping while crafting visual identities and institutional materials.",
      tags: ["UX/UI", "Landing Pages", "Brand Identity", "Prototyping"],
    },
    {
      company: "ProSolution Marketing",
      title: "Graphic Designer → Mid-level Designer · Motorola",
      period: "Jul 2023 — Dec 2025",
      location: "São Paulo · Hybrid",
      body: "Embedded at Motorola as the lead creative for Trade Marketing. Produced training materials, sales assets, executive presentations, and digital campaigns, managing direct client relationships and cross-functional team alignment.",
      tags: ["Motorola", "Trade Marketing", "Art Direction", "Campaigns"],
    },
    {
      company: "Privacy",
      title: "UX/UI Designer · Full-time",
      period: "Jul 2022 — Apr 2023",
      location: "São Paulo · On-site",
      body: "Designed and shipped new product features including a full navigation redesign and a creator profile screen. Collaborated closely with engineering, analysed platform metrics, and produced executive-level performance reports.",
      tags: ["Product Design", "WordPress", "User Research", "Analytics"],
    },
    {
      company: "Eletrônica Santana",
      title: "Marketing & Creative Assistant · Full-time",
      period: "May 2021 — Jul 2022",
      location: "São Paulo",
      body: "Managed social media, e-commerce creative assets, and B2B/B2C campaigns. Produced email marketing, landing pages, and client presentations while building end-to-end creative pipelines from strategy to delivery.",
      tags: ["E-commerce", "Social Media", "Email Marketing", "B2B / B2C"],
    },
    {
      company: "Mariá Modas",
      title: "Junior Graphic Designer · Full-time",
      period: "Sep 2020 — Mar 2021",
      location: "São Paulo",
      body: "First professional role covering the full creative spectrum: online and offline materials, social media management, e-commerce catalogues, paid traffic oversight (Meta & Google Analytics), and photography editing.",
      tags: ["Graphic Design", "Social Media", "Photography", "Paid Traffic"],
    },
  ] satisfies Role[],
};
