import type { Metadata } from "next";
import { ContentCardGrid } from "@/components/content-card-grid";
import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuidesByHub } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/koebsguides`;

export const metadata: Metadata = {
  title: "Købsguides — skateboard, BMX, løbehjul og beskyttelse",
  description:
    "Bedste skateboard til begyndere, BMX størrelsesguide, trick-løbehjul og skatehjelm — redaktionelle købsguides.",
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
        Boards, BMX, løbehjul og beskyttelse — vi guider dig til det rigtige gear uden webshop-bullshit.
      </p>
      <AffiliateDisclosure />
      <ContentCardGrid items={guides} />
    </div>
  );
}
