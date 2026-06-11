import type { Metadata } from "next";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SkateparkMetaBadges } from "@/components/skatepark-meta";
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

      <section className="mt-12">
        <h2 className="section-title">
          Alle <span className="text-[var(--cyan)]">parker</span>
        </h2>
        <ul className="mt-6 space-y-4">
          {parks.map((park, i) => (
            <li key={park.slug}>
              <Link
                href={`/skateparker/${park.slug}`}
                className={`sticker-card block ${i % 2 === 1 ? "sticker-card-alt" : ""}`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wide text-[var(--text)]">{park.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-dim)]">
                      {park.address} · {park.city} · {park.region}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-[var(--text-muted)]">{park.description}</p>
                  </div>
                  <SkateparkMetaBadges features={park.features} difficulty={park.difficulty} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <AffiliateDisclosure compact />
      </div>
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
