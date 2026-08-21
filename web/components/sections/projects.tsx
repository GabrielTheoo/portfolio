import Image from "next/image";
import Link from "next/link";

import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { projects, work } from "@/content/projects";
import type { Project } from "@/content/types";

/**
 * Project gallery.
 *
 * The reference pins the viewport and scrolls the project track sideways
 * as you scroll down; `data-h-pin` / `data-h-track` are the hooks the
 * motion provider drives. Below the pin breakpoint it degrades to an
 * ordinary horizontal swipe strip, which is the better phone interaction
 * anyway — nothing depends on JS to be reachable.
 */
export function Projects() {
  return (
    <section id="work" className="relative">
      <div
        data-h-pin
        className="flex min-h-svh flex-col justify-center overflow-hidden py-24 rail:py-0"
      >
        <div className="px-5 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Display text={work.heading} size="display" />
            <LabelPill tone="accent">{work.eyebrow}</LabelPill>
          </div>

          <p data-reveal="up" className="mt-7 max-w-[26rem] text-copy text-ink-80">
            {work.intro}
          </p>
        </div>

        {/* Scroll container. `overflow-x-auto` has to sit on a separate,
            viewport-width element: the track itself is `w-max`, and an
            element cannot scroll its own intrinsic width — with both on one
            div the strip was simply clipped and the projects became
            unreachable on touch. */}
        <div className="mt-14 overflow-x-auto pb-4 rail:mt-20 rail:overflow-x-visible rail:pb-0">
        <div
          data-h-track
          className="flex w-max gap-4 px-5 rail:pl-[var(--content-inset)]"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}

          {/* Tail card: closes the horizontal run with the next action. */}
          <Link
            href="/#contact"
            className="group flex w-[19rem] shrink-0 flex-col justify-between rounded-sm bg-accent p-[1.776rem] sm:w-[24rem]"
          >
            <p className="font-display text-title font-medium text-on-accent">
              Your project
              <br />
              could be next.
            </p>
            <span className="mt-10 inline-flex items-center gap-2 text-copy font-medium text-on-accent">
              Start a conversation
              <svg
                aria-hidden
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
            </span>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex w-[19rem] shrink-0 flex-col overflow-hidden glass rounded-sm transition-colors duration-300 hover:bg-inner sm:w-[26rem]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-page">
        {project.cover.kind === "video" ? (
          <video
            src={project.cover.src}
            poster={project.cover.poster}
            muted
            loop
            playsInline
            preload="none"
            aria-label={project.cover.alt}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="26rem"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        )}

        {/* Index badge, as the reference numbers its cards. */}
        <span className="absolute left-4 top-4 rounded-xs bg-page/80 px-2 py-1 font-display text-meta font-bold text-accent backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-[1.336rem]">
        <ul className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <li
              key={tag}
              className="rounded-xs bg-subcard px-2 py-1 text-[0.7rem] font-medium uppercase leading-none text-ink-60"
            >
              {tag}
            </li>
          ))}
        </ul>

        <h3 className="mt-5 font-display text-title font-medium text-ink">
          {project.title.lead}{" "}
          <span className="text-ink-muted">{project.title.rest}</span>
        </h3>

        <p className="mt-3 text-copy text-ink-80">{project.summary}</p>

        <span className="mt-auto flex items-center gap-2 pt-7 text-meta font-medium text-accent">
          View case study
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
        </span>
      </div>
    </Link>
  );
}
