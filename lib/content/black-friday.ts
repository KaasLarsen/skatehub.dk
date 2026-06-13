import type { ProductSearchChip } from "@/components/product-search";
import type { AffiliateShopKey } from "@/lib/affiliate-shops";

/** Produktkategorier til Black Friday / julegave-søgning. */
export const BLACK_FRIDAY_PRODUCT_CHIPS: ProductSearchChip[] = [
  { label: "Complete board · børn", q: "skateboard complete børn", max: 900 },
  { label: "Begynder board", q: "skateboard complete begynder", max: 800 },
  { label: "BMX til børn", q: "bmx børn 20 tommer", max: 2500 },
  { label: "BMX complete", q: "bmx cykel complete", max: 4000 },
  { label: "Trick-løbehjul", q: "stunt scooter trick", max: 2000 },
  { label: "Fingerboard", q: "fingerboard", max: 450 },
  { label: "Skatehjelm", q: "skate hjelm", max: 600 },
  { label: "Beskyttelsessæt", q: "beskyttelsessæt skate", max: 500 },
  { label: "Skate-sko", q: "vans skate sko", max: 900 },
  { label: "Hjul & bearings", q: "skateboard hjul kuglelejer" },
  { label: "Griptape & deck", q: "skateboard deck griptape", max: 400 },
  { label: "Under 500 kr", q: "skateboard", max: 500 },
];

/** Købsguides vi fremhæver på tilbudssiden — julegave- og upgrade-intent. */
export const BLACK_FRIDAY_GUIDE_SLUGS = [
  "bedste-skateboard-til-boern",
  "bedste-bmx-til-boern",
  "bedste-beskyttelsesaet-boern",
  "bedste-skate-sko-til-begyndere",
  "hvad-koster-det-at-starte-paa-skateboard",
  "hvad-koster-det-at-starte-paa-bmx",
  "bedste-skateboard-til-begyndere",
  "bedste-bmx-cykel",
  "bedste-trick-loebehjul",
  "bedste-fingerboard-til-begyndere",
  "bedste-skatehjelm",
] as const;

/** Partner-shops med typisk stærkt sortiment til skate/BMX. */
export const BLACK_FRIDAY_SHOP_KEYS: AffiliateShopKey[] = [
  "legehjulet",
  "justcool",
  "streetshoppen",
  "daniaBikes",
  "cykelexperten",
  "ecykelhjelm",
  "bikepack",
];

/** Nov–dec: vis sæson-banner på forsiden. */
export function isDealSeason(date = new Date()): boolean {
  const month = date.getMonth();
  return month === 10 || month === 11;
}
