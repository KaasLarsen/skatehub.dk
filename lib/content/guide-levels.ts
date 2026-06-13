import type { GuideFrontmatter } from "@/lib/content/guide-types";

export type GuideLevel = "ny" | "begynder" | "ovet";

export type GuideSport = "skateboard" | "bmx" | "loebehjul" | "beskyttelse" | "generelt";

export type GuideKind = "koeb" | "tricks" | "vedligeholdelse" | "viden";

export type GuideCatalogMeta = {
  levels: GuideLevel[];
  sports: GuideSport[];
  kinds: GuideKind[];
  foraeldre?: boolean;
};

export const GUIDE_LEVEL_LABELS: Record<
  GuideLevel,
  { label: string; tagline: string; emoji: string }
> = {
  ny: {
    label: "Helt ny",
    tagline: "Skal købe gear eller er forælder — start her",
    emoji: "🛒",
  },
  begynder: {
    label: "Begynder",
    tagline: "Har udstyr — vil lære grundlæggende",
    emoji: "🛹",
  },
  ovet: {
    label: "Øvet",
    tagline: "Kører regelmæssigt — tricks og opgraderinger",
    emoji: "🔥",
  },
};

export const GUIDE_SPORT_LABELS: Record<GuideSport, string> = {
  skateboard: "Skateboard",
  bmx: "BMX",
  loebehjul: "Løbehjul",
  beskyttelse: "Beskyttelse",
  generelt: "Generelt",
};

export const GUIDE_KIND_LABELS: Record<GuideKind, string> = {
  koeb: "Køb",
  tricks: "Tricks",
  vedligeholdelse: "Vedligeholdelse",
  viden: "Viden",
};

/** Primære interesser — vælges på forsiden og /guides. */
export const SITE_INTERESTS = [
  {
    sport: "skateboard" as const,
    label: "Skateboard",
    tagline: "Board, tricks, park og reservedele",
    emoji: "🛹",
    href: "/guides?sport=skateboard",
  },
  {
    sport: "bmx" as const,
    label: "BMX",
    tagline: "Cykel, bunny hop og skateparker",
    emoji: "🚲",
    href: "/guides?sport=bmx",
  },
  {
    sport: "loebehjul" as const,
    label: "Løbehjul",
    tagline: "Trick-scooter og stunt",
    emoji: "🛴",
    href: "/guides?sport=loebehjul",
  },
  {
    sport: "foraeldre" as const,
    label: "Forældre",
    tagline: "Skal købe til barnet? Start her",
    emoji: "👪",
    href: "/guides?foraeldre=1",
  },
] as const;

export type SiteInterest = (typeof SITE_INTERESTS)[number]["sport"];

/** Kuraterede top-forslag pr. niveau (rækkefølge = prioritet). */
export const FEATURED_BY_LEVEL: Record<GuideLevel, string[]> = {
  ny: [
    "bedste-skateboard-til-boern",
    "skateboard-vs-bmx-til-boern",
    "hvad-koster-det-at-starte-paa-skateboard",
    "hvad-koster-det-at-starte-paa-bmx",
    "bedste-skate-sko-til-begyndere",
    "skateboard-stoerrelsesguide",
    "complete-vs-custom-skateboard",
    "stunt-scooter-vs-loebehjul",
    "bedste-skatehjelm",
    "bedste-beskyttelsesaet-boern",
    "er-skateboard-farligt-for-boern",
    "er-bmx-farligt-for-boern",
    "bmx-vs-almindelig-cykel",
    "bedste-skateboard-til-begyndere",
    "skatepark-etikette-danmark",
  ],
  begynder: [
    "saadan-skubber-du-paa-skateboard",
    "bedste-skateboard-til-begyndere",
    "hvordan-laerer-man-ollie",
    "saadan-dropper-du-ind-i-en-skatepark",
    "saadan-koerer-du-fakie",
    "indendoers-skatehaller-danmark",
    "hvornaar-skifter-du-deck-og-griptape",
    "shove-it-guide-begyndere",
    "manual-guide-begyndere",
    "vedligeholdelse-af-skateboard",
    "bmx-tricks-for-begyndere",
    "vedligeholdelse-af-bmx",
    "hvordan-laver-man-bunny-hop-bmx",
    "skateboard-ordliste",
  ],
  ovet: [
    "180-ollie-guide-begyndere",
    "varial-kickflip-guide",
    "kickflip-guide-begyndere",
    "bedste-skateboard-trucks",
    "bedste-skateboard-hjul",
    "saadan-skifter-du-kuglelejer",
    "bedste-bmx-cykel",
    "bedste-griptape-skateboard",
    "bedste-skateboard-deck",
  ],
};

const CATALOG: Record<string, GuideCatalogMeta> = {
  "bedste-skateboard-til-boern": {
    levels: ["ny"],
    sports: ["skateboard"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "hvad-koster-det-at-starte-paa-skateboard": {
    levels: ["ny"],
    sports: ["skateboard"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "stunt-scooter-vs-loebehjul": {
    levels: ["ny"],
    sports: ["loebehjul"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-skatehjelm": {
    levels: ["ny", "begynder"],
    sports: ["beskyttelse"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-knaebeskyttere-skate": {
    levels: ["ny", "begynder"],
    sports: ["beskyttelse"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-skateboard-til-begyndere": {
    levels: ["ny", "begynder"],
    sports: ["skateboard"],
    kinds: ["koeb"],
  },
  "bedste-bmx-til-boern": {
    levels: ["ny"],
    sports: ["bmx"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-trick-loebehjul": {
    levels: ["ny", "begynder"],
    sports: ["loebehjul"],
    kinds: ["koeb"],
  },
  "bedste-longboard-til-begyndere": {
    levels: ["ny", "begynder"],
    sports: ["skateboard"],
    kinds: ["koeb"],
  },
  "skatepark-etikette-danmark": {
    levels: ["ny", "begynder"],
    sports: ["generelt"],
    kinds: ["viden"],
  },
  "bedste-skate-sko-til-begyndere": {
    levels: ["ny", "begynder"],
    sports: ["skateboard"],
    kinds: ["koeb"],
  },
  "complete-vs-custom-skateboard": {
    levels: ["ny", "begynder"],
    sports: ["skateboard"],
    kinds: ["koeb"],
  },
  "saadan-skubber-du-paa-skateboard": {
    levels: ["ny", "begynder"],
    sports: ["skateboard"],
    kinds: ["tricks", "viden"],
  },
  "indendoers-skatehaller-danmark": {
    levels: ["ny", "begynder"],
    sports: ["generelt"],
    kinds: ["viden"],
  },
  "saadan-dropper-du-ind-i-en-skatepark": {
    levels: ["begynder"],
    sports: ["skateboard"],
    kinds: ["tricks", "viden"],
  },
  "180-ollie-guide-begyndere": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "bedste-beskyttelsesaet-boern": {
    levels: ["ny"],
    sports: ["beskyttelse"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-bmx-hjelm": {
    levels: ["ny", "begynder"],
    sports: ["bmx", "beskyttelse"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "er-skateboard-farligt-for-boern": {
    levels: ["ny"],
    sports: ["skateboard", "generelt"],
    kinds: ["viden"],
    foraeldre: true,
  },
  "skateboard-stoerrelsesguide": {
    levels: ["ny", "begynder"],
    sports: ["skateboard"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-skateboard-kuglelejer": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["koeb", "vedligeholdelse"],
  },
  "saadan-koerer-du-fakie": {
    levels: ["begynder"],
    sports: ["skateboard"],
    kinds: ["tricks", "viden"],
  },
  "skateparker-med-bmx-tilladt": {
    levels: ["ny", "begynder"],
    sports: ["bmx", "generelt"],
    kinds: ["viden"],
  },
  "varial-kickflip-guide": {
    levels: ["ovet"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "hvordan-laerer-man-ollie": {
    levels: ["begynder"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "bmx-tricks-for-begyndere": {
    levels: ["begynder"],
    sports: ["bmx"],
    kinds: ["tricks"],
  },
  "vedligeholdelse-af-skateboard": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["vedligeholdelse"],
  },
  "saadan-skifter-du-kuglelejer": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["vedligeholdelse"],
  },
  "bmx-stoerrelsesguide": {
    levels: ["begynder", "ovet"],
    sports: ["bmx"],
    kinds: ["koeb"],
  },
  "bedste-bmx-cykel": {
    levels: ["begynder", "ovet"],
    sports: ["bmx"],
    kinds: ["koeb"],
  },
  "bedste-skateboard-hjul": {
    levels: ["ovet"],
    sports: ["skateboard"],
    kinds: ["koeb", "vedligeholdelse"],
  },
  "kickflip-guide-begyndere": {
    levels: ["ovet"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "shove-it-guide-begyndere": {
    levels: ["begynder"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "heelflip-guide-begyndere": {
    levels: ["ovet"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "pop-shove-it-guide": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "manual-guide-begyndere": {
    levels: ["begynder"],
    sports: ["skateboard"],
    kinds: ["tricks"],
  },
  "bedste-skateboard-trucks": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["koeb", "vedligeholdelse"],
  },
  "hvornaar-skifter-du-deck-og-griptape": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["koeb", "vedligeholdelse"],
  },
  "skateboard-vs-bmx-til-boern": {
    levels: ["ny"],
    sports: ["skateboard", "bmx"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "hvad-koster-det-at-starte-paa-bmx": {
    levels: ["ny"],
    sports: ["bmx"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "er-bmx-farligt-for-boern": {
    levels: ["ny"],
    sports: ["bmx", "generelt"],
    kinds: ["viden"],
    foraeldre: true,
  },
  "hvordan-laver-man-bunny-hop-bmx": {
    levels: ["begynder"],
    sports: ["bmx"],
    kinds: ["tricks"],
  },
  "bedste-griptape-skateboard": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["koeb", "vedligeholdelse"],
  },
  "skateboard-ordliste": {
    levels: ["ny", "begynder"],
    sports: ["skateboard", "generelt"],
    kinds: ["viden"],
  },
  "vedligeholdelse-af-bmx": {
    levels: ["begynder", "ovet"],
    sports: ["bmx"],
    kinds: ["vedligeholdelse"],
  },
  "bmx-vs-almindelig-cykel": {
    levels: ["ny"],
    sports: ["bmx"],
    kinds: ["koeb"],
    foraeldre: true,
  },
  "bedste-skateboard-deck": {
    levels: ["begynder", "ovet"],
    sports: ["skateboard"],
    kinds: ["koeb", "vedligeholdelse"],
  },
};

function inferMeta(guide: GuideFrontmatter): GuideCatalogMeta {
  const tags = guide.tags.map((t) => t.toLowerCase());
  const levels: GuideLevel[] = tags.includes("begynder")
    ? ["begynder"]
    : guide.hub === "koebsguides"
      ? ["ny", "begynder"]
      : ["begynder"];

  const sports: GuideSport[] = [];
  if (tags.some((t) => t.includes("bmx"))) sports.push("bmx");
  if (tags.some((t) => t.includes("løbehjul") || t.includes("scooter"))) sports.push("loebehjul");
  if (tags.some((t) => t.includes("hjelm") || t.includes("beskytt") || t.includes("knæ")))
    sports.push("beskyttelse");
  if (tags.some((t) => t.includes("skateboard") || t.includes("longboard") || t.includes("kickflip") || t.includes("shove") || t.includes("heelflip") || t.includes("manual") || t.includes("ollie") || t.includes("trucks") || t.includes("deck") || t.includes("griptape")))
    sports.push("skateboard");
  if (sports.length === 0) sports.push("generelt");

  const kinds: GuideKind[] =
    guide.hub === "koebsguides"
      ? ["koeb"]
      : tags.some((t) => t.includes("trick"))
        ? ["tricks"]
        : tags.some((t) => t.includes("vedligehold") || t.includes("kuglelejer"))
          ? ["vedligeholdelse"]
          : ["viden"];

  return {
    levels,
    sports,
    kinds,
    foraeldre: tags.includes("børn"),
  };
}

export function getGuideCatalogMeta(guide: GuideFrontmatter): GuideCatalogMeta {
  return CATALOG[guide.slug] ?? inferMeta(guide);
}

export function guideMatchesLevel(guide: GuideFrontmatter, level: GuideLevel): boolean {
  return getGuideCatalogMeta(guide).levels.includes(level);
}

export function getFeaturedGuides(
  guides: GuideFrontmatter[],
  level: GuideLevel,
  sport: GuideSport | "alle" = "alle",
  foraeldreOnly = false,
): GuideFrontmatter[] {
  const bySlug = new Map(guides.map((g) => [g.slug, g]));
  let featured = FEATURED_BY_LEVEL[level]
    .map((slug) => bySlug.get(slug))
    .filter((g): g is GuideFrontmatter => g != null);

  if (sport !== "alle") {
    featured = featured.filter((g) => getGuideCatalogMeta(g).sports.includes(sport));
  }
  if (foraeldreOnly) {
    featured = featured.filter((g) => getGuideCatalogMeta(g).foraeldre);
  }

  if (featured.length >= 4) return featured.slice(0, 6);

  const featuredSlugs = new Set(featured.map((g) => g.slug));
  let rest = guides.filter((g) => guideMatchesLevel(g, level) && !featuredSlugs.has(g.slug));
  if (sport !== "alle") {
    rest = rest.filter((g) => getGuideCatalogMeta(g).sports.includes(sport));
  }
  if (foraeldreOnly) {
    rest = rest.filter((g) => getGuideCatalogMeta(g).foraeldre);
  }
  return [...featured, ...rest].slice(0, 6);
}

export type GuideFilters = {
  level: GuideLevel;
  query: string;
  sport: GuideSport | "alle";
  kind: GuideKind | "alle";
  foraeldreOnly: boolean;
};

export function filterGuides(guides: GuideFrontmatter[], filters: GuideFilters): GuideFrontmatter[] {
  const q = filters.query.trim().toLowerCase();

  return guides.filter((guide) => {
    const meta = getGuideCatalogMeta(guide);

    if (!meta.levels.includes(filters.level)) return false;
    if (filters.foraeldreOnly && !meta.foraeldre) return false;
    if (filters.sport !== "alle" && !meta.sports.includes(filters.sport)) return false;
    if (filters.kind !== "alle" && !meta.kinds.includes(filters.kind)) return false;

    if (!q) return true;

    const haystack = [guide.title, guide.description, guide.slug, ...guide.tags].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

export const GUIDE_LEVEL_STORAGE_KEY = "skatehub-guide-level";
export const GUIDE_SPORT_STORAGE_KEY = "skatehub-guide-sport";

export function isGuideLevel(value: string | null): value is GuideLevel {
  return value === "ny" || value === "begynder" || value === "ovet";
}

export function isGuideSport(value: string | null): value is GuideSport {
  return value === "skateboard" || value === "bmx" || value === "loebehjul" || value === "beskyttelse" || value === "generelt";
}
