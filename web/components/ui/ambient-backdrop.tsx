/**
 * Ambient page backdrop.
 *
 * Carries the hero's atmosphere down the rest of the page so the site reads
 * as one environment rather than a shader hero bolted to a black page.
 *
 * Fixed and behind everything, with a fine grain over the gradients — large
 * flat washes band visibly on 8-bit displays, and the noise breaks it up.
 * Sections that want to feel harder sit on an opaque surface and simply
 * cover this.
 */
export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-page">
      <div className="ambient absolute inset-0" />

      {/* Grain. An inline SVG turbulence keeps it a few hundred bytes and
          avoids a network request for a tiling PNG. */}
      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
