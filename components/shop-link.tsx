"use client";

import type { ReactNode } from "react";
import { AffiliateTrackedLink } from "@/components/affiliate-tracked-link";
import { AFFILIATE_SHOPS, type AffiliateShopKey } from "@/lib/affiliate-shops";

/** Affiliate shop-link til MDX — eneste tilladte type udgående shop-link. */
export function ShopLink({ shop, children }: { shop: AffiliateShopKey; children?: ReactNode }) {
  const s = AFFILIATE_SHOPS[shop];
  return (
    <AffiliateTrackedLink href={s.href} merchant={s.name} placement="guide-shop" className="link-lime">
      {children ?? s.name}
    </AffiliateTrackedLink>
  );
}
