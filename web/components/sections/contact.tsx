import { Display } from "@/components/ui/display";
import { LabelPill } from "@/components/ui/label-pill";
import { Section } from "@/components/ui/section";
import {
  MailIcon,
  PinIcon,
  SOCIAL_ICONS,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { profile } from "@/content/profile";

/**
 * Contact.
 *
 * Sits where the reference closes with its FAQ accordion — same position
 * and card rhythm, contact detail instead of Q&A. Each channel is marked
 * with its own icon so the row is scannable without reading the labels.
 */
export function Contact() {
  /** Digits only, which is what wa.me expects. */
  const whatsapp = profile.phone.replace(/\D/g, "");

  return (
    <Section id="contact" className="pb-16 rail:pb-16">
      <LabelPill tone="accent">Get in touch</LabelPill>

      <div className="mt-6">
        <Display text={"Got something\nto build?"} size="display" />
      </div>

      <div className="mt-14 grid gap-3 md:grid-cols-3">
        <ContactCard
          href={`mailto:${profile.email}`}
          icon={<MailIcon className="size-4" />}
          label="Email"
          value={profile.email}
          breakAll
        />

        <ContactCard
          href={`https://wa.me/${whatsapp}`}
          external
          icon={<WhatsAppIcon className="size-4" />}
          label="WhatsApp"
          value={profile.phone}
        />

        <ContactCard
          icon={<PinIcon className="size-4" />}
          label="Based in"
          value={profile.location}
        />
      </div>

      <div data-reveal="up" className="glass-solid mt-3 rounded-sm p-[1.776rem]">
        <p className="text-label font-bold uppercase leading-none text-ink-muted">
          Elsewhere
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {profile.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.label];
            return (
              <li key={social.label}>
                <a
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-2 rounded-pill border border-rule-strong px-5 py-2.5 text-tiny leading-none text-ink-80 transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                >
                  {Icon ? <Icon className="size-3.5" /> : null}
                  {social.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
        <p className="text-meta text-ink-muted">
          © 2026 {profile.name}. All rights reserved.
        </p>
        <p className="text-meta text-ink-muted">Designed and built in-house</p>
      </footer>
    </Section>
  );
}

function ContactCard({
  href,
  external,
  icon,
  label,
  value,
  breakAll,
}: {
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
  label: string;
  value: string;
  /** Long unbroken strings (an address) need to wrap mid-token. */
  breakAll?: boolean;
}) {
  const body = (
    <>
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-xs bg-subcard text-accent">
          {icon}
        </span>
        <p className="text-label font-bold uppercase leading-none text-ink-muted">
          {label}
        </p>
      </div>
      <p
        className={
          "mt-5 font-display text-sub font-medium text-ink" +
          (href ? " transition-colors group-hover:text-accent" : "") +
          (breakAll ? " break-all" : "")
        }
      >
        {value}
      </p>
    </>
  );

  const shared =
    "glass-solid min-w-0 rounded-sm p-[1.776rem] transition-colors duration-300";

  if (!href) {
    return (
      <div data-reveal="up" className={shared}>
        {body}
      </div>
    );
  }

  return (
    <a
      href={href}
      data-reveal="up"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group ${shared} hover:bg-inner`}
    >
      {body}
    </a>
  );
}
