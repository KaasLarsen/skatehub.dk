import Script from "next/script";
import { getAdsenseClientId, isAdsenseScriptEnabled } from "@/lib/adsense-config";

/**
 * Indlæser AdSense publisher-scriptet på alle sider (uden cookie-samtykke),
 * så Googlebot kan verificere publisher-tagget ved godkendelse.
 */
export function AdSenseConsentGate() {
  if (!isAdsenseScriptEnabled()) return null;
  const client = getAdsenseClientId();

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
