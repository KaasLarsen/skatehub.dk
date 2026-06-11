import type { Metadata } from "next";
import Link from "next/link";
import { ContentCardGrid } from "@/components/content-card-grid";
import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { listGuidesByHub } from "@/lib/content/guides";
import { listSkateparks } from "@/lib/content/skateparks";
import { editorialTeamName, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteName} – Danmarks hub for skate, BMX og skateparker`,
  description:
    "Købsguides til skateboards, BMX og trick-løbehjul — plus Danmarks voksende database over skateparker. Long-tail SEO-indhold skrevet til danske begyndere og entusiaster.",
  alternates: { canonical: siteUrl },
};

const heroLinks = [
  {
    href: "/koebsguides",
    label: "Købsguides",
    blurb: "Bedste skateboard, BMX, løbehjul og beskyttelse",
  },
  {
    href: "/skateparker",
    label: "Skateparker",
    blurb: "Find parker i hele Danmark — adresse, kort og faciliteter",
  },
  {
    href: "/viden",
    label: "Guides & viden",
    blurb: "Tricks, vedligeholdelse og praktiske how-to guides",
  },
  {
    href: "/guides/bedste-skateboard-til-begyndere",
    label: "Start her",
    blurb: "Bedste skateboard til begyndere — komplet guide",
  },
];

export default function HomePage() {
  const koebsguides = listGuidesByHub("koebsguides").slice(0, 4);
  const skateparker = listSkateparks().slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-stone-50 px-6 py-12 ring-1 ring-orange-100 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-800/80">Danmarks skate-hub</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          Skateboards, BMX, løbehjul og skateparker
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-700">
          {siteName} er en nicheportal — ikke bare endnu en affiliate-side. Vi bygger købsguides, praktisk viden og{" "}
          <strong className="font-semibold text-stone-800">Danmarks største database over skateparker</strong>, så du
          kan finde udstyr og spots uden at google dig ihjel.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {heroLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm ring-1 ring-stone-200/60 transition hover:border-orange-200 hover:shadow-md"
              >
                <span className="font-semibold text-stone-900">{item.label}</span>
                <span className="mt-1 block text-sm text-stone-600">{item.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-stone-600">
          Skrevet af{" "}
          <Link href="/om-os" className="font-medium text-orange-900 underline decoration-orange-300 underline-offset-4">
            {editorialTeamName}
          </Link>
          . Målet er 100–300+ artikler over 1–3 år — med fokus på long-tail søgninger som «bedste skateboard til begyndere»
          og «skatepark København».
        </p>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">Populære købsguides</h2>
            <p className="mt-2 text-stone-600">50 % af indholdet — produktguides med affiliate-indtægter.</p>
          </div>
          <Link href="/koebsguides" className="shrink-0 text-sm font-medium text-orange-900 hover:underline">
            Se alle →
          </Link>
        </div>
        <AffiliateDisclosure compact />
        <ContentCardGrid items={koebsguides} />
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-stone-900">Skateparker i Danmark</h2>
            <p className="mt-2 text-stone-600">Vores differentiator — indhold webshops sjældent laver.</p>
          </div>
          <Link href="/skateparker" className="shrink-0 text-sm font-medium text-orange-900 hover:underline">
            Se kortet →
          </Link>
        </div>
        <ContentCardGrid items={skateparker} hrefPrefix="/skateparker" />
      </section>

      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="font-semibold text-stone-900">SEO-strategi</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Hundredvis af long-tail søgninger — «BMX størrelsesguide», «trick-løbehjul til 10-årig», «indendørs
            skateparker i Danmark».
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="font-semibold text-stone-900">Monetisering</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            Affiliate (SkatePro, Blue Tomato m.fl.), Google AdSense — senere Ezoic/Mediavine og direkte samarbejder.
          </p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <h3 className="font-semibold text-stone-900">Indholdsplan</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            50 % købsguides · 30 % skateparker · 20 % community og how-to — opdateres løbende.
          </p>
        </div>
      </section>
    </div>
  );
}
