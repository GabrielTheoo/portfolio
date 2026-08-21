/**
 * Client-logo marquee in the rail.
 *
 * Two identical tracks each translating -100% over 25s, matching the
 * reference's loop: as the first leaves, the second is already in place,
 * so the seam is invisible. Pure CSS — no rAF, and it pauses under
 * prefers-reduced-motion (see globals.css).
 */
/** Real client work only. The Jordan project was a self-directed case
 *  study, so it is not listed here even though it is in the portfolio. */
const CLIENTS = [
  "Steel Arte",
  "Motorola",
  "Life Thrive",
  "Dream Companies",
  "Privacy",
  "Earned Media",
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="marquee-track flex shrink-0 items-center gap-[1.112rem] pr-[1.112rem]"
    >
      {CLIENTS.map((client) => (
        <li
          key={client}
          className="whitespace-nowrap font-display text-meta font-medium uppercase tracking-tight text-ink-muted"
        >
          {client}
        </li>
      ))}
    </ul>
  );
}

export function ClientMarquee() {
  return (
    <div data-rail-card className="glass shrink-0 overflow-hidden rounded-sm py-[0.7rem] pl-[0.888rem]">
      <p className="sr-only">Clients: {CLIENTS.join(", ")}</p>
      <div className="marquee-mask flex">
        <Track ariaHidden />
        <Track ariaHidden />
      </div>
    </div>
  );
}
