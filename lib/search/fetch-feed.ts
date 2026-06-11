import { unstable_cache } from "next/cache";
import type { FeedConfig } from "@/lib/feeds/config";
import type { FeedProduct } from "./types";
import { decodeText, looksLikeXML, parseCSVProducts, parseXMLProducts, UA } from "./helpers";
import { filterSkateCatalog } from "./skate-filter";

async function fetchFeedProductsInner(feed: FeedConfig): Promise<FeedProduct[]> {
  const { merchant, url } = feed;
  const headers = {
    "user-agent": UA,
    accept: "text/xml,application/xml,text/plain,text/csv,*/*",
  };
  const r = await fetch(url, { headers, redirect: "follow" });
  const buf = await r.arrayBuffer();
  const text = decodeText(buf);

  let products = looksLikeXML(text) ? parseXMLProducts(text, merchant) : parseCSVProducts(text, merchant);
  products = filterSkateCatalog(feed, products);
  return products;
}

const FEED_PRODUCTS_CACHE_VERSION = "v2";

export function getCachedFeedProducts(feed: FeedConfig): Promise<FeedProduct[]> {
  const filterKey =
    feed.skateFilter !== false
      ? "skate"
      : [
          "no-skate-filter",
          feed.skateIncludeAny?.join(",") ?? "",
          feed.skateExcludeAny?.join(",") ?? "",
        ].join("|");
  return unstable_cache(
    () => fetchFeedProductsInner(feed),
    ["skatehub-feed", FEED_PRODUCTS_CACHE_VERSION, feed.merchant, feed.url, filterKey],
    { revalidate: 21600, tags: ["skatehub-feeds"] },
  )();
}
