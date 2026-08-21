import { ShaderBackground } from "@/components/ui/hero-shader";
import { stats } from "@/content/profile";

/** The hero surfaces the two stats that read instantly. */
const HERO_STATS = stats.slice(0, 2);

export function Hero() {
  return (
    <ShaderBackground className="flex min-h-svh flex-col">
      <main className="relative z-20 mt-auto max-w-3xl px-6 pb-16 pt-32 md:px-10 md:pb-24">
        <div
          className="relative mb-6 inline-flex items-center rounded-full bg-white/5 px-3 py-1 backdrop-blur-sm"
          style={{ filter: "url(#glass-effect)" }}
        >
          <div className="absolute left-1 right-1 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <span className="relative z-10 text-xs font-light text-primary-fixed/90">
            Available for select projects
          </span>
        </div>

        <h1 className="mb-5 font-headline text-5xl leading-[0.95] tracking-tight text-primary-fixed md:text-7xl">
          The AI Creative
          <br />
          Technologist.
          <br />
          <span className="italic text-primary">That&apos;s Gabriel.</span>
        </h1>

        <p className="mb-8 max-w-md text-sm font-light leading-relaxed text-primary-fixed/70">
          I build the pipelines and interfaces that let brands produce work at a
          speed they could not before. Generative imagery, cinematic video, and
          immersive web — from Motorola to early-stage startups.
        </p>

        <div className="mb-9 flex items-center gap-10">
          {HERO_STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-headline text-3xl leading-none text-primary-fixed">
                {stat.value}
                <span className="text-primary">{stat.unit}</span>
              </div>
              <div className="mt-1.5 text-[0.7rem] font-light uppercase tracking-[0.14em] text-primary-fixed/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-full bg-primary px-8 py-3 text-xs font-normal text-white transition-all duration-200 hover:bg-primary-bright"
          >
            View My Work
          </a>
          <a
            href="#resume"
            className="rounded-full border border-white/30 bg-transparent px-8 py-3 text-xs font-normal text-primary-fixed transition-all duration-200 hover:border-white/50 hover:bg-white/10"
          >
            Resume
          </a>
        </div>
      </main>
    </ShaderBackground>
  );
}
