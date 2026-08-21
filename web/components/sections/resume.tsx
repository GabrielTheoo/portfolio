import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";
import { toolkit } from "@/content/profile";

/**
 * Resume.
 *
 * Occupies the slot the reference uses for service tiers, so it keeps that
 * card rhythm: one featured card carrying the full responsibility list, then
 * the earlier roles as compact rows, then the toolkit.
 */
export function Resume() {
  const [current, ...past] = experience.roles;

  return (
    <section id="resume" className="bg-surface-lowest px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          heading={"Six years of\nshipped work"}
          intro={experience.intro}
        />

        {/* Featured: the current role, with the full brief. */}
        <div className="mt-16 rounded-2xl bg-surface-container p-8 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <span
                  aria-hidden
                  className="size-2 rounded-full bg-primary"
                />
                <span className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-primary">
                  Current role
                </span>
              </div>
              <h3 className="font-headline text-3xl leading-none text-on-surface md:text-4xl">
                {current.company}
              </h3>
              <p className="mt-3 text-sm font-light text-on-surface-variant">
                {current.title}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-light text-on-surface">
                {current.period}
              </p>
              <p className="mt-1 text-xs font-light text-outline">
                {current.location}
              </p>
            </div>
          </div>

          {current.bullets ? (
            <ul className="mt-8 grid gap-x-10 gap-y-3 md:grid-cols-2">
              {current.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm font-light leading-relaxed text-on-surface-variant"
                >
                  <span aria-hidden className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/60" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 max-w-2xl text-sm font-light leading-relaxed text-on-surface-variant">
              {current.body}
            </p>
          )}

          <ul className="mt-8 flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white/5 px-3 py-1.5 text-[0.7rem] font-light uppercase tracking-[0.1em] text-on-surface-variant"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Earlier roles. */}
        <div className="mt-6 space-y-3">
          {past.map((role) => (
            <div
              key={`${role.company}-${role.period}`}
              className="rounded-2xl bg-surface-low p-6 transition-colors duration-300 hover:bg-surface-container md:p-8"
            >
              <div className="grid gap-4 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10">
                <div>
                  <h3 className="font-headline text-xl leading-none text-on-surface">
                    {role.company}
                  </h3>
                  <p className="mt-2.5 text-xs font-light text-outline">
                    {role.period}
                  </p>
                  <p className="mt-1 text-xs font-light text-outline">
                    {role.location}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-light text-on-surface">
                    {role.title}
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-on-surface-variant">
                    {role.body}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-[0.7rem] font-light uppercase tracking-[0.1em] text-on-surface-variant"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toolkit. */}
        <div className="mt-20">
          <h3 className="font-headline text-3xl leading-none text-on-surface md:text-4xl">
            {toolkit.heading}
          </h3>
          <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-on-surface-variant">
            {toolkit.intro}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {toolkit.groups.map((group) => (
              <div key={group.title} className="rounded-2xl bg-surface-low p-6">
                <h4 className="font-headline text-lg leading-none text-on-surface">
                  {group.title}
                </h4>
                <p className="mt-2 text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
                  {group.meta}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-light text-on-surface-variant"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
