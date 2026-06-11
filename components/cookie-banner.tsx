"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dispatchConsentChoice, getStoredConsent, setStoredConsent, type CookieConsentChoice } from "@/lib/cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(getStoredConsent() === null);
  }, []);

  const choose = (choice: CookieConsentChoice) => {
    setStoredConsent(choice);
    dispatchConsentChoice(choice);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t-2 border-[var(--lime)] bg-[var(--bg-elevated)] px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]"
      role="dialog"
      aria-label="Om cookies"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          Vi bruger cookies til statistik og annoncer, når det er aktiveret. Læs{" "}
          <Link href="/cookiepolitik" className="link-lime">
            cookiepolitikken
          </Link>{" "}
          og{" "}
          <Link href="/privatliv" className="link-lime">
            privatlivspolitikken
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="border-2 border-[var(--border-strong)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]"
          >
            Kun nødvendige
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="border-2 border-[var(--lime)] bg-[var(--lime)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0f0f0f] hover:bg-[#e8ff8a]"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
