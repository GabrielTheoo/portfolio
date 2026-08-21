import { ShaderBackground } from "@/components/ui/hero-shader";
import { LabelPill } from "@/components/ui/label-pill";
import { Display } from "@/components/ui/display";

export function Hero() {
  return (
    <div id="top">
      <ShaderBackground className="flex min-h-svh flex-col">
        <div className="relative z-20 mt-auto px-5 pb-16 pt-32 rail:pl-[var(--content-inset)] rail:pr-[var(--rail-inset)] rail:pb-24">
          <div
            className="relative mb-7 inline-flex items-center rounded-pill bg-white/5 px-3 py-1 backdrop-blur-sm"
            style={{ filter: "url(#glass-effect)" }}
          >
            <div className="absolute left-1 right-1 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <span className="relative z-10 text-label font-bold uppercase leading-none text-ink-80">
              Available for select projects
            </span>
          </div>

          <Display
            as="h1"
            text={"The AI Creative\nTechnologist.\nThat's Gabriel."}
            size="huge"
            reveal={false}
            className="max-w-[52rem]"
          />

          <p className="mt-8 max-w-[28rem] text-copy text-ink-80">
            I build the pipelines and interfaces that let brands produce work at
            a speed they could not before. Generative imagery, cinematic video,
            and immersive web — from Motorola to early-stage startups.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-11 items-center rounded-md bg-accent px-8 text-copy font-medium text-on-accent transition-colors duration-200 hover:bg-accent-bright"
            >
              View My Work
            </a>
            <a
              href="#resume"
              className="inline-flex h-11 items-center rounded-md border border-rule-strong px-8 text-copy font-medium text-ink transition-colors duration-200 hover:bg-white/10"
            >
              Resume
            </a>
          </div>

          <div className="mt-12">
            <LabelPill>Scroll to begin</LabelPill>
          </div>
        </div>
      </ShaderBackground>
    </div>
  );
}
