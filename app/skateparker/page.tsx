import type { Metadata } from "next";
import Link from "next/link";
import { ContentCardGrid } from "@/components/content-card-grid";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SkateparkMetaBadges } from "@/components/skatepark-meta";
import { getSkateparkCities, getSkateparkRegions, listSkateparks } from "@/lib/content/skateparks";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/skateparker`;

export const metadata: Metadata = {
  title: "Skateparker i Danmark — kort, adresser og guides",
  description:
    "Find skateparker i hele Danmark. Adresse, kort, street/bowl, BMX og løbehjul — plus regionale guides som skateparker i København og på Fyn.",
  alternates: { canonical: PAGE_URL },
};

export default function SkateparkerIndexPage() {
  const parks = listSkateparks();
  const regions = getSkateparkRegions();
  const cities = getSkateparkCities();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Skateparker", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/skateparker", label: "Skateparker" }]} />
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-stone-900">Skateparker i Danmark</h1>
      <p className="mt-4 max-w-3xl text-lg text-stone-700">
        SkateHub bygger Danmarks største database over skateparker — med adresse, kort, faciliteter og regionale
        overblik. Det er indhold, webshops sjældent laver, og det giver unik SEO-værdi på søgninger som «skatepark
        København» og «bedste skateparker i Danmark».
      </p>

      {regions.length > 0 ? (
        <section className="mt-10">
          <h2 className="text-lg font-semibold text-stone-900">Efter region</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {regions.map((region) => (
              <li key={region}>
                <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">{region}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {cities.length > 0 ? (
        <section className="mt-8">
          <h2 className="text-lg font-semibold text-stone-900">Byer i databasen</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {cities.map((city) => (
              <li key={city}>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-sm text-orange-900">{city}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ul className="mt-10 space-y-4">
        {parks.map((park) => (
          <li key={park.slug}>
            <Link
              href={`/skateparker/${park.slug}`}
              className="block rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-orange-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-stone-900">{park.title}</h2>
                  <p className="mt-1 text-sm text-stone-600">
                    {park.address} · {park.city}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-stone-600">{park.description}</p>
                </div>
                <SkateparkMetaBadges features={park.features} difficulty={park.difficulty} />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {parks.length === 0 ? <ContentCardGrid items={[]} hrefPrefix="/skateparker" /> : null}

      <p className="mt-10 text-sm text-stone-600">
        Kommende regionale guides: skateparker i København · skateparker på Sjælland · indendørs skateparker i
        Danmark.
      </p>
    </div>
  );
}
