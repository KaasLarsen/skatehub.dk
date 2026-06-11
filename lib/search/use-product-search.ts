"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductHit, SearchMeta } from "@/lib/search/types";

type ApiResponse = { source: string; products: ProductHit[]; meta: SearchMeta };

export function useProductSearch(initialQuery = "", initialMax: number | null = null) {
  const [query, setQuery] = useState(initialQuery);
  const [max, setMax] = useState(initialMax != null ? String(initialMax) : "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [lastQuery, setLastQuery] = useState("");

  const search = useCallback(async (q: string, budgetMax: number | null) => {
    const trimmed = q.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(null);
    setLastQuery(trimmed);
    try {
      const params = new URLSearchParams({ q: trimmed });
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

  return {
    query,
    setQuery,
    max,
    setMax,
    loading,
    error,
    data,
    lastQuery,
    search,
  };
}

/** Kør søgning én gang ved mount når query er sat. */
export function useAutoProductSearch(query: string, budgetMax: number | null, enabled = true) {
  const { search, ...rest } = useProductSearch(query, budgetMax);
  const ran = useRef(false);

  useEffect(() => {
    if (!enabled || !query.trim() || ran.current) return;
    ran.current = true;
    void search(query, budgetMax);
  }, [enabled, query, budgetMax, search]);

  return { search, ...rest };
}
