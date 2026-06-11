"use client";

import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { ensurePartnerAdsKlikUid } from "@/lib/partner-ads-links";
import { trackAffiliateClick } from "@/lib/affiliate-track";

function isExternal(href: string): boolean {
  if (!href || href.startsWith("#") || href.startsWith("/")) return false;
  try {
    const u = new URL(href);
    return !u.hostname.endsWith("skatehub.dk");
  } catch {
    return false;
  }
}

type Props = ComponentPropsWithoutRef<"a">;

/** MDX-links: interne som normalt; eksterne får Partner-Ads uid + affiliate-rel. */
export function MdxLink({ href = "", children, ...props }: Props) {
  if (!isExternal(href)) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="link-lime" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className="link-lime" {...props}>
        {children}
      </a>
    );
  }

  /* Kun Partner-Ads affiliate-links må pege ud af sitet. */
  if (!href.includes("partner-ads.com/dk/klikbanner.php")) {
    return <span className="text-[var(--text-muted)]">{children}</span>;
  }

  const tracked = ensurePartnerAdsKlikUid(href);

  return (
    <a
      href={tracked}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      className="link-lime"
      onClick={() =>
        trackAffiliateClick({ merchant: "external", placement: "guide-mdx", url: tracked })
      }
      {...props}
    >
      {children}
    </a>
  );
}
