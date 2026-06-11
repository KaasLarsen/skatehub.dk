import type { Metadata } from "next";
import { ContentCardGrid } from "@/components/content-card-grid";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuidesByHub } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/viden`;

export const metadata: Metadata = {
  title: "Guides og viden — tricks, vedligeholdelse og how-to",
  description:
    "Lær ollie, BMX-tricks for begyndere, vedligeholdelse af skateboard og skift af kuglelejer — praktisk community-indhold til danske skatere.",
  alternates: { canonical: PAGE_URL },
};

export default function VidenPage() {
  const guides = listGuidesByHub("viden");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Guides & viden", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/viden", label: "Guides & viden" }]} />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-stone-900">Guides & viden</h1>
      <p className="mt-4 max-w-3xl text-lg text-stone-700">
        Ca. 20 % af indholdet er how-to og community-artikler — tricks, vedligeholdelse og praktisk viden, der
        binder købsguides og skateparker sammen.
      </p>
      <ContentCardGrid items={guides} />
    </div>
  );
}
