import Link from "next/link";
import { isDealSeason } from "@/lib/content/black-friday";

/** Vises nov–dec på forsiden — peger på Black Friday-siden. */
export function DealSeasonBanner() {
  if (!isDealSeason()) return null;

  const year = new Date().getFullYear();

  return (
    <div className="mb-8 border-2 border-[var(--pink)] bg-[color-mix(in_srgb,var(--pink)_12%,var(--bg-card))] px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
      <p className="text-sm text-[var(--text-muted)]">
        <span className="font-bold uppercase tracking-wider text-[var(--pink)]">Black Friday {year}</span>
        {" — "}
        Find skateboard, BMX og beskyttelse hos vores partnere med live priser og købsguides.
      </p>
      <Link
        href="/black-friday"
        className="mt-3 inline-block shrink-0 border-2 border-[var(--lime)] bg-[var(--lime)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--bg)] transition hover:bg-transparent hover:text-[var(--lime)] sm:mt-0"
      >
        Se tilbud →
      </Link>
    </div>
  );
}
