"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ProductHit } from "@/lib/search/types";
import { ProductCard } from "@/components/product-card";
import { gearPageHref } from "@/lib/content/guide-product-queries";
import { useProductSearch } from "@/lib/search/use-product-search";

export type ProductSearchChip = { label: string; q: string; max?: number };

const QUICK_CHIPS: ProductSearchChip[] = [
  { label: "Complete boards", q: "skateboard complete" },
  { label: "Begynder board", q: "skateboard begynder", max: 800 },
  { label: "Skateboard-hjul", q: "skateboard hjul" },
  { label: "Trucks", q: "skateboard trucks" },
  { label: "Griptape & deck", q: "skateboard deck griptape" },
  { label: "BMX", q: "bmx cykel" },
  { label: "Trick-løbehjul", q: "stunt scooter trick" },
  { label: "Skatehjelm", q: "skate hjelm helmet" },
  { label: "Beskyttelse", q: "knæbeskyttelse skate" },
  { label: "Under 500 kr", q: "skateboard", max: 500 },
];

type Props = {
  defaultQuery?: string;
  defaultMax?: number;
  placement?: string;
  title?: string;
  /** Hent produkter automatisk ved load (købsguides). */
  autoLoad?: boolean;
  moreHref?: string;
};

export function ProductSearch({
  defaultQuery = "",
  defaultMax,
  placement = "product-search",
  title = "Find gear hos vores partnere",
  autoLoad = false,
  moreHref,
}: Props) {
  const { query, setQuery, max, setMax, loading, error, data, lastQuery, search } = useProductSearch(
    defaultQuery,
    defaultMax ?? null,
  );
  const autoRan = useRef(false);

  useEffect(() => {
    if (!autoLoad || !defaultQuery.trim() || autoRan.current) return;
    autoRan.current = true;
    void search(defaultQuery, defaultMax ?? null);
  }, [autoLoad, defaultQuery, defaultMax, search]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const budgetMax = max.trim() ? parseInt(max, 10) : null;
    void search(query.trim(), Number.isFinite(budgetMax) ? budgetMax : null);
  };

  const runChip = (chip: ProductSearchChip) => {
    setQuery(chip.q);
    if (chip.max != null) setMax(String(chip.max));
    else setMax("");
    void search(chip.q, chip.max ?? null);
  };

  const total = data?.products.length ?? 0;
  const browseHref = moreHref ?? gearPageHref({ q: query || defaultQuery, max: defaultMax, title });

  return (
    <section
      id="gear"
      className="mt-12 border-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 shadow-[4px_4px_0_0_var(--pink)]"
    >
      <h2 className="font-display text-2xl uppercase tracking-wide text-[var(--text)] sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Søg på tværs af vores shop-partnere — billede, pris og link direkte til forhandleren.
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="sr-only">Søg efter gear</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Fx skateboard complete, BMX, hjelm…"
            className="w-full border-2 border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--lime)] focus:outline-none"
          />
        </label>
        <label className="sm:w-36">
          <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">
            Max pris
          </span>
          <input
            type="number"
            min={0}
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="kr"
            className="w-full border-2 border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] focus:border-[var(--lime)] focus:outline-none"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="border-2 border-[var(--lime)] bg-[var(--lime)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[var(--bg)] transition hover:bg-transparent hover:text-[var(--lime)] disabled:opacity-50"
        >
          {loading ? "Søger…" : "Søg"}
        </button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {QUICK_CHIPS.map((chip) => (
          <button
            key={chip.label}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => runChip(chip)}
            className="rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1.5 text-sm font-medium text-[var(--text-muted)] transition hover:border-[var(--lime)] hover:text-[var(--lime)]"
          >
            {chip.label}
            {chip.max != null ? <span className="text-[var(--text-dim)]"> · max {chip.max} kr</span> : null}
          </button>
        ))}
      </div>

      {error && <p className="mt-4 text-sm text-[var(--pink)]">{error}</p>}

      {loading && !data ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-72 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
          ))}
        </div>
      ) : null}

      {data && (
        <div className="mt-6 space-y-4">
          {total === 0 ? (
            <p className="text-sm text-[var(--text-muted)]">
              Ingen produkter matchede{lastQuery ? ` “${lastQuery}”` : ""} lige nu. Prøv en af kategorierne ovenfor.
            </p>
          ) : (
            <p className="text-sm text-[var(--text-muted)]">
              {data.meta.results_capped
                ? `${data.meta.matched_before_cap}+ produkter fundet — viser de ${total} bedste match.`
                : `${total} produkt${total === 1 ? "" : "er"} fundet.`}{" "}
              Tjek altid pris og lager hos forhandleren.
            </p>
          )}

          {total > 0 && (
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.products.map((p: ProductHit) => (
                <li key={`${p.merchant}-${p.url}`}>
                  <ProductCard product={p} placement={placement} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {autoLoad && total > 0 ? (
        <p className="mt-6 text-center text-sm text-[var(--text-dim)]">
          Vil du søge bredere?{" "}
          <Link href={browseHref} className="link-lime">
            Åbn fuld produktsøgning
          </Link>
        </p>
      ) : null}
    </section>
  );
}
