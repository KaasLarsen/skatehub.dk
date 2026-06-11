"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SkateparkMetaBadges } from "@/components/skatepark-meta";
import type { SkateparkFrontmatter } from "@/lib/content/skatepark-types";
import { formatDistanceKm, haversineKm } from "@/lib/geo/distance";
import { isValidDanishPostnr } from "@/lib/geo/postnr";

type SkateparkFinderProps = {
  parks: SkateparkFrontmatter[];
};

type PostnrResult = {
  postnr: string;
  navn: string;
  latitude: number;
  longitude: number;
};

type RankedPark = SkateparkFrontmatter & { distanceKm: number | null };

function rankParks(parks: SkateparkFrontmatter[], origin: PostnrResult | null): RankedPark[] {
  const ranked = parks.map((park) => {
    if (!origin || park.latitude == null || park.longitude == null) {
      return { ...park, distanceKm: null };
    }
    return {
      ...park,
      distanceKm: haversineKm(origin.latitude, origin.longitude, park.latitude, park.longitude),
    };
  });

  if (!origin) {
    return ranked.sort((a, b) => a.city.localeCompare(b.city, "da"));
  }

  return ranked.sort((a, b) => {
    if (a.distanceKm == null && b.distanceKm == null) return a.city.localeCompare(b.city, "da");
    if (a.distanceKm == null) return 1;
    if (b.distanceKm == null) return -1;
    return a.distanceKm - b.distanceKm;
  });
}

export function SkateparkFinder({ parks }: SkateparkFinderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [input, setInput] = useState("");
  const [active, setActive] = useState<PostnrResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const syncUrl = useCallback(
    (postnr: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (postnr) params.set("postnr", postnr);
      else params.delete("postnr");
      const qs = params.toString();
      router.replace(qs ? `/skateparker?${qs}` : "/skateparker", { scroll: false });
    },
    [router, searchParams]
  );

  const resolvePostnr = useCallback(
    async (raw: string, updateUrl = true) => {
      const code = raw.trim();
      setError(null);

      if (!code) {
        setActive(null);
        if (updateUrl) syncUrl(null);
        return;
      }

      if (!isValidDanishPostnr(code)) {
        setError("Indtast et gyldigt dansk postnummer (4 cifre).");
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/postnr/${code}`);
        if (!res.ok) {
          setActive(null);
          setError("Postnummeret blev ikke fundet — tjek og prøv igen.");
          return;
        }
        const data = (await res.json()) as PostnrResult;
        setActive(data);
        setInput(data.postnr);
        if (updateUrl) syncUrl(data.postnr);
      } catch {
        setError("Kunne ikke slå postnummeret op lige nu. Prøv igen om lidt.");
      } finally {
        setLoading(false);
      }
    },
    [syncUrl]
  );

  useEffect(() => {
    const param = searchParams.get("postnr") ?? "";
    setInput(param);

    if (!param || !isValidDanishPostnr(param)) {
      setActive(null);
      setHydrated(true);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`/api/postnr/${param}`)
      .then(async (res) => {
        if (cancelled) return;
        if (!res.ok) {
          setActive(null);
          setError("Postnummeret blev ikke fundet — tjek og prøv igen.");
          return;
        }
        const data = (await res.json()) as PostnrResult;
        setActive(data);
        setInput(data.postnr);
      })
      .catch(() => {
        if (!cancelled) setError("Kunne ikke slå postnummeret op lige nu. Prøv igen om lidt.");
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
          setHydrated(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  const ranked = useMemo(() => rankParks(parks, active), [parks, active]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    void resolvePostnr(input);
  };

  if (!hydrated) {
    return (
      <section className="mt-12">
        <div className="h-24 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
        <div className="mt-6 h-64 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
      </section>
    );
  }

  return (
    <section className="mt-12" aria-labelledby="skatepark-finder-heading">
      <h2 id="skatepark-finder-heading" className="section-title">
        Find park <span className="text-[var(--cyan)]">nær dig</span>
      </h2>
      <p className="mt-2 text-sm text-[var(--text-muted)]">
        Indtast dit postnummer — vi sorterer parkerne efter afstand (luftlinje).
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block flex-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">Postnummer</span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={4}
            value={input}
            onChange={(e) => setInput(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="fx 8000"
            className="mt-2 w-full border-2 border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--lime)] focus:outline-none"
          />
        </label>
        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading || input.length !== 4}
            className="border-2 border-[var(--lime)] bg-[color-mix(in_srgb,var(--lime)_12%,transparent)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--lime)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "Slår op…" : "Sorter"}
          </button>
          {active ? (
            <button
              type="button"
              onClick={() => {
                setInput("");
                setActive(null);
                setError(null);
                syncUrl(null);
              }}
              className="border-2 border-[var(--border-strong)] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] transition hover:border-[var(--border)] hover:text-[var(--text)]"
            >
              Nulstil
            </button>
          ) : null}
        </div>
      </form>

      {error ? <p className="mt-3 text-sm text-[var(--pink)]">{error}</p> : null}
      {active ? (
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          Sorteret efter afstand fra <strong className="text-[var(--text)]">{active.postnr} {active.navn}</strong>.
        </p>
      ) : null}

      <h3 className="mt-10 text-xs font-bold uppercase tracking-widest text-[var(--lime)]">
        {active ? "Nærmeste parker" : "Alle parker"}
      </h3>
      <ul className="mt-6 space-y-4">
        {ranked.map((park, i) => (
          <li key={park.slug}>
            <Link
              href={`/skateparker/${park.slug}`}
              className={`sticker-card block ${i % 2 === 1 ? "sticker-card-alt" : ""}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl uppercase tracking-wide text-[var(--text)]">{park.title}</h3>
                    {park.distanceKm != null ? (
                      <span className="badge-neon badge-cyan shrink-0">{formatDistanceKm(park.distanceKm)}</span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-dim)]">
                    {park.address} · {park.city} · {park.region}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--text-muted)]">{park.description}</p>
                </div>
                <SkateparkMetaBadges features={park.features} difficulty={park.difficulty} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
