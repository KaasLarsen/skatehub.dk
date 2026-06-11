/**
 * Env-styret AdSense-konfiguration.
 *
 * - `NEXT_PUBLIC_ADSENSE_CLIENT` (fx "ca-pub-XXXX") styrer om AdSense-scriptet indlæses.
 *   Scriptet loades uden samtykke-gate, så Googlebot kan verificere publisher-tagget.
 * - `NEXT_PUBLIC_ADSENSE_ACTIVE === "true"` styrer om annonce-slots vises (kræver samtykke).
 */
export function isAdsenseScriptEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim());
}

export function isAdsenseSlotsActive(): boolean {
  return (
    process.env.NEXT_PUBLIC_ADSENSE_ACTIVE === "true" && Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim())
  );
}

export function getAdsenseClientId(): string {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() || "";
}

/** Publisher-ID til ads.txt (`pub-…`), udledt fra `ca-pub-…`. */
export function getAdsensePublisherIdForAdsTxt(): string {
  const client = getAdsenseClientId();
  const m = client.match(/ca-pub-(\d+)/i);
  if (m?.[1]) return `pub-${m[1]}`;
  return "pub-7373148222153531";
}

/** Google AdSense ads.txt-linje (DIRECT). */
export function getAdsenseAdsTxtBody(): string {
  const pub = getAdsensePublisherIdForAdsTxt();
  return `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
}
