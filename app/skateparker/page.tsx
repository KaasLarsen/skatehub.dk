import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SkateparkFinder } from "@/components/skatepark-finder";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import {
  SKATEPARK_CITY_HUBS,
  SKATEPARK_REGION_HUBS,
} from "@/lib/content/skatepark-hubs";
import { listSkateparks } from "@/lib/content/skateparks";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/skateparker`;

export const metadata: Metadata = {
  title: "Skateparker i Danmark — kort, adresser og guides",
  description:
    "Find skateparker i hele Danmark: København, Aarhus, Odense, Ishøj, street, bowl og indendørs — adresser, kort og regionale guides.",
  alternates: { canonical: PAGE_URL },
};

function SkateparkFinderFallback() {
  return (
    <section className="mt-12">
      <div className="h-24 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
      <div className="mt-6 h-64 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />
    </section>
  );
}

export default function SkateparkerIndexPage() {
  const parks = listSkateparks();

  return (
    <div className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Skateparker", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/skateparker", label: "Skateparker" }]} />
      <h1 className="page-title mt-6">
        Skateparker <span className="text-[var(--pink)]">i Danmark</span>
      </h1>
      <p className="page-lead">
        Danmarks voksende database over skateparker — street, bowl, indoor. Find dit næste spot med adresse, kort og
        info om BMX og løbehjul. Start med en{" "}
        <Link href="/skateparker/by/koebenhavn" className="link-lime">
          by-guide
        </Link>{" "}
        eller{" "}
        <Link href="/skateparker/region/hovedstaden" className="link-lime">
          regional oversigt
        </Link>
        .
      </p>

      <section className="mt-10">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Efter region</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SKATEPARK_REGION_HUBS.map((hub) => (
            <li key={hub.slug}>
              <Link href={`/skateparker/region/${hub.slug}`} className="badge-neon badge-cyan transition hover:opacity-90">
                {hub.region}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Efter by</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SKATEPARK_CITY_HUBS.map((hub) => (
            <li key={hub.slug}>
              <Link href={`/skateparker/by/${hub.slug}`} className="badge-neon badge-pink transition hover:opacity-90">
                {hub.city}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Suspense fallback={<SkateparkFinderFallback />}>
        <SkateparkFinder parks={parks} />
      </Suspense>

      <p className="mt-6 text-sm text-[var(--text-muted)]">
        Mangler du udstyr til parken? Se{" "}
        <Link href="/guides/hvad-koster-det-at-starte-paa-skateboard" className="link-lime">
          prisguiden
        </Link>
        ,{" "}
        <Link href="/guides/bedste-bmx-cykel" className="link-lime">
          BMX-købsguiden
        </Link>{" "}
        og{" "}
        <Link href="/koebsguides" className="link-lime">
          alle købsguides
        </Link>
        . Læs også{" "}
        <Link href="/guides/skatepark-etikette-danmark" className="link-lime">
          skatepark-etikette
        </Link>
        .
      </p>
    </div>
  );
}
