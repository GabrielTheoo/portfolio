/**
 * Inline icon set.
 *
 * Kept inline rather than pulling an icon package for six glyphs: these are
 * the only ones the site uses, and inlining keeps them stylable by
 * `currentColor` with no runtime.
 */
type IconProps = { className?: string };

const BASE = "shrink-0";

export function InstagramIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      className={`${BASE} ${className}`}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.2" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${BASE} ${className}`}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11ZM9.5 9.5h3.8v1.6a4.2 4.2 0 0 1 3.7-1.9c2.7 0 4 1.7 4 4.9v6.4h-4v-5.8c0-1.5-.5-2.3-1.7-2.3-1.3 0-2 .9-2 2.3v5.8h-3.8v-11Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${BASE} ${className}`}
    >
      <path d="M12.04 2A9.9 9.9 0 0 0 3.6 17l-1.2 4.4 4.55-1.19A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.08l-.3-.18-2.7.71.72-2.63-.18-.3A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 4c-.2 0-.5.07-.72.33-.24.28-.83.87-.83 2.06 0 1.2.85 2.34.97 2.5.12.16 1.66 2.65 4.1 3.6 2.02.79 2.43.64 2.87.6.44-.04 1.42-.58 1.62-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28l-1.6-.78c-.21-.1-.37-.14-.52.08l-.6.87c-.11.16-.23.18-.44.08a6.6 6.6 0 0 1-1.93-1.2 7.3 7.3 0 0 1-1.34-1.68c-.1-.2-.01-.32.1-.44l.36-.43c.12-.14.16-.24.24-.4.08-.16.03-.3-.03-.42l-.72-1.75c-.14-.34-.29-.3-.44-.31l-.37-.01Z" />
    </svg>
  );
}

export function MailIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${BASE} ${className}`}
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.6" />
      <path d="m3.6 7 7.3 5.2a2 2 0 0 0 2.2 0L20.4 7" />
    </svg>
  );
}

export function PinIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${BASE} ${className}`}
    >
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.4" r="2.6" />
    </svg>
  );
}

export function GitHubIcon({ className = "size-3.5" }: IconProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${BASE} ${className}`}
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.73 1.02a9.5 9.5 0 0 1 4.97 0c1.9-1.29 2.73-1.02 2.73-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

/** Icon per social label, so content stays free of component references. */
export const SOCIAL_ICONS: Record<
  string,
  (props: IconProps) => React.ReactElement
> = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
};
