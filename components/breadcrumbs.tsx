type BreadcrumbItem = { href: string; label: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Brødkrumme" className="text-sm text-stone-600">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden className="text-stone-400">/</span> : null}
            {i === items.length - 1 ? (
              <span className="font-medium text-stone-900">{item.label}</span>
            ) : (
              <a href={item.href} className="hover:text-orange-900">
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
