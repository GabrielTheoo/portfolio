import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";

/**
 * Contact.
 *
 * Sits where the reference puts its FAQ accordion — same closing position and
 * card rhythm, but the content is contact detail rather than Q&A.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface-lowest px-6 pb-16 pt-24 md:px-10 md:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get in touch"
          heading={"Let's talk about\nwhat you're building"}
          intro="Available for select projects and collaborations. The fastest way to reach me is email."
        />

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="group rounded-2xl bg-surface-container p-8 transition-colors duration-300 hover:bg-surface-high"
          >
            <p className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
              Email
            </p>
            <p className="mt-4 break-words font-headline text-lg leading-tight text-on-surface transition-colors group-hover:text-primary">
              {profile.email}
            </p>
          </a>

          <a
            href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            className="group rounded-2xl bg-surface-container p-8 transition-colors duration-300 hover:bg-surface-high"
          >
            <p className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
              Phone
            </p>
            <p className="mt-4 font-headline text-lg leading-tight text-on-surface transition-colors group-hover:text-primary">
              {profile.phone}
            </p>
          </a>

          <div className="rounded-2xl bg-surface-container p-8">
            <p className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
              Based in
            </p>
            <p className="mt-4 font-headline text-lg leading-tight text-on-surface">
              {profile.location}
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-surface-container p-8">
          <p className="text-[0.7rem] font-light uppercase tracking-[0.14em] text-outline">
            Elsewhere
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex rounded-full border border-white/10 px-5 py-2.5 text-xs font-light text-on-surface-variant transition-colors duration-200 hover:border-primary/50 hover:text-primary"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="text-xs font-light text-outline">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-xs font-light text-outline">
            Built with AI · Designed in Figma
          </p>
        </footer>
      </div>
    </section>
  );
}
