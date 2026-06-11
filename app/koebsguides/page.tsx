import type { Metadata } from "next";
import Link from "next/link";
import { ContentCardGrid } from "@/components/content-card-grid";
import { ProductSearch } from "@/components/product-search";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuidesByHub } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/koebsguides`;

export const metadata: Metadata = {
  title: "Købsguides — skateboard, BMX, løbehjul og beskyttelse",
  description:
    "Bedste skateboard til børn, BMX cykel, stunt scooter, skateboard-hjul og prisguide — redaktionelle købsguides til skate, BMX og løbehjul.",
  alternates: { canonical: PAGE_URL },
};

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
        Boards, BMX, løbehjul og beskyttelse — vi guider dig til det rigtige gear uden webshop-bullshit. Ny? Start med{" "}
        <Link href="/guides/hvad-koster-det-at-starte-paa-skateboard" className="link-lime">
          hvad det koster at starte
        </Link>
        . Populære guides:{" "}
        <Link href="/guides/bedste-skateboard-til-boern" className="link-lime">
          board til børn
        </Link>
        ,{" "}
        <Link href="/guides/stunt-scooter-vs-loebehjul" className="link-lime">
          stunt vs. løbehjul
        </Link>
        ,{" "}
        <Link href="/guides/bedste-bmx-cykel" className="link-lime">
          bedste BMX
        </Link>{" "}
        og{" "}
        <Link href="/guides/bedste-skateboard-hjul" className="link-lime">
          skateboard-hjul
        </Link>
        .
      </p>
      <ProductSearch placement="koebsguides-hub" />
      <div className="mt-16">
        <ContentCardGrid items={guides} />
      </div>
    </div>
  );
}
