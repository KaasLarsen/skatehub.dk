/** SkateHub AdSense publisher — samme konto som vinbot.dk */
const DEFAULT_ADSENSE_CLIENT = "ca-pub-7373148222153531";

/**
 * Env-styret AdSense-konfiguration.
 *
 * - `NEXT_PUBLIC_ADSENSE_CLIENT` overstyrer default publisher-ID.
 * - Scriptet loades uden cookie-samtykke, så Googlebot kan verificere tagget.
 * - `NEXT_PUBLIC_ADSENSE_ACTIVE === "true"` styrer om annonce-slots vises (kræver samtykke).
 */
export function getAdsenseClientId(): string {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || DEFAULT_ADSENSE_CLIENT;
}

export function isAdsenseScriptEnabled(): boolean {
  return Boolean(getAdsenseClientId());
}

export function isAdsenseSlotsActive(): boolean {
  return process.env.NEXT_PUBLIC_ADSENSE_ACTIVE === "true" && isAdsenseScriptEnabled();
}

/** Publisher-ID til ads.txt (`pub-…`), udledt fra `ca-pub-…`. */
export function getAdsensePublisherIdForAdsTxt(): string {
  const m = getAdsenseClientId().match(/ca-pub-(\d+)/i);
  if (m?.[1]) return `pub-${m[1]}`;
  return "pub-7373148222153531";
}

/** Google AdSense ads.txt-linje (DIRECT) — bruges kun hvis dynamisk route genaktiveres. */
export function getAdsenseAdsTxtBody(): string {
  const pub = getAdsensePublisherIdForAdsTxt();
  return `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
}
