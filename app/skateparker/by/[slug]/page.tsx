import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkateparkHubLayout } from "@/components/skatepark-hub-layout";
import { getCityHub, SKATEPARK_CITY_HUBS, regionHubSlug } from "@/lib/content/skatepark-hubs";
import { listSkateparksByCity } from "@/lib/content/skateparks";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SKATEPARK_CITY_HUBS.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getCityHub(slug);
  if (!hub) return {};
  const canonical = `${siteUrl}/skateparker/by/${slug}`;
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical },
    openGraph: { url: canonical, title: hub.title, description: hub.description },
  };
}

export default async function SkateparkCityHubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getCityHub(slug);
  if (!hub) notFound();

  const parks = listSkateparksByCity(hub.city);
  const canonical = `${siteUrl}/skateparker/by/${slug}`;

  return (
    <SkateparkHubLayout
      canonical={canonical}
      title={hub.title}
      description={hub.description}
      breadcrumbLabel={hub.city}
      paragraphs={hub.paragraphs}
      parks={parks}
      relatedLinks={[
        { href: `/skateparker/region/${regionHubSlug(hub.region)}`, label: `Hele ${hub.region}` },
        { href: "/skateparker", label: "Alle skateparker" },
        { href: "/koebsguides", label: "Købsguides" },
      ]}
    />
  );
}
