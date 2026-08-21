import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseGallery } from "@/components/case/case-gallery";
import { LabelPill } from "@/components/ui/label-pill";
import { BeforeAfter } from "@/components/case/before-after";
import { getNeighbours, getProject, projects } from "@/content/projects";
import { lakesideComparison } from "@/content/projects/lakeside";
import { lifethrivePrinciples } from "@/content/projects/lifethrive";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.title.lead} ${project.title.rest}`;
  return {
    title: `${title} — Case Study`,
    description: project.summary,
    openGraph: { title, description: project.summary, type: "article" },
  };
}

/** Splits a heading on `\n` so display type breaks where it was written to. */
function DisplayHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2
      className={
        "font-display leading-[0.95] tracking-tight text-ink " +
        (className ?? "text-3xl md:text-5xl")
      }
    >
      {text.split("\n").map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </h2>
  );
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getNeighbours(slug);
  const isLakeside = slug === "lakeside-dream-companies";
  const isLifethrive = slug === "life-thrive-solutions";

  return (
    <article className="bg-page">
      {/* ─── Hero ─── */}
      <section className="px-5 pb-16 pt-28 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)] rail:pb-24 rail:pt-16">
        <div className="max-w-[62rem]">
          <div className="mb-7">
            <LabelPill tone="accent">Case Study · {project.year}</LabelPill>
          </div>

          <h1 className="font-display text-huge font-bold tracking-tight text-ink">
            <span className="block">{project.title.lead}</span>
            <span className="block text-ink-80">
              {project.title.rest}
            </span>
          </h1>

          <ul className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/5 px-4 py-2 text-label font-bold uppercase tracking-[0.1em] text-ink-80"
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-xs font-normal text-white transition-colors duration-200 hover:bg-accent-bright"
            >
              View Live Site
              <svg
                aria-hidden
                className="size-3"
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
            </a>
          ) : null}

          {/* Cover */}
          <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-sm bg-card">
            {project.cover.kind === "video" ? (
              <video
                src={project.cover.src}
                poster={project.cover.poster}
                muted
                loop
                autoPlay
                playsInline
                aria-label={project.cover.alt}
                className="size-full object-cover"
              />
            ) : (
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                priority
                sizes="(max-width: 1152px) 100vw, 1152px"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* ─── Before / after, Lakeside only ─── */}
      {isLakeside ? (
        <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="max-w-[62rem]">
            <BeforeAfter
              before={lakesideComparison.before}
              after={lakesideComparison.after}
              hint={lakesideComparison.hint}
            />
          </div>
        </section>
      ) : null}

      {/* ─── Narrative sections ─── */}
      {project.sections.map((section, i) => (
        <section
          key={section.eyebrow}
          className={
            "px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)] " +
            (i % 2 === 0 ? "bg-page" : "bg-page")
          }
        >
          <div className="grid max-w-[62rem] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <div className="mb-6"><LabelPill tone="accent">{section.eyebrow}</LabelPill></div>
              <DisplayHeading text={section.heading} />
            </div>

            <div className="space-y-5">
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-normal leading-relaxed text-ink-80"
                >
                  {paragraph}
                </p>
              ))}

              {section.callout ? (
                <p className="rounded-sm bg-accent-dim/60 p-6 text-sm font-normal leading-relaxed text-ink">
                  {section.callout}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {/* ─── Pull quote ─── */}
      {project.pull ? (
        <section className="bg-card px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="max-w-[52rem] text-center">
            <p className="font-display text-2xl italic leading-tight text-ink md:text-4xl">
              &ldquo;{project.pull.quote}&rdquo;
            </p>
            <p className="mt-8 text-xs font-normal uppercase tracking-[0.14em] text-accent">
              {project.pull.attribution}
            </p>
          </div>
        </section>
      ) : null}

      {/* ─── UX principles, Life Thrive only ─── */}
      {isLifethrive ? (
        <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="max-w-[62rem]">
            <div className="mb-6"><LabelPill tone="accent">— UX Principles</LabelPill></div>
            <DisplayHeading text={"Six decisions that\nearn trust."} />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lifethrivePrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="glass-solid rounded-sm p-8"
                >
                  <h3 className="font-display text-xl leading-none text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-ink-80">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ─── Palette ─── */}
      {project.palette ? (
        <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="max-w-[62rem]">
            <div className="mb-6"><LabelPill tone="accent">{project.palette.eyebrow}</LabelPill></div>
            <DisplayHeading text={project.palette.heading} />

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {project.palette.swatches.map((swatch) => (
                <div key={swatch.hex}>
                  <div
                    className="aspect-[4/3] rounded-sm"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <p className="mt-4 text-sm font-normal text-ink">
                    {swatch.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-muted">
                    {swatch.hex}
                  </p>
                  <p className="mt-1 text-xs font-normal text-ink-80">
                    {swatch.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ─── Typography ─── */}
      {project.typography ? (
        <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="grid max-w-[62rem] gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6"><LabelPill tone="accent">— Typography</LabelPill></div>
              <p className="font-display text-3xl leading-[0.95] text-ink md:text-5xl">
                {project.typography.specimen.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-8 text-label font-bold uppercase tracking-[0.14em] text-ink-muted">
                {project.typography.meta}
              </p>
            </div>

            <div className="lg:pt-20">
              <h3 className="font-display text-2xl leading-none text-ink">
                {project.typography.name}
              </h3>
              <p className="mt-5 text-sm font-normal leading-relaxed text-ink-80">
                {project.typography.rationale}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* ─── Process ─── */}
      {project.process ? (
        <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="max-w-[62rem]">
            <div className="mb-6"><LabelPill tone="accent">{project.process.eyebrow}</LabelPill></div>
            <DisplayHeading text={project.process.heading} />
            <p className="mt-6 max-w-xl text-sm font-normal leading-relaxed text-ink-80">
              {project.process.intro}
            </p>

            <ol className="mt-14 grid gap-6 md:grid-cols-2">
              {project.process.steps.map((step) => (
                <li
                  key={step.index}
                  className="glass-solid rounded-sm p-8"
                >
                  <span className="font-display text-sm leading-none text-accent">
                    {step.index}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-none text-ink md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-normal leading-relaxed text-ink-80">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* ─── Gallery ─── */}
      {project.gallery ? (
        <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
          <div className="max-w-[62rem]">
            <div className="mb-6"><LabelPill tone="accent">{project.gallery.eyebrow}</LabelPill></div>
            <DisplayHeading text={project.gallery.heading} />
            {project.gallery.intro ? (
              <p className="mt-6 max-w-xl text-sm font-normal leading-relaxed text-ink-80">
                {project.gallery.intro}
              </p>
            ) : null}

            <CaseGallery items={project.gallery.items} />
          </div>
        </section>
      ) : null}

      {/* ─── Results ─── */}
      <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
        <div className="max-w-[62rem]">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="mb-6"><LabelPill tone="accent">{project.results.eyebrow}</LabelPill></div>
              <DisplayHeading text={project.results.heading} />
            </div>
            <div className="space-y-5">
              {project.results.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-normal leading-relaxed text-ink-80"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {project.results.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-solid rounded-sm p-8"
              >
                <dt className="font-display text-4xl leading-none text-ink md:text-5xl">
                  {stat.value}
                  {stat.unit ? (
                    <span className="text-2xl text-accent md:text-3xl">
                      {stat.unit}
                    </span>
                  ) : null}
                </dt>
                <dd className="mt-4 text-label font-bold uppercase tracking-[0.14em] text-ink-80">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          {project.liveLabel && project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block font-mono text-xs text-accent transition-opacity hover:opacity-70"
            >
              {project.liveLabel}
            </a>
          ) : null}
        </div>
      </section>

      {/* ─── Stack ─── */}
      <section className="bg-page px-5 py-24 rail:py-[var(--section-gap)] rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]">
        <div className="max-w-[62rem]">
          <div className="mb-6"><LabelPill tone="accent">{project.stack.eyebrow}</LabelPill></div>
          <DisplayHeading text={project.stack.heading} />

          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.stack.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-baseline justify-between gap-4 rounded-sm bg-card px-6 py-5"
              >
                <span className="font-display text-lg leading-none text-ink">
                  {tool.name}
                </span>
                <span className="text-right text-label font-bold uppercase tracking-[0.1em] text-ink-muted">
                  {tool.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA + prev/next ─── */}
      <section className="bg-page px-5 pb-16 pt-24 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)] rail:pt-[var(--section-gap)]">
        <div className="max-w-[62rem]">
          <div className="relative overflow-hidden rounded-sm bg-card p-10 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-accent/20 blur-[100px]"
            />
            <div className="relative max-w-2xl">
              <DisplayHeading
                text={project.cta.heading}
                className="text-3xl md:text-5xl"
              />
              <p className="mt-6 text-sm font-normal leading-relaxed text-ink-80">
                {project.cta.body}
              </p>
              <Link
                href="/#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-xs font-normal text-white transition-colors duration-200 hover:bg-accent-bright"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          <nav className="mt-6 grid gap-3 md:grid-cols-2">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group glass-solid rounded-sm p-8 transition-colors duration-300 hover:bg-card"
              >
                <p className="text-label font-bold uppercase tracking-[0.14em] text-ink-muted">
                  Previous
                </p>
                <p className="mt-3 font-display text-xl leading-none text-ink transition-colors group-hover:text-accent">
                  {prev.title.lead} {prev.title.rest}
                </p>
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group glass-solid rounded-sm p-8 text-right transition-colors duration-300 hover:bg-card"
              >
                <p className="text-label font-bold uppercase tracking-[0.14em] text-ink-muted">
                  Next
                </p>
                <p className="mt-3 font-display text-xl leading-none text-ink transition-colors group-hover:text-accent">
                  {next.title.lead} {next.title.rest}
                </p>
              </Link>
            ) : null}
          </nav>

          <footer className="mt-20 border-t border-rule pt-8">
            <p className="text-xs font-normal text-ink-muted">
              © 2026 Gabriel Teobaldo. All rights reserved.
            </p>
          </footer>
        </div>
      </section>
    </article>
  );
}
