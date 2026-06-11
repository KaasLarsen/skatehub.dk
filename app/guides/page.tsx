import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuideExplorer } from "@/components/guide-explorer";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuides } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_TITLE = "Guides — find det rigtige indhold";
const PAGE_DESCRIPTION =
  "Vælg dit skate-niveau og få anbefalede guides — købsguides, tricks og vedligeholdelse om skate, BMX og løbehjul.";
const PAGE_URL = `${siteUrl}/guides`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
};

function GuideExplorerFallback() {
  return (
    <div className="mt-10 space-y-6">
      <div className="h-32 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
      <div className="h-64 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
    </div>
  );
}

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
      <Suspense fallback={<GuideExplorerFallback />}>
        <GuideExplorer guides={guides} />
      </Suspense>
    </div>
  );
}
