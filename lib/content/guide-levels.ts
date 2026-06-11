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

/** Kuraterede top-forslag pr. niveau (rækkefølge = prioritet). */
export const FEATURED_BY_LEVEL: Record<GuideLevel, string[]> = {
  ny: [
    "bedste-skateboard-til-boern",
    "skateboard-vs-bmx-til-boern",
    "hvad-koster-det-at-starte-paa-skateboard",
    "bedste-skate-sko-til-begyndere",
    "complete-vs-custom-skateboard",
    "stunt-scooter-vs-loebehjul",
    "bedste-skatehjelm",
    "bedste-beskyttelsesaet-boern",
    "er-skateboard-farligt-for-boern",
    "bedste-skateboard-til-begyndere",
    "skatepark-etikette-danmark",
  ],
  begynder: [
    "saadan-skubber-du-paa-skateboard",
    "bedste-skateboard-til-begyndere",
    "hvordan-laerer-man-ollie",
    "saadan-dropper-du-ind-i-en-skatepark",
    "indendoers-skatehaller-danmark",
    "hvornaar-skifter-du-deck-og-griptape",
    "shove-it-guide-begyndere",
    "manual-guide-begyndere",
    "vedligeholdelse-af-skateboard",
    "bmx-tricks-for-begyndere",
  ],
  ovet: [
    "180-ollie-guide-begyndere",
    "kickflip-guide-begyndere",
    "bedste-skateboard-trucks",
    "bedste-skateboard-hjul",
    "saadan-skifter-du-kuglelejer",
    "bedste-bmx-cykel",
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

export function getFeaturedGuides(guides: GuideFrontmatter[], level: GuideLevel): GuideFrontmatter[] {
  const bySlug = new Map(guides.map((g) => [g.slug, g]));
  const featured = FEATURED_BY_LEVEL[level]
    .map((slug) => bySlug.get(slug))
    .filter((g): g is GuideFrontmatter => g != null);

  if (featured.length >= 4) return featured.slice(0, 6);

  const featuredSlugs = new Set(featured.map((g) => g.slug));
  const rest = guides.filter((g) => guideMatchesLevel(g, level) && !featuredSlugs.has(g.slug));
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

export function isGuideLevel(value: string | null): value is GuideLevel {
  return value === "ny" || value === "begynder" || value === "ovet";
}
