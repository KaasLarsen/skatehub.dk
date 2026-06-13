"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ContentCardGrid } from "@/components/content-card-grid";
import type { GuideFrontmatter } from "@/lib/content/guide-types";
import {
  GUIDE_KIND_LABELS,
  GUIDE_LEVEL_LABELS,
  GUIDE_LEVEL_STORAGE_KEY,
  GUIDE_SPORT_LABELS,
  GUIDE_SPORT_STORAGE_KEY,
  SITE_INTERESTS,
  filterGuides,
  getFeaturedGuides,
  isGuideLevel,
  isGuideSport,
  type GuideKind,
  type GuideLevel,
  type GuideSport,
} from "@/lib/content/guide-levels";

type GuideExplorerProps = {
  guides: GuideFrontmatter[];
};

const SPORTS: (GuideSport | "alle")[] = ["alle", "skateboard", "bmx", "loebehjul", "fingerboard", "beskyttelse", "generelt"];
const KINDS: (GuideKind | "alle")[] = ["alle", "koeb", "tricks", "vedligeholdelse", "viden"];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
        active
          ? "border-[var(--lime)] bg-[color-mix(in_srgb,var(--lime)_15%,transparent)] text-[var(--lime)]"
          : "border-[var(--border-strong)] text-[var(--text-muted)] hover:border-[var(--border)] hover:text-[var(--text)]"
      }`}
    >
      {children}
    </button>
  );
}

export function GuideExplorer({ guides }: GuideExplorerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [level, setLevel] = useState<GuideLevel>("ny");
  const [query, setQuery] = useState("");
  const [sport, setSport] = useState<GuideSport | "alle">("alle");
  const [kind, setKind] = useState<GuideKind | "alle">("alle");
  const [foraeldreOnly, setForaeldreOnly] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const activeInterest = foraeldreOnly ? "foraeldre" : sport === "alle" ? null : sport;

  const syncUrl = useCallback(
    (next: {
      level: GuideLevel;
      query: string;
      sport: GuideSport | "alle";
      kind: GuideKind | "alle";
      foraeldreOnly: boolean;
    }) => {
      const params = new URLSearchParams();
      params.set("niveau", next.level);
      if (next.query.trim()) params.set("q", next.query.trim());
      if (next.sport !== "alle") params.set("sport", next.sport);
      if (next.kind !== "alle") params.set("type", next.kind);
      if (next.foraeldreOnly) params.set("foraeldre", "1");
      const qs = params.toString();
      router.replace(qs ? `/guides?${qs}` : "/guides", { scroll: false });
    },
    [router]
  );

  useEffect(() => {
    const paramLevel = searchParams.get("niveau");
    const stored = localStorage.getItem(GUIDE_LEVEL_STORAGE_KEY);
    const initialLevel = isGuideLevel(paramLevel)
      ? paramLevel
      : isGuideLevel(stored)
        ? stored
        : "ny";

    setLevel(initialLevel);
    setQuery(searchParams.get("q") ?? "");
    const paramSport = searchParams.get("sport");
    const initialSport =
      paramSport && isGuideSport(paramSport)
        ? paramSport
        : isGuideSport(localStorage.getItem(GUIDE_SPORT_STORAGE_KEY))
          ? (localStorage.getItem(GUIDE_SPORT_STORAGE_KEY) as GuideSport)
          : "alle";
    setSport(initialSport);
    if (initialSport !== "alle") localStorage.setItem(GUIDE_SPORT_STORAGE_KEY, initialSport);
    const paramKind = searchParams.get("type");
    setKind(paramKind && paramKind in GUIDE_KIND_LABELS ? (paramKind as GuideKind) : "alle");
    setForaeldreOnly(searchParams.get("foraeldre") === "1");
    setHydrated(true);
  }, [searchParams]);

  const pickSport = (next: GuideSport | "alle") => {
    setSport(next);
    setForaeldreOnly(false);
    if (next === "alle") localStorage.removeItem(GUIDE_SPORT_STORAGE_KEY);
    else localStorage.setItem(GUIDE_SPORT_STORAGE_KEY, next);
    syncUrl({ level, query, sport: next, kind, foraeldreOnly: false });
  };

  const pickInterest = (interest: (typeof SITE_INTERESTS)[number]["sport"]) => {
    if (interest === "foraeldre") {
      setForaeldreOnly(true);
      setSport("alle");
      syncUrl({ level, query, sport: "alle", kind, foraeldreOnly: true });
      return;
    }
    pickSport(interest);
  };

  const pickLevel = (next: GuideLevel) => {
    setLevel(next);
    localStorage.setItem(GUIDE_LEVEL_STORAGE_KEY, next);
    syncUrl({ level: next, query, sport, kind, foraeldreOnly });
  };

  const featured = useMemo(
    () => getFeaturedGuides(guides, level, sport, foraeldreOnly),
    [guides, level, sport, foraeldreOnly],
  );
  const featuredSlugs = useMemo(() => new Set(featured.map((g) => g.slug)), [featured]);

  const filtered = useMemo(
    () => filterGuides(guides, { level, query, sport, kind, foraeldreOnly }),
    [guides, level, query, sport, kind, foraeldreOnly]
  );

  const hasActiveFilters = query.trim() !== "" || sport !== "alle" || kind !== "alle" || foraeldreOnly;

  const listGuides = useMemo(() => {
    if (hasActiveFilters) return filtered;
    return filtered.filter((g) => !featuredSlugs.has(g.slug));
  }, [filtered, featuredSlugs, hasActiveFilters]);

  const updateFilters = (patch: Partial<{ query: string; sport: GuideSport | "alle"; kind: GuideKind | "alle"; foraeldreOnly: boolean }>) => {
    const next = {
      level,
      query: patch.query ?? query,
      sport: patch.sport ?? sport,
      kind: patch.kind ?? kind,
      foraeldreOnly: patch.foraeldreOnly ?? foraeldreOnly,
    };
    if (patch.query !== undefined) setQuery(patch.query);
    if (patch.sport !== undefined) {
      setSport(patch.sport);
      if (patch.sport === "alle") localStorage.removeItem(GUIDE_SPORT_STORAGE_KEY);
      else localStorage.setItem(GUIDE_SPORT_STORAGE_KEY, patch.sport);
    }
    if (patch.kind !== undefined) setKind(patch.kind);
    if (patch.foraeldreOnly !== undefined) setForaeldreOnly(patch.foraeldreOnly);
    syncUrl(next);
  };

  const featuredLabel = foraeldreOnly
    ? "forældre"
    : sport !== "alle"
      ? GUIDE_SPORT_LABELS[sport].toLowerCase()
      : GUIDE_LEVEL_LABELS[level].label.toLowerCase();

  if (!hydrated) {
    return <div className="mt-10 h-48 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />;
  }

  return (
    <div className="mt-10 space-y-10">
      {/* Interesse-vælger */}
      <section aria-labelledby="guide-interest-heading">
        <h2 id="guide-interest-heading" className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">
          Hvad kører du?
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SITE_INTERESTS.map((item) => {
            const active = activeInterest === item.sport;
            return (
              <li key={item.sport}>
                <button
                  type="button"
                  onClick={() => pickInterest(item.sport)}
                  className={`sticker-card w-full text-left ${active ? "border-[var(--lime)]" : ""}`}
                  aria-pressed={active}
                >
                  <span className="text-2xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <span className="mt-2 block font-display text-lg uppercase tracking-wide text-[var(--text)]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[var(--text-muted)]">{item.tagline}</span>
                  {active ? (
                    <span className="badge-neon mt-3">Dit valg</span>
                  ) : (
                    <span className="mt-3 inline-block text-xs uppercase tracking-wider text-[var(--text-dim)]">
                      Vælg →
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
        {sport !== "alle" || foraeldreOnly ? (
          <button
            type="button"
            onClick={() => {
              setSport("alle");
              setForaeldreOnly(false);
              localStorage.removeItem(GUIDE_SPORT_STORAGE_KEY);
              syncUrl({ level, query, sport: "alle", kind, foraeldreOnly: false });
            }}
            className="mt-3 text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] hover:text-[var(--lime)]"
          >
            Vis alle interesser
          </button>
        ) : null}
      </section>

      {/* Niveau-vælger */}
      <section aria-labelledby="guide-level-heading">
        <h2 id="guide-level-heading" className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">
          Hvad er dit niveau?
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {(Object.keys(GUIDE_LEVEL_LABELS) as GuideLevel[]).map((key) => {
            const item = GUIDE_LEVEL_LABELS[key];
            const active = level === key;
            return (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => pickLevel(key)}
                  className={`sticker-card w-full text-left ${active ? "border-[var(--lime)]" : ""}`}
                  aria-pressed={active}
                >
                  <span className="text-2xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <span className="mt-2 block font-display text-xl uppercase tracking-wide text-[var(--text)]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-[var(--text-muted)]">{item.tagline}</span>
                  {active ? (
                    <span className="badge-neon mt-3">Dit valg</span>
                  ) : (
                    <span className="mt-3 inline-block text-xs uppercase tracking-wider text-[var(--text-dim)]">
                      Vælg →
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Anbefalet */}
      {!hasActiveFilters ? (
        <section aria-labelledby="featured-guides-heading">
          <div className="flex items-end justify-between gap-4 border-b-2 border-[var(--border)] pb-4">
            <div>
              <h2 id="featured-guides-heading" className="section-title">
                Anbefalet til <span className="text-[var(--pink)]">{featuredLabel}</span>
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {featured.length} kuraterede guides — skift interesse eller niveau når som helst.
              </p>
            </div>
          </div>
          <ContentCardGrid items={featured} />
        </section>
      ) : null}

      {/* Søg og filtre */}
      <section aria-labelledby="guide-search-heading">
        <h2 id="guide-search-heading" className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">
          Søg og filtrér
        </h2>
        <div className="mt-4 space-y-4">
          <label className="block">
            <span className="sr-only">Søg i guides</span>
            <input
              type="search"
              value={query}
              onChange={(e) => updateFilters({ query: e.target.value })}
              placeholder="Søg fx ollie, BMX, hjelm, pris…"
              className="w-full border-2 border-[var(--border-strong)] bg-[var(--bg-card)] px-4 py-3 text-[var(--text)] placeholder:text-[var(--text-dim)] focus:border-[var(--lime)] focus:outline-none"
            />
          </label>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">Sport</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SPORTS.map((s) => (
                <Chip key={s} active={sport === s} onClick={() => updateFilters({ sport: s })}>
                  {s === "alle" ? "Alle" : GUIDE_SPORT_LABELS[s]}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">Type</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {KINDS.map((k) => (
                <Chip key={k} active={kind === k} onClick={() => updateFilters({ kind: k })}>
                  {k === "alle" ? "Alle" : GUIDE_KIND_LABELS[k]}
                </Chip>
              ))}
              <Chip active={foraeldreOnly} onClick={() => updateFilters({ foraeldreOnly: !foraeldreOnly })}>
                Forældre
              </Chip>
            </div>
          </div>

          {hasActiveFilters ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSport("alle");
                setKind("alle");
                setForaeldreOnly(false);
                syncUrl({ level, query: "", sport: "alle", kind: "alle", foraeldreOnly: false });
              }}
              className="text-xs font-bold uppercase tracking-wider text-[var(--pink)] hover:text-[var(--lime)]"
            >
              Nulstil filtre
            </button>
          ) : null}
        </div>
      </section>

      {/* Flere / filtrerede resultater */}
      {listGuides.length > 0 || hasActiveFilters ? (
      <section aria-labelledby="all-guides-heading">
        <div className="flex items-end justify-between gap-4 border-b-2 border-[var(--border)] pb-4">
          <div>
            <h2 id="all-guides-heading" className="section-title">
              {hasActiveFilters ? (
                <>
                  Resultater <span className="text-[var(--cyan)]">({listGuides.length})</span>
                </>
              ) : listGuides.length > 0 ? (
                <>Flere guides</>
              ) : (
                <>
                  Alle guides <span className="text-[var(--cyan)]">for {GUIDE_LEVEL_LABELS[level].label.toLowerCase()}</span>
                </>
              )}
            </h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {hasActiveFilters
                ? `${listGuides.length} guide${listGuides.length !== 1 ? "s" : ""} matcher dit niveau og dine filtre.`
                : listGuides.length > 0
                  ? `${listGuides.length} yderligere guide${listGuides.length !== 1 ? "s" : ""} på dit niveau.`
                  : `${filtered.length} guide${filtered.length !== 1 ? "s" : ""} på dit niveau.`}
            </p>
          </div>
        </div>
        <ContentCardGrid items={listGuides} />
      </section>
      ) : null}
    </div>
  );
}
