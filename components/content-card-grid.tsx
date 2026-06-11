import Link from "next/link";

type GuideCard = {
  slug: string;
  title: string;
  description: string;
  updated: string;
  tags?: string[];
  hrefPrefix?: string;
};

export function ContentCardGrid({ items, hrefPrefix = "/guides" }: { items: GuideCard[]; hrefPrefix?: string }) {
  if (items.length === 0) {
    return (
      <p className="mt-8 rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-8 text-center text-stone-600">
        Flere artikler kommer snart.
      </p>
    );
  }

  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.slug}>
          <Link
            href={`${hrefPrefix}/${item.slug}`}
            className="block h-full rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-stone-900">{item.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{item.description}</p>
            <p className="mt-4 text-xs text-stone-500">Opdateret {item.updated}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
