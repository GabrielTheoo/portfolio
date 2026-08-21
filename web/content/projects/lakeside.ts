import type { Project } from "../types";

export const lakeside: Project = {
  slug: "lakeside-dream-companies",
  title: { lead: "Lakeside by", rest: "Dream Companies" },
  summary:
    "End-to-end luxury redesign for Dream Companies' lakeside real estate property, with a before/after comparison.",
  category: "Luxury Real Estate · UX Redesign",
  year: "2026",
  tags: ["UX & UI Redesign", "Luxury Real Estate", "Design System", "AI Photography"],
  liveUrl: "https://www.dreamcompanies.com",
  liveLabel: "dreamcompanies.com",
  cover: {
    kind: "image",
    src: "/projects/lakeside/hero-lake.jpg",
    alt: "Lakeside property at dusk, cinematic architectural photography",
  },
  pull: {
    quote:
      "Luxury is not about the price tag. It is about the feeling. The website needed to make someone feel they had already arrived.",
    attribution: "Design principle, Lakeside Redesign",
  },
  sections: [
    {
      eyebrow: "— The Brief",
      heading: "A luxury lakeside property\nthat deserved a digital\nexperience to match.",
      body: [
        "Lakeside by Dream Companies is a premium real estate development that positions itself firmly in the luxury segment. Every aspect of the property speaks to exclusivity, refinement, and aspirational living. The problem was simple: the digital presence did not.",
        "The goal was to redesign the Lakeside web experience from the ground up, creating a UI that communicated the same sense of luxury and calm sophistication that a potential buyer would feel walking through the property itself. A site where the first impression sells.",
      ],
    },
    {
      eyebrow: "— Brand Analysis",
      heading: "Understanding the brand\nbefore opening Figma.",
      body: [
        "Luxury real estate is one of the most emotionally-driven purchase decisions a person makes. The analysis began not with wireframes, but with understanding who Lakeside's buyer is, what they value, and what feelings the digital experience needed to evoke before a single word is read.",
        "The brand audit identified a clear gap: the existing presence used a generic real estate template that felt interchangeable with thousands of other listings. Lakeside is not a listing. It is a lifestyle. The redesign needed to communicate that distance immediately.",
      ],
    },
    {
      eyebrow: "— Design Strategy",
      heading: "Every pixel earns\nits place.",
      body: [
        "Luxury design is defined by what is removed, not what is added. The redesign stripped away anything that distracted from the property itself: heavy navigation, excessive copy, template-driven layout patterns. What remained was space, intention, and the property's natural beauty.",
        "Cormorant Garamond was chosen as the primary display typeface. A refined editorial serif with deep roots in print luxury, it carries the weight of heritage and restraint that the brand needed. It contrasted against clean geometric sans-serif body text to create a hierarchy that feels both premium and legible.",
      ],
    },
  ],
  palette: {
    eyebrow: "— Palette",
    heading: "Deep night, aged gold.",
    swatches: [
      { name: "Deep Night", hex: "#0D0F0E", role: "Primary Background" },
      { name: "Aged Gold", hex: "#B8965A", role: "Luxury Accent" },
      { name: "Warm Linen", hex: "#EDE5D8", role: "Typography / Light" },
      { name: "Forest Deep", hex: "#2C3B34", role: "Supporting Dark" },
      { name: "Warm Stone", hex: "#9A9082", role: "Body Text" },
    ],
  },
  typography: {
    name: "Cormorant Garamond",
    meta: "Cormorant Garamond · Display · Google Fonts",
    specimen: "Arrive\nbefore you\narrive",
    rationale:
      "A refined editorial serif with deep roots in print luxury. It carries heritage and restraint, contrasted against clean geometric sans-serif body text for a hierarchy that reads premium and stays legible.",
  },
  process: {
    eyebrow: "— Process",
    heading: "From buyer persona\nto high-fidelity UI.",
    intro:
      "Five stages, each one narrowing the gap between what the property is and what the website said it was.",
    steps: [
      {
        index: "01",
        title: "Buyer Persona Mapping",
        body: "Profiled the primary buyer segment: high-net-worth individuals who have purchased luxury property before and expect the digital experience to reflect the product quality.",
      },
      {
        index: "02",
        title: "Competitive Landscape",
        body: "Benchmarked against leading luxury real estate brands globally. Identified the visual codes of luxury: negative space, editorial typography, restrained colour, and cinematic imagery.",
      },
      {
        index: "03",
        title: "Style Guide in Figma",
        body: "Created a comprehensive design system in Figma: colour tokens, type scales, spacing grid, component library, and brand guidelines to ensure consistency across every screen.",
      },
      {
        index: "04",
        title: "High-Fidelity UI Design",
        body: "Designed the full homepage and landing page in Figma with scroll animations, property gallery interactions, and immersive hero sections that let the property speak for itself.",
      },
      {
        index: "05",
        title: "AI-Generated Photography",
        body: "The client had limited property photos. To solve this, I generated cinematic lifestyle and architectural imagery using Midjourney and Gemini, producing assets that matched the luxury aesthetic without requiring a full photo shoot.",
      },
    ],
  },
  gallery: {
    eyebrow: "— Design Screens",
    heading: "Every screen. Every\ndetail. Figma-native.",
    intro:
      "The full homepage was designed as a single immersive experience: from the editorial hero through property listings, lending services, and the closing narrative. Each section uses negative space, gold accents, and Cormorant Garamond serif type to maintain the luxury register throughout.",
    items: [
      { kind: "image", src: "/projects/lakeside/figma-hero.jpg", alt: "Redesigned Lakeside hero section", caption: "Editorial hero" },
      { kind: "image", src: "/projects/lakeside/figma-efficient-path.jpg", alt: "Efficient path section", caption: "The efficient path" },
      { kind: "image", src: "/projects/lakeside/figma-houses.jpg", alt: "Property listings section", caption: "Property listings" },
      { kind: "image", src: "/projects/lakeside/figma-realty.jpg", alt: "Realty services section", caption: "Realty services" },
      { kind: "image", src: "/projects/lakeside/figma-lending.jpg", alt: "Lending services section", caption: "Lending services" },
      { kind: "image", src: "/projects/lakeside/figma-timing.jpg", alt: "Closing narrative section", caption: "Closing narrative" },
    ],
  },
  results: {
    eyebrow: "— The Impact",
    heading: "A digital presence\nas exclusive as the\nproperty itself.",
    body: [
      "The redesign transformed Lakeside from a generic real estate listing into a bespoke digital experience that communicates exclusivity from the first frame. Prospective buyers now encounter a visual narrative that mirrors the quality of the property they are considering.",
      "When a luxury product is presented with a luxury experience, trust is built before a single conversation happens. The new Lakeside site creates that trust instantly, reducing friction in the lead qualification process and elevating the perceived value of the development.",
    ],
    stats: [
      { value: "100", unit: "%", label: "Custom Design System" },
      { value: "2", unit: "x", label: "Pages Redesigned" },
      { value: "↑", label: "Perceived Brand Value" },
      { value: "0", unit: "px", label: "Generic Templates Used" },
    ],
  },
  stack: {
    eyebrow: "— Tools & Stack",
    heading: "Designed in Figma.\nBuilt for luxury.",
    tools: [
      { name: "Figma", role: "UI & Style Guide" },
      { name: "Midjourney", role: "AI Photography" },
      { name: "Gemini", role: "AI Imagery & Research" },
      { name: "Photoshop", role: "Image Retouching" },
      { name: "Illustrator", role: "Brand Assets" },
      { name: "Claude", role: "Copy & Strategy" },
    ],
  },
  cta: {
    heading: "Your brand deserves\na digital presence\nbuilt for its level.",
    body: "I design experiences that convert, because they feel exactly right for the people they are built for.",
  },
};

/** Before/after slider assets, unique to this case. */
export const lakesideComparison = {
  before: {
    src: "/projects/lakeside/before-site.jpg",
    alt: "Original Lakeside site using a generic real estate template",
    label: "Before — Current Site",
  },
  after: {
    src: "/projects/lakeside/figma-hero.jpg",
    alt: "Redesigned Lakeside hero, editorial luxury direction",
    label: "After — Gabriel's Redesign",
  },
  hint: "Drag to compare",
};
