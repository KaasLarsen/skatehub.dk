"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { gearPageHref } from "@/lib/content/guide-product-queries";
import { useAutoProductSearch } from "@/lib/search/use-product-search";

type ProductPicksProps = {
  query: string;
  max?: number;
  limit?: number;
  title?: string;
  placement?: string;
};

export function ProductPicks({
  query,
  max,
  limit = 3,
  title = "Eksempler du kan købe nu",
  placement = "guide-picks",
}: ProductPicksProps) {
  const { loading, error, data, search } = useAutoProductSearch(query, max ?? null);
  const products = (data?.products ?? []).slice(0, limit);
  const moreHref = gearPageHref({ q: query, max, title });

  return (
    <aside className="not-prose my-10 border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-5 shadow-[3px_3px_0_0_var(--cyan)]">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Partner-produkter</p>
          <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-[var(--text)]">{title}</h3>
        </div>
        <Link href={moreHref} className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--lime)]">
          Se flere →
        </Link>
      </div>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Live priser fra vores partnere — klik for at tjekke lager hos shoppen.
      </p>

      {loading ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[...Array(limit)].map((_, i) => (
            <div key={i} className="h-64 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-elevated)]" />
          ))}
        </div>
      ) : null}

      {error ? (
        <p className="mt-4 text-sm text-[var(--pink)]">
          {error}{" "}
          <button type="button" onClick={() => void search(query, max ?? null)} className="underline hover:text-[var(--lime)]">
            Prøv igen
          </button>
        </p>
      ) : null}

      {!loading && !error && products.length === 0 && data ? (
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          Ingen produkter lige nu —{" "}
          <Link href={moreHref} className="link-lime">
            søg bredere
          </Link>
          .
        </p>
      ) : null}

      {products.length > 0 ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <li key={`${p.merchant}-${p.url}`}>
              <ProductCard product={p} placement={placement} priority={i < 3} />
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
