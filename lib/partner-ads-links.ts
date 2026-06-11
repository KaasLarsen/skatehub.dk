/** Partner-Ads publisher (SkateHub). */
export const PARTNER_ADS_PARTNER_ID = "56917";

/** Ekstra click ref i Partner-Ads (må ikke indeholde `/`). */
export const PARTNER_ADS_UID = "skatehub";

/**
 * Tilføj `uid` på eksisterende klikbanner-URL'er (fx fra produktfeeds).
 * Daisycon/Adtraction og andre netværk røres ikke.
 */
export function ensurePartnerAdsKlikUid(href: string): string {
  const trimmed = href.trim();
  if (!trimmed.includes("partner-ads.com/dk/klikbanner.php")) return trimmed;
  try {
    const u = new URL(trimmed);
    u.searchParams.set("uid", PARTNER_ADS_UID);
    return u.toString();
  } catch {
    return trimmed;
  }
}

/**
 * Standard klik-URL til Partner-Ads. Brug `htmlurl` kun når banner-typen understøtter dyb link.
 * Feed-URL'er (feed_udlaes.php) må ikke bruges som brugerlinks.
 */
export function partnerAdsKlikUrl(bannerId: string, htmlUrl?: string): string {
  const u = new URL("https://www.partner-ads.com/dk/klikbanner.php");
  u.searchParams.set("partnerid", PARTNER_ADS_PARTNER_ID);
  u.searchParams.set("bannerid", bannerId.trim());
  u.searchParams.set("uid", PARTNER_ADS_UID);
  if (htmlUrl?.trim()) {
    u.searchParams.set("htmlurl", htmlUrl.trim());
  }
  return u.toString();
}

/** Udtræk bannerid fra feed_udlaes-URL. */
export function bannerIdFromFeedUrl(url: string): string {
  try {
    return new URL(url).searchParams.get("bannerid") || "";
  } catch {
    return "";
  }
}
