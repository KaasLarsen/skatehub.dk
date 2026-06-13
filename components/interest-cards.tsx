import Link from "next/link";
import { SITE_INTERESTS } from "@/lib/content/guide-levels";

type Props = {
  /** Kompakt række på undersider; standard er fuldt grid på forsiden. */
  compact?: boolean;
};

/** Entry point: vælg skateboard, BMX, løbehjul, fingerboard eller forældre-sti. */
export function InterestCards({ compact = false }: Props) {
  return (
    <section aria-labelledby="interest-heading">
      <h2
        id="interest-heading"
        className={compact ? "text-xs font-bold uppercase tracking-widest text-[var(--lime)]" : "section-title"}
      >
        {compact ? "Hvad kører du?" : (
          <>
            Hvad kører <span className="text-[var(--lime)]">du?</span>
          </>
        )}
      </h2>
      {!compact ? (
        <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
          SkateHub dækker board, BMX, trick-løbehjul og fingerboard — vælg din sti, så vi viser det mest relevante indhold først.
        </p>
      ) : null}
      <ul className={`mt-4 grid gap-3 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
        {SITE_INTERESTS.map((item, i) => (
          <li key={item.sport}>
            <Link
              href={item.href}
              className={`sticker-card group block h-full ${i % 2 === 1 ? "sticker-card-alt" : ""}`}
            >
              <span className="text-2xl" aria-hidden>
                {item.emoji}
              </span>
              <span className="mt-2 block font-display text-lg uppercase tracking-wide text-[var(--text)] group-hover:text-[var(--lime)]">
                {item.label}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-[var(--text-muted)]">{item.tagline}</span>
              <span className="mt-3 inline-block text-xs uppercase tracking-wider text-[var(--text-dim)] group-hover:text-[var(--lime)]">
                Se guides →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
