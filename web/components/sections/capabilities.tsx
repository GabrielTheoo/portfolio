import Image from "next/image";

import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import { capabilities } from "@/content/capabilities";

/**
 * "What You Get".
 *
 * The reference centres this one section against an otherwise left-aligned
 * page, sets the heading at its largest size, and drops small media chips
 * inline inside the running display text. Reproduced here with the case
 * covers as the chips, so the statement carries proof rather than
 * decoration.
 */

/** Media chips woven into the statement, in reading order. */
const CHIPS = [
  { src: "/projects/motorola-ai/poster-1.webp", alt: "Motorola AI product video frame" },
  { src: "/projects/nike-jordan/identity-hero.webp", alt: "Jordan Maestro product render" },
  { src: "/projects/lakeside/figma-hero.jpg", alt: "Lakeside redesigned hero" },
];

export function Capabilities() {
  return (
    <Section id="capabilities">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center text-center">
        <Display text={"What\nYou Get?"} size="mega" className="text-center" />

        <div className="mt-7">
          <LabelPill>{capabilities.eyebrow}</LabelPill>
        </div>

        {/* Statement with inline media chips. Each chip is a real asset,
            baseline-aligned so it sits in the line rather than beside it. */}
        <p
          data-reveal="up"
          className="mt-12 font-display text-huge font-bold tracking-tight text-ink"
        >
          Research{" "}
          <InlineChip {...CHIPS[0]} /> that finds the drop-off, design{" "}
          <InlineChip {...CHIPS[1]} /> that answers it, and a build{" "}
          <InlineChip {...CHIPS[2]} /> that actually ships.
        </p>
      </div>

      {/* Capability cards. The first spans wide so the row does not read as
          a uniform grid with a gap at the end. */}
      <div className="mt-24 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.items.map((item, i) => (
          <div
            key={item.index}
            data-reveal="up"
            className={
              "flex flex-col glass rounded-sm p-[1.776rem] transition-colors duration-300 hover:bg-inner" +
              (i === 0 ? " md:col-span-2 xl:col-span-1" : "")
            }
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-meta font-bold text-accent">
                {item.index}
              </span>
              <h3 className="font-display text-sub font-medium text-ink">
                {item.title}
              </h3>
            </div>

            <p className="mt-4 text-copy text-ink-80">{item.body}</p>

            <p className="mt-auto pt-7 text-[0.7rem] font-medium uppercase leading-none tracking-wide text-ink-muted">
              {item.meta}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function InlineChip({ src, alt }: { src: string; alt: string }) {
  return (
    <span className="relative mx-1 inline-block h-[0.85em] w-[1.35em] translate-y-[0.08em] overflow-hidden rounded-xs bg-inner align-baseline">
      <Image src={src} alt={alt} fill sizes="80px" className="object-cover" />
    </span>
  );
}
