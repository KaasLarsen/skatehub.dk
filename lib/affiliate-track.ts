type AffiliateEventParams = {
  merchant: string;
  placement: string;
  slug?: string;
  hub?: string;
  url?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAffiliateClick(params: AffiliateEventParams): void {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (typeof gtag !== "function") return;
  try {
    gtag("event", "affiliate_click", {
      merchant: params.merchant,
      placement: params.placement,
      slug: params.slug || "",
      hub: params.hub || "",
      url: params.url || "",
    });
  } catch {
    // no-op
  }
}
