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
    "Lær ollie, BMX-tricks for begyndere, vedligeholdelse af skateboard og skift af kuglelejer — praktisk viden til skaters.",
  alternates: { canonical: PAGE_URL },
};

export default function VidenPage() {
  const guides = listGuidesByHub("viden");

  return (
    <div className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Guides & viden", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/viden", label: "Guides & viden" }]} />
      <h1 className="page-title mt-6">
        Learn <span className="text-[var(--cyan)]">& shred</span>
      </h1>
      <p className="page-lead">
        Tricks, vedligeholdelse og how-to — praktisk viden til din næste session i parken eller på gaden.
      </p>
      <ContentCardGrid items={guides} altCards />
    </div>
  );
}
