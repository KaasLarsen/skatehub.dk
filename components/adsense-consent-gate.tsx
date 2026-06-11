import Script from "next/script";
import { getAdsenseClientId, isAdsenseScriptEnabled } from "@/lib/adsense-config";

/**
 * Googles AdSense publisher-tag — i initial HTML (beforeInteractive) så Googlebot
 * kan verificere det ved godkendelse. Annonce-slots (AdSlot) kræver stadig cookie-samtykke.
 */
export function AdSenseConsentGate() {
  if (!isAdsenseScriptEnabled()) return null;
  const client = getAdsenseClientId();

  return (
    <Script
      id="adsense-publisher"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
}
