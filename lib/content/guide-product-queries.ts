/** Guide-specifikke produktsøgninger — feed-baseret, ikke manuelt kurateret. */
export type GuideProductQuery = {
  q: string;
  max?: number;
  title?: string;
};

const QUERIES: Record<string, GuideProductQuery> = {
  "bedste-skateboard-til-boern": {
    q: "skateboard complete børn",
    max: 900,
    title: "Complete boards til børn",
  },
  "bedste-skateboard-til-begyndere": {
    q: "skateboard complete begynder",
    max: 900,
    title: "Complete boards til begyndere",
  },
  "hvad-koster-det-at-starte-paa-skateboard": {
    q: "skateboard complete",
    max: 800,
    title: "Complete boards under budget",
  },
  "bedste-skateboard-hjul": {
    q: "skateboard hjul",
    title: "Skateboard-hjul",
  },
  "bedste-skateboard-trucks": {
    q: "skateboard trucks",
    title: "Skateboard trucks",
  },
  "hvornaar-skifter-du-deck-og-griptape": {
    q: "skateboard deck griptape",
    title: "Decks og griptape",
  },
  "bedste-skatehjelm": {
    q: "skate hjelm",
    max: 600,
    title: "Skatehjelme",
  },
  "bedste-knaebeskyttere-skate": {
    q: "knæbeskyttelse skate",
    title: "Knæbeskyttere",
  },
  "bedste-bmx-cykel": {
    q: "bmx cykel complete",
    title: "BMX cykler",
  },
  "bedste-bmx-til-boern": {
    q: "bmx børn junior",
    max: 2500,
    title: "BMX til børn",
  },
  "bmx-stoerrelsesguide": {
    q: "bmx 20 tommer",
    title: "BMX 20 tommer",
  },
  "bedste-trick-loebehjul": {
    q: "stunt scooter trick",
    max: 2000,
    title: "Trick-løbehjul",
  },
  "stunt-scooter-vs-loebehjul": {
    q: "stunt scooter",
    max: 1500,
    title: "Stunt scootere",
  },
  "bedste-longboard-til-begyndere": {
    q: "longboard complete",
    max: 1200,
    title: "Longboards",
  },
  "skateboard-vs-bmx-til-boern": {
    q: "skateboard complete",
    max: 900,
    title: "Skateboards til børn",
  },
};

export function getGuideProductQuery(slug: string, tags: string[] = []): GuideProductQuery {
  const mapped = QUERIES[slug];
  if (mapped) return mapped;

  const tagQuery = tags.filter((t) => !["købsguide", "begynder", "børn", "reservedele"].includes(t)).join(" ");
  return {
    q: tagQuery || "skateboard",
    title: "Produkter til guiden",
  };
}

export function gearPageHref(query: GuideProductQuery): string {
  const params = new URLSearchParams({ q: query.q });
  if (query.max != null) params.set("max", String(query.max));
  return `/koebsguides?${params.toString()}`;
}
