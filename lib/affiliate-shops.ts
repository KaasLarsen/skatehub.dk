import { partnerAdsKlikUrl } from "@/lib/partner-ads-links";

export type AffiliateShopKey =
  | "legehjulet"
  | "justcool"
  | "ecykelhjelm"
  | "cykelexperten"
  | "streetshoppen"
  | "bikepack"
  | "daniaBikes";

/** Partner-shops med aktivt produktfeed — brug KUN disse til udgående shop-links. */
export const AFFILIATE_SHOPS: Record<
  AffiliateShopKey,
  { name: string; bannerId: string; siteUrl: string; href: string }
> = {
  legehjulet: {
    name: "Legehjulet.dk",
    bannerId: "54016",
    siteUrl: "https://www.legehjulet.dk/",
    href: partnerAdsKlikUrl("54016", "https://www.legehjulet.dk/"),
  },
  justcool: {
    name: "Justcool.dk",
    bannerId: "92392",
    siteUrl: "https://www.justcool.dk/",
    href: partnerAdsKlikUrl("92392", "https://www.justcool.dk/"),
  },
  ecykelhjelm: {
    name: "eCykelhjelm.dk",
    bannerId: "74223",
    siteUrl: "https://www.ecykelhjelm.dk/",
    href: partnerAdsKlikUrl("74223", "https://www.ecykelhjelm.dk/"),
  },
  cykelexperten: {
    name: "Cykelexperten.dk",
    bannerId: "35898",
    siteUrl: "https://cykelexperten.dk/",
    href: partnerAdsKlikUrl("35898", "https://cykelexperten.dk/"),
  },
  streetshoppen: {
    name: "Streetshoppen",
    bannerId: "117115",
    siteUrl: "https://www.streetshoppen.dk/",
    href: partnerAdsKlikUrl("117115", "https://www.streetshoppen.dk/"),
  },
  bikepack: {
    name: "Bikepack.dk",
    bannerId: "82565",
    siteUrl: "https://www.bikepack.dk/",
    href: partnerAdsKlikUrl("82565", "https://www.bikepack.dk/"),
  },
  daniaBikes: {
    name: "Dania Bikes",
    bannerId: "85039",
    siteUrl: "https://www.daniabikes.com/",
    href: partnerAdsKlikUrl("85039", "https://www.daniabikes.com/"),
  },
};

export function affiliateShopHref(key: AffiliateShopKey): string {
  return AFFILIATE_SHOPS[key].href;
}
