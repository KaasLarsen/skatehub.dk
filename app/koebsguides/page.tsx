import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ContentCardGrid } from "@/components/content-card-grid";
import { InterestCards } from "@/components/interest-cards";
import { KoebsguidesProductSearch } from "@/components/koebsguides-product-search";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuidesByHub } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/koebsguides`;

export const metadata: Metadata = {
  title: "Købsguides — skateboard, BMX, løbehjul, fingerboard og beskyttelse",
  description:
    "Bedste skateboard til børn, BMX cykel, stunt scooter, fingerboard og prisguide — redaktionelle købsguides til skate, BMX, løbehjul og mini-board.",
  alternates: { canonical: PAGE_URL },
};

function ProductSearchFallback() {
  return <div className="mt-12 h-72 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />;
}

export default function KoebsguidesPage() {
  const guides = listGuidesByHub("koebsguides");

  return (
    <div className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Købsguides", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/koebsguides", label: "Købsguides" }]} />
      <h1 className="page-title mt-6">
        Købs<span className="text-[var(--lime)]">guides</span>
      </h1>
      <p className="page-lead">
        Boards, BMX, løbehjul, fingerboard og beskyttelse — vi guider dig til det rigtige gear uden webshop-bullshit. Ny? Start med{" "}
        <Link href="/guides/hvad-koster-det-at-starte-paa-skateboard" className="link-lime">
          hvad det koster at starte
        </Link>
        . Populære guides:{" "}
        <Link href="/guides/skateboard-stoerrelsesguide" className="link-lime">
          deck-størrelse
        </Link>
        ,{" "}
        <Link href="/guides/bedste-skate-sko-til-begyndere" className="link-lime">
          skate-sko
        </Link>
        ,{" "}
        <Link href="/guides/bedste-beskyttelsesaet-boern" className="link-lime">
          beskyttelsessæt
        </Link>{" "}
        og{" "}
        <Link href="/guides/bedste-skateboard-kuglelejer" className="link-lime">
          kuglelejer
        </Link>
        .{" "}
        <Link href="/black-friday" className="link-lime">
          Black Friday & julegaver
        </Link>{" "}
        — live priser og købsguides samlet.
      </p>
      <div className="mt-10">
        <InterestCards compact />
      </div>
      <Suspense fallback={<ProductSearchFallback />}>
        <KoebsguidesProductSearch />
      </Suspense>
      <div className="mt-16">
        <ContentCardGrid items={guides} />
      </div>
    </div>
  );
}
