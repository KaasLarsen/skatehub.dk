import type { Metadata } from "next";
import Link from "next/link";
import { ContentCardGrid } from "@/components/content-card-grid";
import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SkateparkMetaBadges } from "@/components/skatepark-meta";
import { getSkateparkCities, getSkateparkRegions, listSkateparks } from "@/lib/content/skateparks";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/skateparker`;

export const metadata: Metadata = {
  title: "Skateparker i Danmark — kort, adresser og guides",
  description:
    "Find skateparker i hele Danmark. Adresse, kort, street/bowl, BMX og løbehjul — plus regionale guides.",
  alternates: { canonical: PAGE_URL },
};

export default function SkateparkerIndexPage() {
  const parks = listSkateparks();
  const regions = getSkateparkRegions();
  const cities = getSkateparkCities();

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
        info om BMX og løbehjul.
      </p>

      {regions.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Regioner</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {regions.map((region) => (
              <li key={region} className="badge-neon badge-cyan">
                {region}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {cities.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Byer</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {cities.map((city) => (
              <li key={city} className="badge-neon badge-pink">
                {city}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ul className="mt-10 space-y-4">
        {parks.map((park, i) => (
          <li key={park.slug}>
            <Link
              href={`/skateparker/${park.slug}`}
              className={`sticker-card block ${i % 2 === 1 ? "sticker-card-alt" : ""}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="font-display text-xl uppercase tracking-wide text-[var(--text)]">{park.title}</h2>
                  <p className="mt-1 text-sm text-[var(--text-dim)]">
                    {park.address} · {park.city}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--text-muted)]">{park.description}</p>
                </div>
                <SkateparkMetaBadges features={park.features} difficulty={park.difficulty} />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {parks.length === 0 ? <ContentCardGrid items={[]} hrefPrefix="/skateparker" altCards /> : null}

      <p className="mt-10 text-sm text-[var(--text-dim)]">
        Kommer snart: skateparker i København · Sjælland · indendørs skateparker i Danmark.
      </p>
    </div>
  );
}
