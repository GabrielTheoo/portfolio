import Image from "next/image";

import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import { about } from "@/content/about";

/**
 * About: a summary and the portrait.
 *
 * Deliberately short. The Resume section below carries the full history, so
 * repeating it as a timeline here only added length to scroll past.
 */
export function About() {
  return (
    <Section id="about" tone="solid">
      <LabelPill tone="accent">{about.eyebrow}</LabelPill>

      <div className="mt-6">
        <Display text={about.heading} size="display" />
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-16">
        {/* Portrait. Lives here rather than in the rail, so it gets a size
            worth looking at. */}
        <div data-reveal="up" className="lg:sticky lg:top-8 lg:self-start">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-card">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 20rem"
              className="object-cover"
            />
          </div>

          <dl className="mt-3 grid grid-cols-2 gap-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="glass rounded-sm p-3.5">
                <dt className="text-label font-bold uppercase leading-none text-ink-muted">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-tiny leading-snug text-ink">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="max-w-[34rem] space-y-6">
          {about.body.map((paragraph, i) => (
            <p
              key={paragraph}
              data-reveal="up"
              className={
                i === 0
                  ? "text-row font-medium leading-snug text-ink"
                  : "text-copy text-ink-80"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
