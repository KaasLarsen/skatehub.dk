"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ProductSearch } from "@/components/product-search";

export function KoebsguidesProductSearch() {
  const searchParams = useSearchParams();
  const synced = useRef(false);

  const q = searchParams.get("q") ?? "";
  const maxParam = searchParams.get("max");
  const max = maxParam ? parseInt(maxParam, 10) : undefined;

  useEffect(() => {
    if (synced.current || !q) return;
    synced.current = true;
    document.getElementById("gear")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [q]);

  return (
    <ProductSearch
      placement="koebsguides-hub"
      defaultQuery={q}
      defaultMax={Number.isFinite(max) ? max : undefined}
      autoLoad={Boolean(q)}
      title={q ? "Produkter til din søgning" : "Find gear hos vores partnere"}
    />
  );
}
