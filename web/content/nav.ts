/**
 * Navigation items.
 *
 * Lives here rather than in the rail component because both the server-
 * rendered hero and the client-side rail need it: exports from a
 * `"use client"` module cross the RSC boundary as client references, so a
 * server component importing this array from there receives a proxy, not
 * the data.
 */
export type NavItem = { label: string; id: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "top" },
  { label: "About me", id: "about" },
  { label: "Projects", id: "work" },
  { label: "What you get", id: "capabilities" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];
