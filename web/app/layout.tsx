import type { Metadata } from "next";
import { Inter_Tight, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

import { MotionProvider } from "@/components/motion-provider";
import { SideRail } from "@/components/rail/side-rail";
import { SvgFilters } from "@/components/ui/svg-filters";
import { profile } from "@/content/profile";

/** Display face. Closest free stand-in for the reference's licensed
 *  grotesk: tight, high-weight, holds up at 160px with negative tracking. */
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

/** Kept for italic accents in case-study pull quotes. */
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
      className={`${interTight.variable} ${manrope.variable} ${newsreader.variable} antialiased`}
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
