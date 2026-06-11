/** Primær host skal matche Vercel primary domain. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.skatehub.dk").replace(/\/$/, "");
export const siteName = "SkateHub";
export const editorialTeamName = "SkateHub-redaktionen";
export const editorialTeamDescription =
  "SkateHub skriver guides om skateboards, BMX, trick-løbehjul, beskyttelse og skateparker i Danmark.";
export const contactEmail = "info@skatehub.dk";

export const legalPagesUpdatedDisplay = "11. juni 2026";

export const organizationSchemaId = `${siteUrl}/#organization`;
export const editorialTeamSchemaId = `${siteUrl}/#editorial-team`;
export const organizationLogoUrl = `${siteUrl}/apple-icon`;

export const siteDescription =
  "Danmarks hub for skateboards, BMX, trick-løbehjul og skateparker — købsguides, størrelsesguider og Danmarks største skatepark-database.";

export function organizationSameAs(): string[] {
  const raw = process.env.NEXT_PUBLIC_ORG_SAME_AS?.trim();
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}
