/**
 * Shared SVG filter defs.
 *
 * Rendered once in the root layout: the header's gooey button exists on every
 * route, so the filters cannot live inside the hero-only shader component.
 */
export function SvgFilters() {
  return (
    <svg aria-hidden className="absolute h-0 w-0" focusable="false">
      <defs>
        {/* Frosted-glass distortion for the hero's status pill. */}
        <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0.05
                    0 1 0 0 0.02
                    0 0 1 0 0.02
                    0 0 0 0.9 0"
            result="tint"
          />
        </filter>

        {/* Merges the button pair into one blob as the arrow slides out. */}
        <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
