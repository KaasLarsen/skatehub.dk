"use client";

import { useEffect, useRef } from "react";
import { getAdsenseClientId, isAdsenseSlotsActive } from "@/lib/adsense-config";
import { useMarketingConsent } from "@/lib/use-marketing-consent";

type SlotProps = { slot: string; className?: string; format?: "auto" | "rectangle" | "horizontal" | "vertical" };

/** Annonce-slots — kræver NEXT_PUBLIC_ADSENSE_ACTIVE=true og cookie-samtykke. */
export function AdSlot({ slot, className = "", format = "auto" }: SlotProps) {
  const allowAds = useMarketingConsent();
  const enabled = isAdsenseSlotsActive();
  const client = getAdsenseClientId();
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!enabled || !allowAds || pushedRef.current) return;
    try {
      const w = window as unknown as { adsbygoogle?: object[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      /* ignore */
    }
  }, [enabled, allowAds, slot]);

  if (!enabled || !allowAds) return null;

  return (
    <div className={className}>
      <ins
        className="adsbygoogle block min-h-[100px] w-full"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
