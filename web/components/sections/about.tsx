import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/content/journey";
import { about } from "@/content/profile";

/**
 * About + journey timeline.
 *
 * Layout follows the reference: a year-marked vertical timeline paired with a
 * portrait that sticks while the milestones scroll past it.
 */
export function About() {
  return (
    <section id="about" className="bg-surface px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={journey.eyebrow}
          heading={journey.heading}
          intro={journey.intro}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          {/* Portrait column — sticky on desktop so it anchors the timeline. */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-surface-container">
              <Image
                src={journey.portrait.src}
                alt={journey.portrait.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 22rem"
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-4">
              {about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-light leading-relaxed text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Timeline column. */}
          <ol className="relative">
            {/* Single continuous rule instead of a border per row. */}
            <div
              aria-hidden
              className="absolute bottom-0 left-[3.25rem] top-2 w-px bg-gradient-to-b from-primary/40 via-outline-variant to-transparent"
            />

            {journey.milestones.map((milestone) => (
              <li
                key={milestone.year}
                className="relative grid grid-cols-[3.25rem_minmax(0,1fr)] gap-6 pb-12 last:pb-0"
              >
                <div className="pt-0.5">
                  <span className="font-headline text-lg leading-none text-primary">
                    {milestone.year}
                  </span>
                </div>

                <div className="relative pl-6">
                  <span
                    aria-hidden
                    className="absolute -left-[0.3125rem] top-1.5 size-2.5 rounded-full bg-primary ring-4 ring-surface"
                  />
                  <h3 className="font-headline text-xl leading-none text-on-surface md:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-on-surface-variant">
                    {milestone.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
