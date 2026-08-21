import { transform } from "@/content/capabilities";
import { profile } from "@/content/profile";

/** Closing narrative, in the reference's "transform your experience" slot. */
export function Transform() {
  return (
    <section className="bg-surface px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-surface-container p-10 md:p-16">
          {/* Ambient glow instead of a border to define the block. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/20 blur-[100px]"
          />

          <div className="relative max-w-2xl">
            <p className="mb-6 text-[0.7rem] font-light uppercase tracking-[0.18em] text-primary">
              {transform.eyebrow}
            </p>

            <h2 className="font-headline text-3xl leading-[0.95] tracking-tight text-on-surface md:text-5xl">
              {transform.heading.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>

            <div className="mt-8 space-y-4">
              {transform.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm font-light leading-relaxed text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-xs font-normal text-white transition-colors duration-200 hover:bg-primary-bright"
            >
              {transform.ctaLabel}
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
          </div>
        </div>
      </div>
    </section>
  );
}
