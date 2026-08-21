import { ShaderBackground } from "@/components/ui/hero-shader";
import { Display } from "@/components/ui/display";
import { NAV_ITEMS } from "@/content/nav";
import { hero, profile } from "@/content/profile";

/**
 * Hero.
 *
 * The outer section is taller than the viewport and the visual inside it is
 * sticky, so the hero holds while you scroll past it. Over that distance the
 * motion provider fades everything marked `data-hero-fade` out and assembles
 * the side rail — the handoff from hero to the rest of the page.
 *
 * The hero carries its own nav for the same reason the reference does: while
 * the rail is still hidden, this is the only navigation on the page. The two
 * cross over rather than leaving a gap with neither.
 *
 * Without JS the hero simply sits there and the rail is already visible, so
 * nothing here depends on the animation running.
 */
export function Hero() {
  // The extra height is scroll budget for the handoff, so it only applies
  // where the handoff runs. On phones the rail is a sheet and nothing
  // animates, so the extra height there would just be dead scroll.
  return (
    <section id="top" data-hero className="relative h-svh rail:h-[175svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <ShaderBackground className="flex h-full flex-col">
          {/* ── Hero nav: hands over to the rail on scroll ── */}
          <div
            data-hero-fade
            className="relative z-20 hidden flex-wrap items-center justify-between gap-6 px-5 pt-6 rail:flex rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]"
          >
            <span className="font-display text-xl font-bold leading-none tracking-tight text-ink">
              Gabriel<span className="text-accent">.</span>
            </span>

            <nav className="flex items-center gap-6">
              {NAV_ITEMS.filter((item) => item.id !== "top").map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-display text-label font-bold uppercase leading-none text-ink-60 transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href={`mailto:${profile.email}`}
              className="ml-auto font-display text-label font-bold uppercase leading-none text-ink transition-colors duration-200 hover:text-accent"
            >
              {profile.email}
            </a>
          </div>

          {/* ── Hero copy ── */}
          <div
            data-hero-fade
            className="relative z-20 mt-auto px-5 pb-16 rail:pb-24 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)]"
          >
            <div
              className="relative mb-7 inline-flex items-center rounded-pill bg-white/5 px-3 py-1 backdrop-blur-sm"
              style={{ filter: "url(#glass-effect)" }}
            >
              <div className="absolute left-1 right-1 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <span className="relative z-10 text-label font-bold uppercase leading-none text-ink-80">
                {hero.eyebrow}
              </span>
            </div>

            <Display
              as="h1"
              text={hero.heading}
              size="huge"
              reveal={false}
              className="max-w-[46rem]"
            />

            <p className="mt-8 max-w-[26rem] text-copy text-ink-80">
              {hero.sub}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-11 items-center rounded-md bg-accent px-8 text-copy font-medium text-on-accent transition-colors duration-200 hover:bg-accent-bright"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#resume"
                className="inline-flex h-11 items-center rounded-md border border-rule-strong px-8 text-copy font-medium text-ink transition-colors duration-200 hover:bg-white/10"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </ShaderBackground>
      </div>
    </section>
  );
}
