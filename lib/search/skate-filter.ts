import type { FeedConfig } from "@/lib/feeds/config";
import type { FeedProduct } from "./types";
import { normalize } from "./helpers";

const SKATE_POSITIVE: readonly string[] = [
  "skateboard",
  "skate board",
  "longboard",
  "cruiser board",
  "penny board",
  "griptape",
  "grip tape",
  "skate trucks",
  "trucks",
  "bearing",
  "kuglelejer",
  "riser pad",
  "bmx",
  "trick løbehjul",
  "stunt scooter",
  "pro scooter",
  "løbehjul",
  "loebehjul",
  "scooter deck",
  "knæbeskytt",
  "knee pad",
  "elbow pad",
  "albuebeskytt",
  "beskyttelsesudstyr",
  "beskyttelses sæt",
  "skate hjelm",
  "skateboard hjelm",
  "halfpipe",
  "grind rail",
  "skatepark",
  "skate wax",
  "fingerboard",
  "skate deck",
];

const SKATE_NEGATIVE: readonly string[] = [
  "drybag",
  "dry bag",
  "compeed",
  "førstehjælp",
  "first aid",
  "vin",
  "wine",
  "whisky",
  "whiskey",
  "øl",
  "beer",
  "telt",
  "sovepose",
  "camping",
  "vandrestøvler",
  "silva map",
  "navigation",
  "gavekort",
  "chokolade",
  "kaffe",
  "kontorstol",
  "kontor",
  "helikopter",
  "isskøjte",
  "kunstskøjte",
  "hockeyskøjte",
  "sup board",
  "sup paddle",
  "paddle board",
  "børnebassin",
  "bestway",
  "elcykel",
  "racercykel",
  "håndvægte",
  "cykelhjelm",
  "cykelhandske",
  "cykelsko",
  "bagagebærer",
  "dæk 28",
  "dæk 29",
  "dæk 26",
  "dæk 27",
];

function hasWord(text: string, word: string): boolean {
  const esc = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|[^a-zæøå0-9])${esc}(?:[^a-zæøå0-9]|$)`, "i").test(text);
}

export function isSkateLike(p: Pick<FeedProduct, "title" | "desc" | "category" | "brand">): boolean {
  const text = `${p.title || ""} ${p.desc || ""} ${p.category || ""} ${p.brand || ""}`.toLowerCase();

  const hasNeg = SKATE_NEGATIVE.some((w) => hasWord(text, w) || text.includes(w));
  const hasPos = SKATE_POSITIVE.some((w) => hasWord(text, w) || text.includes(w));

  if (hasNeg && !hasPos) return false;
  if (hasPos) return true;

  /* «skate» alene — undgå isskøjte via negative ovenfor. */
  if (hasWord(text, "skate") && !text.includes("issk")) return true;

  return false;
}

/** Ekstra frasortering i søgning — undgå tydeligt irrelevant hardware fra blandfeeds. */
export function productEligibleForSkateSearch(
  p: Pick<FeedProduct, "title" | "desc" | "category">,
): boolean {
  const text = `${p.title || ""} ${p.desc || ""} ${p.category || ""}`.toLowerCase();
  const hardExclude = ["drybag", "compeed", "førstehjælp", "silva", "gavekort", "kontorstol", "helikopter"];
  return !hardExclude.some((w) => text.includes(w));
}

export function filterSkateCatalog(feed: FeedConfig, products: FeedProduct[]): FeedProduct[] {
  if (feed.skateFilter !== false) {
    return products.filter(isSkateLike);
  }

  const inc = feed.skateIncludeAny;
  const exc = feed.skateExcludeAny;
  if ((!inc || inc.length === 0) && (!exc || exc.length === 0)) return products;

  return products.filter((p) => {
    const hay = normalize(`${p.title} ${p.desc} ${p.category} ${p.brand}`);
    if (exc?.length && exc.some((t) => hay.includes(normalize(t)))) return false;
    if (!inc?.length) return true;
    return inc.some((t) => hay.includes(normalize(t)));
  });
}
