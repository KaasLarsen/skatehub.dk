import type { Metadata } from "next";
import Link from "next/link";
import { ContentCardGrid } from "@/components/content-card-grid";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { listGuidesByHub } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/viden`;

export const metadata: Metadata = {
  title: "Guides og viden — tricks, vedligeholdelse og how-to",
  description:
    "Lær at skubbe, droppe ind, ollie, shove-it, kickflip og mere — plus indendørs skatehaller og skatepark-etikette. Praktisk viden til skaters i Danmark.",
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
        Tricks, vedligeholdelse og how-to — praktisk viden til din næste session. Skal du opgradere gear? Se{" "}
        <Link href="/guides/bedste-skateboard-hjul" className="link-lime">
          skateboard-hjul
        </Link>{" "}
        og{" "}
        <Link href="/koebsguides" className="link-lime">
          købsguides
        </Link>
        .
      </p>
      <ContentCardGrid items={guides} altCards />
    </div>
  );
}
