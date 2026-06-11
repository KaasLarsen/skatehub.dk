import { bannerIdFromFeedUrl } from "@/lib/partner-ads-links";

export type FeedConfig = {
  merchant: string;
  url: string;
  bannerId: string;
  /**
   * true (standard): kun skate-relevante produkter via `isSkateLike`.
   * false: hele feedet — til dedikerede skate-shops; brug evt. include/exclude ved blandfeeds.
   */
  skateFilter?: boolean;
  /** Når `skateFilter: false`: kun rækker der matcher mindst ét ord. */
  skateIncludeAny?: string[];
  /** Kassér rækker der matcher mindst ét ord (efter include). */
  skateExcludeAny?: string[];
};

function feed(
  merchant: string,
  url: string,
  opts?: Omit<FeedConfig, "merchant" | "url" | "bannerId">,
): FeedConfig {
  return {
    merchant,
    url,
    bannerId: bannerIdFromFeedUrl(url),
    skateFilter: true,
    ...opts,
  };
}

/** Skate/BMX/løbehjul i store blandfeeds — undgå generiske «hjelm»/«hjul» alene. */
const MIXED_INCLUDE: string[] = [
  "skateboard",
  "longboard",
  "cruiser",
  "griptape",
  "bmx",
  "trick løbehjul",
  "stunt scooter",
  "pro scooter",
  "løbehjul",
  "loebehjul",
  "scooter deck",
  "skate hjelm",
  "skateboard hjelm",
  "knæbeskytt",
  "albuebeskytt",
  "håndledsbeskytt",
  "beskyttelses sæt",
  "beskyttelsesudstyr",
  "grind rail",
  "skate wax",
  "fingerboard",
  "skate trucks",
  "abec",
  "skate",
];

const MIXED_EXCLUDE: string[] = [
  "drybag",
  "compeed",
  "førstehjælp",
  "telt",
  "sovepose",
  "kontorstol",
  "kontor",
  "helikopter",
  "sup board",
  "sup paddle",
  "paddle board",
  "isskøjte",
  "kunstskøjte",
  "håndvægte",
  "børnebassin",
  "bestway",
  "elcykel",
  "racercykel",
  "bagagebærer",
  "cykelhandske",
  "cykelsko",
];

const mixed = (merchant: string, url: string, extra?: Omit<FeedConfig, "merchant" | "url" | "bannerId">) =>
  feed(merchant, url, {
    skateFilter: false,
    skateIncludeAny: MIXED_INCLUDE,
    skateExcludeAny: MIXED_EXCLUDE,
    ...extra,
  });

/**
 * Partner-Ads produktfeeds for SkateHub (partnerid 56917).
 * Alle produktlinks får `uid=skatehub` ved parsing.
 */
export const FEEDS: FeedConfig[] = [
  mixed("Bikepack.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=82565&feedid=1988"),

  mixed("Cykelexperten.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=35898&feedid=345"),

  mixed("Dania Bikes", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=85039&feedid=2090"),

  mixed("DesignShoppen", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=115953&feedid=4216"),

  feed("eCykelhjelm.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=74223&feedid=1647", {
    skateFilter: false,
    skateIncludeAny: ["skate", "bmx", "løbehjul", "scooter", "longboard", "multi-sport", "urban", "beskytt"],
    skateExcludeAny: ["wirelås", "lås", "lock", "kurv", "cykelkurv", "håndvægte"],
  }),

  mixed("Justcool.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=92392&feedid=2437", {
    skateExcludeAny: [...MIXED_EXCLUDE, "isskøjte", "kunstskøjte", "hockeyskøjte", "skøjtebeskyttelse"],
  }),

  // Kontormøbler m.m. — default `isSkateLike` giver typisk 0 produkter.
  feed("Lammeuld.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=66306&feedid=1337"),

  // Dedikeret trick-løbehjul / skateboard / beskyttelse.
  feed("Legehjulet.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=54016&feedid=911", {
    skateFilter: false,
  }),

  // RC-legetøj m.m. — default filter giver typisk 0 produkter.
  feed("Netcentret.dk", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=36108&feedid=349"),

  mixed("Streetshoppen", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=117115&feedid=4342"),

  mixed("SurfMore", "https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=56917&bannerid=63626&feedid=1238", {
    skateExcludeAny: [...MIXED_EXCLUDE, "sup", "paddle", "kajak", "snorkel"],
  }),
];
