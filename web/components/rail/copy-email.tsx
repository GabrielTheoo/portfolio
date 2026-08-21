"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Email row with copy-to-clipboard, as in the reference's rail.
 *
 * Falls back to a plain mailto if the Clipboard API is unavailable or
 * denied — the address stays selectable either way.
 */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear the pending reset if the component unmounts mid-timeout.
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked — hand the address to the mail client instead.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="shrink-0 rounded-sm bg-glass p-[0.552rem] backdrop-blur-xl">
      <button
        type="button"
        onClick={copy}
        className="group flex w-full items-center justify-between gap-2 rounded-xs bg-inner px-3 py-1.5 text-left transition-colors hover:bg-elevated"
      >
        <span className="truncate text-tiny text-ink-80 group-hover:text-ink">
          {copied ? "Copied to clipboard" : email}
        </span>

        <span aria-hidden className="shrink-0 text-ink-muted group-hover:text-accent">
          {copied ? (
            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V5a2 2 0 012-2h7a2 2 0 012 2v7a2 2 0 01-2 2h-2M5 9h7a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"
              />
            </svg>
          )}
        </span>
      </button>

      {/* Announce the copy without moving focus. */}
      <span aria-live="polite" className="sr-only">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </div>
  );
}
