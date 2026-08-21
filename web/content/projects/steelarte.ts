import type { Project } from "../types";

export const steelarte: Project = {
  slug: "steel-arte",
  title: { lead: "Steel", rest: "Arte" },
  summary: "Metalwork atelier for high-end architecture. Storytelling, research, screens and build.",
  category: "Storytelling · UX & UI · Build",
  year: "2026",
  tags: ["Storytelling", "UX Research", "UI Design", "Website Build"],
  liveUrl: "https://steelarte.com.br",
  liveLabel: "steelarte.com.br",
  cover: {
    kind: "image",
    src: "/projects/steelarte/hero.webp",
    alt: "Laser-cut artistic metal panel integrated into a high-end interior",
  },
  pull: {
    quote: "The metal was already art. The website was still selling it by the square metre.",
    attribution: "Design principle, Steel Arte",
  },
  sections: [
    {
      eyebrow: "The Brief",
      heading: "A metalwork atelier\nthat architects had\nnever heard of.",
      body: [
        "Steel Arte cuts artistic metal panels, brise systems, gates and pergolas for high-end residential and corporate architecture in Brazil. Every piece is drawn for one project and cut to the millimetre. Nothing about the work is commodity — but nothing online said so.",
        "The audience is narrow and specific: architects and developers specifying materials for luxury builds. They do not buy from a catalogue, they buy from confidence that the atelier can execute a drawing. The site had to earn that confidence before a single email.",
      ],
    },
    {
      eyebrow: "The Story",
      heading: "Sell the art,\nnot the metal.",
      body: [
        "The whole project turned on one decision: stop describing what Steel Arte manufactures and start showing what it makes possible. Metalwork suppliers lead with capacity, tonnage and finishes. Steel Arte leads with the room the panel is in.",
        "That reframing set the narrative order for the entire homepage — art first, architecture second, process third, credentials last. By the time a visitor reaches the specification detail, they already want the piece.",
      ],
      callout:
        "The positioning line the site is built around: art, architecture and exclusivity in metal — in that order.",
    },
    {
      eyebrow: "Research",
      heading: "Designing for a\nspecifier, not a\nshopper.",
      body: [
        "Architects read a supplier site looking for evidence, not persuasion: can this atelier hold a tolerance, will it hit a site deadline, has it done something like this before. Interviews and competitor analysis kept surfacing the same three questions.",
        "So the structure answers them in order — a process section that names each stage from briefing to installation, a differentiators section that says plainly what separates a Steel Arte piece from a generic one, and a project gallery that shows panels already living inside finished architecture.",
      ],
    },
  ],
  palette: {
    eyebrow: "Palette",
    heading: "Graphite and\nbrushed brass.",
    swatches: [
      { name: "Graphite", hex: "#0E0E0C", role: "Primary Background" },
      { name: "Brushed Brass", hex: "#B2935E", role: "Accent" },
      { name: "Warm Sand", hex: "#CBB287", role: "Secondary Accent" },
      { name: "Oxide", hex: "#9C5B3B", role: "Supporting Warm" },
      { name: "Bone", hex: "#F2EFEA", role: "Primary Text" },
    ],
  },
  typography: {
    name: "Cormorant Garamond + Jost",
    meta: "Cormorant Garamond · Display / Jost · Body",
    specimen: "Arte,\nArquitetura e\nExclusividade\nem Metal.",
    rationale:
      "A high-contrast editorial serif for display, set very large, against a geometric sans for body. The serif carries the craft and the heritage; the sans keeps the specification copy neutral and legible. The tension between them is the same one in the product — handwork executed by machine.",
  },
  process: {
    eyebrow: "Process",
    heading: "Story first.\nScreens after.",
    intro:
      "The narrative was settled before any layout existed, so the design had a spine to hang on rather than a set of sections to fill.",
    steps: [
      {
        index: "01",
        title: "Discovery & Positioning",
        body: "Interviewed the atelier about how work actually arrives — almost always an architect with a drawing. That single insight moved the whole site's audience from homeowner to specifier.",
      },
      {
        index: "02",
        title: "Competitor Analysis",
        body: "Benchmarked Brazilian metalwork suppliers and European architectural-metal ateliers. The local field sells capability; the European field sells authorship. Steel Arte belonged with the second.",
      },
      {
        index: "03",
        title: "Narrative Architecture",
        body: "Wrote the page as a story before designing it: art, architecture, what we do, how we work, why us, proof, contact. Each section earns the next scroll instead of restating the last.",
      },
      {
        index: "04",
        title: "UI Design",
        body: "Designed every screen around the photography, with the serif set large enough to read as a statement and generous negative space so each panel gets its own frame.",
      },
      {
        index: "05",
        title: "Build & Launch",
        body: "Built and shipped the production site, tuned for large architectural imagery without a slow first paint on a phone.",
      },
    ],
  },
  gallery: {
    eyebrow: "The Site",
    heading: "Every panel gets\nits own frame.",
    intro:
      "Product categories, the process walkthrough and the project gallery, all built to let the photography carry the argument.",
    items: [
      { kind: "image", src: "/projects/steelarte/hero.webp", alt: "Homepage hero, artistic metal panel in situ", caption: "Hero" },
      { kind: "image", src: "/projects/steelarte/pa-main.webp", alt: "Artistic panels category", caption: "Artistic panels" },
      { kind: "image", src: "/projects/steelarte/paineis-1.webp", alt: "Laser-cut panel detail", caption: "Panel detail" },
      { kind: "image", src: "/projects/steelarte/prt-portoes.webp", alt: "Exclusive gates category", caption: "Gates" },
      { kind: "image", src: "/projects/steelarte/perg-main.webp", alt: "Pergola installation", caption: "Pergolas" },
      { kind: "image", src: "/projects/steelarte/gal-2.webp", alt: "Project gallery, panel within finished architecture", caption: "Projects" },
    ],
  },
  results: {
    eyebrow: "The Result",
    heading: "A supplier site that\nreads like a\nportfolio.",
    body: [
      "Steel Arte now presents the way its buyers already think: authored pieces inside finished architecture, with the technical detail available but never leading. The five-stage process section does the work a sales call used to do, so enquiries arrive already understanding how a commission runs.",
      "The whole thing — story, research, screens, build — was delivered end to end, which meant the narrative that survived into production was the one the research argued for.",
    ],
    stats: [
      { value: "7", label: "Product lines structured" },
      { value: "5", label: "Process stages defined" },
      { value: "1", label: "Positioning line, everywhere" },
      { value: "100", unit: "%", label: "Designed and built in-house" },
    ],
  },
  stack: {
    eyebrow: "Tools & Stack",
    heading: "Designed and\nshipped.",
    tools: [
      { name: "Figma", role: "UI & Design System" },
      { name: "Research", role: "Interviews & Benchmarking" },
      { name: "Copywriting", role: "Narrative & Positioning" },
      { name: "Photoshop", role: "Image Treatment" },
      { name: "Front-end", role: "Build & Deployment" },
    ],
  },
  cta: {
    heading: "Selling something\nbetter than your\nsite says?",
    body: "I find the story the work already tells, then design and build the site that tells it.",
  },
};
