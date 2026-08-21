import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

/**
 * Contact.
 *
 * Sits where the reference closes with its FAQ accordion — same position
 * and card rhythm, contact detail instead of Q&A.
 */
export function Contact() {
  return (
    <Section id="contact" className="pb-16 rail:pb-16">
      <LabelPill tone="accent">Get in touch</LabelPill>

      <div className="mt-6">
        <Display text={"Let's talk about\nwhat you're building"} size="display" />
      </div>

      <p data-reveal="up" className="mt-7 max-w-[26rem] text-copy text-ink-80">
        Available for select projects and collaborations. Email is the fastest
        way to reach me.
      </p>

      <div className="mt-16 grid gap-3 md:grid-cols-3">
        <a
          href={`mailto:${profile.email}`}
          data-reveal="up"
          className="group min-w-0 rounded-sm bg-card p-[1.776rem] transition-colors duration-300 hover:bg-inner"
        >
          <p className="text-label font-bold uppercase leading-none text-ink-muted">Email</p>
          <p className="mt-5 break-all font-display text-sub font-medium text-ink transition-colors group-hover:text-accent">
            {profile.email}
          </p>
        </a>

        <a
          href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
          data-reveal="up"
          className="group min-w-0 rounded-sm bg-card p-[1.776rem] transition-colors duration-300 hover:bg-inner"
        >
          <p className="text-label font-bold uppercase leading-none text-ink-muted">Phone</p>
          <p className="mt-5 font-display text-sub font-medium text-ink transition-colors group-hover:text-accent">
            {profile.phone}
          </p>
        </a>

        <div data-reveal="up" className="min-w-0 rounded-sm bg-card p-[1.776rem]">
          <p className="text-label font-bold uppercase leading-none text-ink-muted">Based in</p>
          <p className="mt-5 font-display text-sub font-medium text-ink">
            {profile.location}
          </p>
        </div>
      </div>

      <div data-reveal="up" className="mt-3 rounded-sm bg-card p-[1.776rem]">
        <p className="text-label font-bold uppercase leading-none text-ink-muted">Elsewhere</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex rounded-pill border border-rule-strong px-5 py-2.5 text-tiny leading-none text-ink-80 transition-colors duration-200 hover:border-accent/50 hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
        <p className="text-meta text-ink-muted">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <p className="text-meta text-ink-muted">Built with AI · Designed in Figma</p>
      </footer>
    </Section>
  );
}
