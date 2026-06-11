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
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-stone-200 bg-white/95 px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm"
      role="dialog"
      aria-label="Om cookies"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-sm leading-relaxed text-stone-700">
          Vi bruger cookies til statistik og annoncer, når det er aktiveret. Læs mere i{" "}
          <Link href="/cookiepolitik" className="font-medium text-orange-900 underline underline-offset-2">
            cookiepolitikken
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose("necessary")}
            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700"
          >
            Kun nødvendige
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
