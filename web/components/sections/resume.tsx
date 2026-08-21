import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import { experience } from "@/content/experience";
import { toolkit } from "@/content/profile";

/**
 * Resume.
 *
 * Occupies the reference's service-tier slot and keeps its card geometry:
 * a row of tall solid cards, each opening with a heading and an icon, then
 * a bulleted body. Here the tiers are roles instead of price plans.
 */
export function Resume() {
  const [current, ...past] = experience.roles;

  return (
    <Section id="resume" tone="solid">
      <LabelPill tone="accent">Curriculum Vitae</LabelPill>

      <div className="mt-6">
        <Display text={"Six years of\nshipped work"} size="display" />
      </div>

      <p data-reveal="up" className="mt-7 max-w-[26rem] text-copy text-ink-80">
        {experience.intro}
      </p>

      {/* Current role — the wide card, carrying the full brief. */}
      <div
        data-reveal="up"
        className="mt-16 glass-solid rounded-sm p-[1.112rem] sm:p-[1.776rem]"
      >
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              <span className="text-label font-bold uppercase leading-none text-accent">
                Current role
              </span>
            </div>
            <h3 className="font-display text-title font-medium text-ink sm:text-display">
              {current.company}
            </h3>
            <p className="mt-3 text-copy text-ink-80">{current.title}</p>
          </div>

          <div className="sm:text-right">
            <p className="text-copy text-ink">{current.period}</p>
            <p className="mt-1 text-meta text-ink-muted">{current.location}</p>
          </div>
        </div>

        {current.bullets ? (
          <ul className="mt-9 grid gap-x-10 gap-y-3 lg:grid-cols-2">
            {current.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-copy text-ink-80">
                <span
                  aria-hidden
                  className="mt-[0.55em] size-1 shrink-0 rounded-full bg-accent"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-9 max-w-[40rem] text-copy text-ink-80">
            {current.body}
          </p>
        )}

        <ul className="mt-9 flex flex-wrap gap-1.5">
          {current.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-xs bg-subcard px-2.5 py-1.5 text-[0.7rem] font-medium uppercase leading-none text-ink-60"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {/* Earlier roles as tier-style cards. */}
      <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {past.map((role) => (
          <div
            key={`${role.company}-${role.period}`}
            data-reveal="up"
            className="flex flex-col glass-solid rounded-sm p-[1.336rem] transition-colors duration-300 hover:bg-inner"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-sub font-medium text-ink">
                {role.company}
              </h3>
              <span
                aria-hidden
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-xs bg-subcard text-ink-muted"
              >
                <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </span>
            </div>

            <p className="mt-3 text-meta text-accent">{role.period}</p>
            <p className="mt-1 text-meta text-ink-muted">{role.location}</p>

            <p className="mt-5 text-copy text-ink">{role.title}</p>
            <p className="mt-3 text-copy text-ink-80">{role.body}</p>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-7">
              {role.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-xs bg-subcard px-2 py-1 text-[0.7rem] font-medium uppercase leading-none text-ink-60"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Toolkit. */}
      <div className="mt-24">
        <Display text={toolkit.heading} size="display" />
        <p data-reveal="up" className="mt-7 max-w-[26rem] text-copy text-ink-80">
          {toolkit.intro}
        </p>

        <div className="mt-14 grid gap-3 md:grid-cols-3">
          {toolkit.groups.map((group) => (
            <div
              key={group.title}
              data-reveal="up"
              className="glass-solid rounded-sm p-[1.336rem]"
            >
              <h4 className="font-display text-sub font-medium text-ink">
                {group.title}
              </h4>
              <p className="mt-2 text-[0.7rem] font-medium uppercase leading-none tracking-wide text-ink-muted">
                {group.meta}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xs bg-subcard px-2.5 py-1.5 text-tiny leading-none text-ink-80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
