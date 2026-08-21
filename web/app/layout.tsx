import type { Metadata } from "next";
import { Instrument_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";

import { MotionProvider } from "@/components/motion-provider";
import { SideRail } from "@/components/rail/side-rail";
import { SvgFilters } from "@/components/ui/svg-filters";
import { profile } from "@/content/profile";

/**
 * Type pairing, chosen against the reference rather than the old identity.
 *
 * The reference sets display in a tight grotesk at up to 160px with -0.02em
 * tracking and body in a neutral one — a serif cannot carry that. Inter
 * Tight holds the display sizes; Instrument Sans is the closer neutral for
 * body than a geometric face would be. Both are free; the reference's own
 * Tr 3 A and PP Neue Montreal are commercial licences.
 */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.shortName} | ${profile.role}`,
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSans.variable} antialiased`}
    >
      <body>
        <SvgFilters />
        <SideRail />
        <MotionProvider />
        <main>{children}</main>
      </body>
    </html>
  );
}
