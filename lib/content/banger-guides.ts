import type { GuideFrontmatter } from "@/lib/content/guide-types";
import { listGuidesByHub } from "@/lib/content/guides";

/** Flagship købsguides — pinned on homepage and linked from hub pages. */
export const BANGER_GUIDE_SLUGS = [
  "bedste-skateboard-til-boern",
  "hvad-koster-det-at-starte-paa-skateboard",
  "bedste-skate-sko-til-begyndere",
  "bedste-beskyttelsesaet-boern",
  "complete-vs-custom-skateboard",
  "stunt-scooter-vs-loebehjul",
  "bedste-bmx-cykel",
  "bedste-bmx-til-boern",
  "hvad-koster-det-at-starte-paa-bmx",
  "bedste-skateboard-hjul",
] as const;

export function listBangerGuides(): GuideFrontmatter[] {
  const all = listGuidesByHub("koebsguides");
  return BANGER_GUIDE_SLUGS.map((slug) => all.find((g) => g.slug === slug)).filter(
    (g): g is GuideFrontmatter => g != null
  );
}
