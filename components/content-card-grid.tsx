import Link from "next/link";

type GuideCard = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  tags?: string[];
  hrefPrefix?: string;
};

export function ContentCardGrid({
  items,
  hrefPrefix = "/guides",
  altCards = false,
}: {
  items: GuideCard[];
  hrefPrefix?: string;
  altCards?: boolean;
}) {
  if (items.length === 0) {
    return (
      <p className="mt-8 border-2 border-dashed border-[var(--border)] bg-[var(--bg-card)] px-4 py-8 text-center text-[var(--text-muted)]">
        Flere artikler kommer snart — stay tuned.
      </p>
    );
  }

  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.slug}>
          <Link
            href={`${hrefPrefix}/${item.slug}`}
            className={`sticker-card group ${altCards || i % 2 === 1 ? "sticker-card-alt" : ""}`}
          >
            {item.tags?.[0] ? <span className="badge-neon">{item.tags[0]}</span> : null}
            <h2 className="mt-2 font-display text-xl uppercase leading-tight tracking-wide text-[var(--text)] group-hover:text-[var(--lime)]">
              {item.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
            <p className="mt-4 text-xs uppercase tracking-wider text-[var(--text-dim)]">Opdateret {item.updated}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
