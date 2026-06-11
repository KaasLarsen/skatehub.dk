"use client";

import { useCallback, useState } from "react";
import type { ProductHit, SearchMeta } from "@/lib/search/types";
import { ProductCard } from "@/components/product-card";

export type ProductSearchChip = { label: string; q: string; max?: number };

const QUICK_CHIPS: ProductSearchChip[] = [
  { label: "Skateboard", q: "skateboard complete" },
  { label: "Begynder board", q: "skateboard begynder", max: 800 },
  { label: "Longboard", q: "longboard cruiser" },
  { label: "BMX", q: "bmx" },
  { label: "Trick-løbehjul", q: "stunt scooter trick" },
  { label: "Skatehjelm", q: "skate hjelm helmet" },
  { label: "Beskyttelse", q: "knæbeskyttelse albuebeskyttelse" },
  { label: "Griptape", q: "griptape" },
  { label: "Under 500 kr", q: "skateboard", max: 500 },
];

type ApiResponse = { source: string; products: ProductHit[]; meta: SearchMeta };

type Props = {
  defaultQuery?: string;
  placement?: string;
  title?: string;
};

export function ProductSearch({
  defaultQuery = "",
  placement = "product-search",
  title = "Find gear hos vores partnere",
}: Props) {
  const [query, setQuery] = useState(defaultQuery);
  const [max, setMax] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [lastQuery, setLastQuery] = useState("");

  const search = useCallback(async (q: string, budgetMax: number | null) => {
    setLoading(true);
    setError(null);
    setLastQuery(q);
    try {
      const params = new URLSearchParams({ q });
      if (budgetMax != null) params.set("max", String(budgetMax));
      const r = await fetch(`/api/search?${params.toString()}`);
      if (!r.ok) throw new Error("Søgning fejlede");
      const json = (await r.json()) as ApiResponse;
      setData(json);
    } catch {
      setError("Kunne ikke hente produkter lige nu — prøv igen om lidt.");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

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

  return (
    <section className="mt-12 border-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 shadow-[4px_4px_0_0_var(--pink)]">
      <h2 className="font-display text-2xl uppercase tracking-wide text-[var(--text)] sm:text-3xl">{title}</h2>
      <p className="mt-2 text-sm text-[var(--text-muted)]">Søg på tværs af vores shop-partnere.</p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="sr-only">Søg efter gear</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Fx skateboard, BMX, hjelm, griptape…"
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

      {data && (
        <div className="mt-6 space-y-4">
          {total === 0 ? (
            <p className="text-sm text-[var(--text-muted)]">
              Ingen produkter matchede{lastQuery ? ` “${lastQuery}”` : ""} lige nu. Prøv fx “skateboard”, “BMX”
              eller “hjelm”.
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
              {data.products.map((p) => (
                <li key={`${p.merchant}-${p.url}`}>
                  <ProductCard product={p} placement={placement} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}
