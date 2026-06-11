import type { Metadata } from "next";
import { ContentCardGrid } from "@/components/content-card-grid";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuides } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_TITLE = "Alle guides og artikler";
const PAGE_DESCRIPTION =
  "Søg og læs alle SkateHub-artikler — købsguides, skateparker og praktisk viden om skate, BMX og løbehjul.";
const PAGE_URL = `${siteUrl}/guides`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

export default function GuidesIndexPage() {
  const guides = listGuides();

  return (
    <div className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Guides", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/guides", label: "Guides" }]} />
      <h1 className="page-title mt-6">{PAGE_TITLE}</h1>
      <p className="page-lead">{PAGE_DESCRIPTION}</p>
      <ContentCardGrid items={guides} />
    </div>
  );
}
