"use client";

import { useMemo, useState } from "react";
import type { ProductHit } from "@/lib/search/types";
import { trackAffiliateClick } from "@/lib/affiliate-track";
import { PRODUCT_THUMB_WIDTH, productThumbUrl, proxyImg } from "@/lib/search/helpers";

const IMAGE_FRAME =
  "mx-auto mt-3 flex size-36 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[var(--bg-elevated)] sm:size-40";

function ProductImage({
  src,
  title,
  priority = false,
}: {
  src: string;
  title: string;
  priority?: boolean;
}) {
  const thumb = useMemo(() => productThumbUrl(src), [src]);
  const [step, setStep] = useState(0);

  const currentSrc = useMemo(() => {
    switch (step) {
      case 0:
        return thumb;
      case 1:
        return src;
      case 2:
        return proxyImg(thumb, PRODUCT_THUMB_WIDTH);
      case 3:
        return proxyImg(src);
      default:
        return null;
    }
  }, [step, src, thumb]);

  if (!currentSrc) {
    return <div className="px-2 text-center text-xs text-[var(--text-dim)]">Intet billede</div>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={title}
      className="max-h-full max-w-full object-contain p-2"
      width={PRODUCT_THUMB_WIDTH}
      height={PRODUCT_THUMB_WIDTH}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      onError={() => setStep((s) => (s < 3 ? s + 1 : 4))}
    />
  );
}

export function ProductCard({
  product,
  placement = "product-search",
  priority = false,
}: {
  product: ProductHit;
  placement?: string;
  priority?: boolean;
}) {
  const price =
    product.price != null
      ? new Intl.NumberFormat("da-DK", { style: "currency", currency: product.currency || "DKK" }).format(
          product.price,
        )
      : null;

  const onClick = () =>
    trackAffiliateClick({ merchant: product.merchant, placement, url: product.url });

  return (
    <article className="flex flex-col overflow-hidden border-2 border-[var(--border-strong)] bg-[var(--bg-card)] shadow-[4px_4px_0_0_var(--lime)] transition hover:bg-[var(--bg-card-hover)]">
      <a
        href={product.url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        onClick={onClick}
        className={IMAGE_FRAME}
      >
        {product.image ? (
          <ProductImage src={product.image} title={product.title} priority={priority} />
        ) : (
          <div className="px-2 text-center text-xs text-[var(--text-dim)]">Intet billede</div>
        )}
      </a>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--pink)]">{product.merchant}</p>
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-[var(--text)]">
          <a
            href={product.url}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={onClick}
            className="hover:text-[var(--lime)]"
          >
            {product.title}
          </a>
        </h3>
        {price && <p className="text-lg font-semibold text-[var(--lime)]">{price}</p>}
        <a
          href={product.url}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          onClick={onClick}
          className="mt-auto inline-flex items-center justify-center border-2 border-[var(--lime)] bg-[var(--lime)] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-[var(--bg)] transition hover:bg-transparent hover:text-[var(--lime)]"
        >
          Se hos forhandler
        </a>
      </div>
    </article>
  );
}
