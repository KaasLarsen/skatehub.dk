"use client";

import { ProductSearch } from "@/components/product-search";
import { BLACK_FRIDAY_PRODUCT_CHIPS } from "@/lib/content/black-friday";

export function BlackFridayProductSearch() {
  return (
    <ProductSearch
      defaultQuery="skateboard complete"
      defaultMax={900}
      autoLoad
      placement="black-friday"
      title="Søg gear hos vores partnere"
      chips={BLACK_FRIDAY_PRODUCT_CHIPS}
    />
  );
}
