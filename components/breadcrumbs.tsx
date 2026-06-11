import Link from "next/link";

type BreadcrumbItem = { href: string; label: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Brødkrumme" className="text-sm text-[var(--text-dim)]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? (
              <span aria-hidden className="text-[var(--pink)]">
                /
              </span>
            ) : null}
            {i === items.length - 1 ? (
              <span className="font-medium text-[var(--text)]">{item.label}</span>
            ) : (
              <Link href={item.href} className="transition hover:text-[var(--lime)]">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
