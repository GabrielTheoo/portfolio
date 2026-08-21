import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseGallery } from "@/components/case/case-gallery";
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
        "font-headline leading-[0.95] tracking-tight text-on-surface " +
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
    <article className="bg-surface-lowest">
      {/* ─── Hero ─── */}
      <section className="px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
            Case Study · {project.year}
          </p>

          <h1 className="font-headline text-5xl leading-[0.95] tracking-tight text-on-surface md:text-7xl">
            <span className="block">{project.title.lead}</span>
            <span className="block text-on-surface-variant">
              {project.title.rest}
            </span>
          </h1>

          <ul className="mt-10 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/5 px-4 py-2 text-[0.7rem] font-light uppercase tracking-[0.1em] text-on-surface-variant"
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
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-xs font-normal text-white transition-colors duration-200 hover:bg-primary-bright"
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
          <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl bg-surface-container">
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
        <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
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
            "px-6 py-24 md:px-10 md:py-32 " +
            (i % 2 === 0 ? "bg-surface-lowest" : "bg-surface")
          }
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
                {section.eyebrow}
              </p>
              <DisplayHeading text={section.heading} />
            </div>

            <div className="space-y-5">
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-light leading-relaxed text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}

              {section.callout ? (
                <p className="rounded-2xl bg-primary-container/60 p-6 text-sm font-light leading-relaxed text-primary-fixed">
                  {section.callout}
                </p>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {/* ─── Pull quote ─── */}
      {project.pull ? (
        <section className="bg-surface-container px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-headline text-2xl italic leading-tight text-on-surface md:text-4xl">
              &ldquo;{project.pull.quote}&rdquo;
            </p>
            <p className="mt-8 text-xs font-light uppercase tracking-[0.14em] text-primary">
              {project.pull.attribution}
            </p>
          </div>
        </section>
      ) : null}

      {/* ─── UX principles, Life Thrive only ─── */}
      {isLifethrive ? (
        <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
              — UX Principles
            </p>
            <DisplayHeading text={"Six decisions that\nearn trust."} />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lifethrivePrinciples.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl bg-surface-container p-8"
                >
                  <h3 className="font-headline text-xl leading-none text-on-surface">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-on-surface-variant">
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
        <section className="bg-surface-lowest px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
              {project.palette.eyebrow}
            </p>
            <DisplayHeading text={project.palette.heading} />

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {project.palette.swatches.map((swatch) => (
                <div key={swatch.hex}>
                  <div
                    className="aspect-[4/3] rounded-2xl"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <p className="mt-4 text-sm font-light text-on-surface">
                    {swatch.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-outline">
                    {swatch.hex}
                  </p>
                  <p className="mt-1 text-xs font-light text-on-surface-variant">
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
        <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
                — Typography
              </p>
              <p className="font-headline text-3xl leading-[0.95] text-on-surface md:text-5xl">
                {project.typography.specimen.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-8 text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
                {project.typography.meta}
              </p>
            </div>

            <div className="lg:pt-20">
              <h3 className="font-headline text-2xl leading-none text-on-surface">
                {project.typography.name}
              </h3>
              <p className="mt-5 text-sm font-light leading-relaxed text-on-surface-variant">
                {project.typography.rationale}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* ─── Process ─── */}
      {project.process ? (
        <section className="bg-surface-lowest px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
              {project.process.eyebrow}
            </p>
            <DisplayHeading text={project.process.heading} />
            <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-on-surface-variant">
              {project.process.intro}
            </p>

            <ol className="mt-14 grid gap-6 md:grid-cols-2">
              {project.process.steps.map((step) => (
                <li
                  key={step.index}
                  className="rounded-2xl bg-surface-container p-8"
                >
                  <span className="font-headline text-sm leading-none text-primary">
                    {step.index}
                  </span>
                  <h3 className="mt-4 font-headline text-xl leading-none text-on-surface md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-on-surface-variant">
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
        <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
              {project.gallery.eyebrow}
            </p>
            <DisplayHeading text={project.gallery.heading} />
            {project.gallery.intro ? (
              <p className="mt-6 max-w-xl text-sm font-light leading-relaxed text-on-surface-variant">
                {project.gallery.intro}
              </p>
            ) : null}

            <CaseGallery items={project.gallery.items} />
          </div>
        </section>
      ) : null}

      {/* ─── Results ─── */}
      <section className="bg-surface-lowest px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
                {project.results.eyebrow}
              </p>
              <DisplayHeading text={project.results.heading} />
            </div>
            <div className="space-y-5">
              {project.results.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-light leading-relaxed text-on-surface-variant"
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
                className="rounded-2xl bg-surface-container p-8"
              >
                <dt className="font-headline text-4xl leading-none text-on-surface md:text-5xl">
                  {stat.value}
                  {stat.unit ? (
                    <span className="text-2xl text-primary md:text-3xl">
                      {stat.unit}
                    </span>
                  ) : null}
                </dt>
                <dd className="mt-4 text-[0.7rem] font-light uppercase tracking-[0.14em] text-on-surface-variant">
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
              className="mt-8 inline-block font-mono text-xs text-primary transition-opacity hover:opacity-70"
            >
              {project.liveLabel}
            </a>
          ) : null}
        </div>
      </section>

      {/* ─── Stack ─── */}
      <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
            {project.stack.eyebrow}
          </p>
          <DisplayHeading text={project.stack.heading} />

          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.stack.tools.map((tool) => (
              <li
                key={tool.name}
                className="flex items-baseline justify-between gap-4 rounded-2xl bg-surface-container px-6 py-5"
              >
                <span className="font-headline text-lg leading-none text-on-surface">
                  {tool.name}
                </span>
                <span className="text-right text-[0.7rem] font-light uppercase tracking-[0.1em] text-outline">
                  {tool.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── CTA + prev/next ─── */}
      <section className="bg-surface-lowest px-6 pb-16 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-surface-container p-10 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/20 blur-[100px]"
            />
            <div className="relative max-w-2xl">
              <DisplayHeading
                text={project.cta.heading}
                className="text-3xl md:text-5xl"
              />
              <p className="mt-6 text-sm font-light leading-relaxed text-on-surface-variant">
                {project.cta.body}
              </p>
              <Link
                href="/#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-xs font-normal text-white transition-colors duration-200 hover:bg-primary-bright"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          <nav className="mt-6 grid gap-3 md:grid-cols-2">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group rounded-2xl bg-surface-low p-8 transition-colors duration-300 hover:bg-surface-container"
              >
                <p className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
                  Previous
                </p>
                <p className="mt-3 font-headline text-xl leading-none text-on-surface transition-colors group-hover:text-primary">
                  {prev.title.lead} {prev.title.rest}
                </p>
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group rounded-2xl bg-surface-low p-8 text-right transition-colors duration-300 hover:bg-surface-container"
              >
                <p className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
                  Next
                </p>
                <p className="mt-3 font-headline text-xl leading-none text-on-surface transition-colors group-hover:text-primary">
                  {next.title.lead} {next.title.rest}
                </p>
              </Link>
            ) : null}
          </nav>

          <footer className="mt-20 border-t border-white/5 pt-8">
            <p className="text-xs font-light text-outline">
              © 2026 Gabriel Teobaldo. All rights reserved.
            </p>
          </footer>
        </div>
      </section>
    </article>
  );
}
