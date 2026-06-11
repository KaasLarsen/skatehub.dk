export type FeedProduct = {
  merchant: string;
  title: string;
  desc: string;
  category: string;
  brand: string;
  gtin: string | null;
  mpn: string | null;
  price: number | null;
  currency: string;
  image: string;
  url: string;
  _search: string;
};

export type ProductHit = Omit<FeedProduct, "image"> & { image: string | null };

export type SearchMeta = {
  feeds_total: number;
  feeds_ok: number;
  feeds_failed: number;
  priceMin: number | null;
  priceMax: number | null;
  matched_before_cap: number;
  results_capped: boolean;
};

export type SearchResult = {
  source: "feed" | "fallback" | "error";
  products: ProductHit[];
  meta: SearchMeta;
};
