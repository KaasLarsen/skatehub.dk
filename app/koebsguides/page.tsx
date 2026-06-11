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
    "Bedste skateboard til begyndere, BMX størrelsesguide, trick-løbehjul og skatehjelm — redaktionelle købsguides med affiliate-links til SkatePro, Blue Tomato m.fl.",
  alternates: { canonical: PAGE_URL },
};

export default function KoebsguidesPage() {
  const guides = listGuidesByHub("koebsguides");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Købsguides", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/koebsguides", label: "Købsguides" }]} />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-stone-900">Købsguides</h1>
      <p className="mt-4 max-w-3xl text-lg text-stone-700">
        Ca. 50 % af SkateHubs indhold er produktguides — «bedste X til Y»-artikler rettet mod long-tail søgninger.
        Vi tester og sammenligner udstyr, så du slipper for at læse ti webshops igennem.
      </p>
      <div className="mt-6">
        <AffiliateDisclosure />
      </div>
      <ContentCardGrid items={guides} />
    </div>
  );
}
