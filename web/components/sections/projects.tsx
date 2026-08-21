import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { projects, work } from "@/content/projects";

/**
 * Project grid.
 *
 * Reference pattern: numbered cards, tech tags above the name, cover image on
 * top. Kept on this site's layered dark surfaces rather than the reference's
 * cream cards.
 */
export function Projects() {
  return (
    <section id="work" className="bg-surface-lowest px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={work.eyebrow}
          heading={"Built with AI,\nMade to Perform"}
          intro={work.intro}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container transition-colors duration-300 hover:bg-surface-high"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-low">
                {project.cover.kind === "video" ? (
                  <video
                    src={project.cover.src}
                    poster={project.cover.poster}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-label={project.cover.alt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-[0.7rem] font-light uppercase tracking-[0.1em] text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="shrink-0 font-headline text-sm leading-none text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-headline text-2xl leading-none text-on-surface">
                  {project.title.lead}{" "}
                  <span className="text-on-surface-variant">
                    {project.title.rest}
                  </span>
                </h3>

                <p className="mt-3 text-sm font-light leading-relaxed text-on-surface-variant">
                  {project.summary}
                </p>

                <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-light text-primary">
                  <span>View case study</span>
                  <svg
                    aria-hidden
                    className="size-3 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
