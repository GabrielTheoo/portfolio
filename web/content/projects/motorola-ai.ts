import type { Project } from "../types";

export const motorolaAi: Project = {
  slug: "motorola-ai-pipeline",
  title: { lead: "Motorola", rest: "AI Pipeline" },
  summary: "Generative AI workflow that cut delivery time by 30% for Motorola.",
  category: "AI Strategy",
  year: "2023 — 2025",
  tags: ["AI Strategy", "Generative Video", "Process Design", "Trade Marketing"],
  cover: {
    kind: "video",
    src: "/projects/motorola-ai/video-1.mp4",
    poster: "/projects/motorola-ai/poster-1.webp",
    alt: "AI-generated Motorola product video, campaign 01",
  },
  sections: [
    {
      eyebrow: "— The Challenge",
      heading: "A production team running out of assets before running out of ideas.",
      body: [
        "At ProSolution Marketing, embedded inside Motorola's Trade Marketing operation, the creative team faced a recurring crisis: a severe shortage of high-quality product images and videos. Every campaign cycle, the team would spend days, sometimes weeks, hunting for the right asset, negotiating access, waiting on approval chains, and compromising on quality when nothing better was available.",
        "The bottleneck wasn't creativity. It was infrastructure. And the cost showed up in every deadline that slipped, every training deck that launched late, and every sales associate who went into the field undertrained.",
      ],
      callout:
        "The core problem: no scalable, fast, brand-safe way to generate product imagery and video on demand, causing delivery delays across all trade marketing materials.",
    },
    {
      eyebrow: "— The Solution",
      heading: "Build the pipeline.\nThen let it run.",
      body: [
        "Together with the creative team, I designed and validated a new content production workflow built entirely around generative AI for image and video. The approach wasn't just to generate assets, it was to create a repeatable system that could be validated directly with Motorola's brand team and integrated into the existing content calendar.",
        "We established a clear generation, review and approval loop with Motorola stakeholders, ensuring AI-generated content met brand guidelines before production. Once validated, assets could be produced in hours, not days.",
      ],
    },
  ],
  process: {
    eyebrow: "— The Pipeline",
    heading: "Four stages,\none repeatable system.",
    intro:
      "Each stage had explicit ownership, so the workflow survived handoffs and scaled past the person who designed it.",
    steps: [
      {
        index: "01",
        title: "Pipeline Mapping",
        body: "Audited the existing asset sourcing workflow, identifying every friction point from brief to delivery. Mapped a new AI-first pipeline with clear ownership at each stage.",
      },
      {
        index: "02",
        title: "AI Generation",
        body: "Used generative AI tools to produce on-brand product videos and imagery on demand, tailored to campaign briefs, device colorways, and seasonal contexts.",
      },
      {
        index: "03",
        title: "Brand Validation",
        body: "Established a direct feedback loop with Motorola's brand team to review and approve AI outputs, building trust and a growing library of pre-approved assets.",
      },
      {
        index: "04",
        title: "Scale & Integrate",
        body: "Rolled the pipeline into the full content calendar: training materials, sales kits, digital campaigns, and in-store activations all benefited from faster, richer asset production.",
      },
    ],
  },
  gallery: {
    eyebrow: "— AI-Generated Product Videos",
    heading: "Product videos. Created.\nNot sourced.",
    intro:
      "A selection of AI-generated product videos produced for Motorola's trade marketing campaigns. Each was created using generative video tools, reviewed internally, and validated with the Motorola brand team before deployment.",
    items: [
      {
        kind: "video",
        src: "/projects/motorola-ai/video-1.mp4",
        poster: "/projects/motorola-ai/poster-1.webp",
        alt: "AI product video, campaign 01",
        caption: "Campaign 01",
      },
      {
        kind: "video",
        src: "/projects/motorola-ai/video-2.mp4",
        poster: "/projects/motorola-ai/poster-2.webp",
        alt: "AI product video, campaign 02",
        caption: "Campaign 02",
      },
      {
        kind: "video",
        src: "/projects/motorola-ai/video-3.mp4",
        poster: "/projects/motorola-ai/poster-3.webp",
        alt: "AI product video, campaign 03",
        caption: "Campaign 03",
      },
      {
        kind: "video",
        src: "/projects/motorola-ai/video-4.mp4",
        poster: "/projects/motorola-ai/poster-4.webp",
        alt: "AI product video, campaign 04",
        caption: "Campaign 04",
      },
      {
        kind: "video",
        src: "/projects/motorola-ai/video-5.mp4",
        poster: "/projects/motorola-ai/poster-5.webp",
        alt: "AI product video, campaign 05",
        caption: "Campaign 05",
      },
    ],
  },
  results: {
    eyebrow: "— The Results",
    heading: "Faster delivery.\nMore people trained. Less wasted time.",
    body: [
      "The impact of the new pipeline was measurable from the first campaign cycle. By eliminating the asset-hunting phase and replacing it with on-demand generation and validation, the team gained back significant production time, reinvested directly into output volume.",
      "Training materials improved in quality and quantity. More sales associates could be onboarded faster, with richer visual content. And Motorola gained a creative partner who could produce campaign-ready content in hours, not weeks.",
    ],
    stats: [
      { value: "~30", unit: "%", label: "Reduction in Delivery Time" },
      { value: "↑", label: "Training Material Volume" },
      { value: "0", label: "Days Lost to Asset Hunting" },
      { value: "5", label: "AI-Produced Campaign Videos" },
    ],
  },
  stack: {
    eyebrow: "— Tools & Stack",
    heading: "AI tools. Real results.",
    tools: [
      { name: "Gemini", role: "Visual Research" },
      { name: "Envato AI", role: "Video Generation" },
      { name: "Claude", role: "Process Design" },
      { name: "Photoshop", role: "Post-processing" },
      { name: "After Effects", role: "Animation" },
      { name: "Figma", role: "Layouts & Specs" },
    ],
  },
  cta: {
    heading: "Want to bring AI\ninto your creative workflow?",
    body: "I design processes and pipelines that make AI work for your team: faster, smarter, and fully brand-aligned.",
  },
};
