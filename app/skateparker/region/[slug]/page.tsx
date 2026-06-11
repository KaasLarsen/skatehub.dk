import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkateparkHubLayout } from "@/components/skatepark-hub-layout";
import { getRegionHub, SKATEPARK_REGION_HUBS } from "@/lib/content/skatepark-hubs";
import { listSkateparksByRegion } from "@/lib/content/skateparks";
import { siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SKATEPARK_REGION_HUBS.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getRegionHub(slug);
  if (!hub) return {};
  const canonical = `${siteUrl}/skateparker/region/${slug}`;
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical },
    openGraph: { url: canonical, title: hub.title, description: hub.description },
  };
}

export default async function SkateparkRegionHubPage({ params }: Props) {
  const { slug } = await params;
  const hub = getRegionHub(slug);
  if (!hub) notFound();

  const parks = listSkateparksByRegion(hub.region);
  const canonical = `${siteUrl}/skateparker/region/${slug}`;

  return (
    <SkateparkHubLayout
      canonical={canonical}
      title={hub.title}
      description={hub.description}
      breadcrumbLabel={hub.region}
      paragraphs={hub.paragraphs}
      parks={parks}
      relatedLinks={[
        { href: "/skateparker", label: "Alle skateparker" },
        { href: "/guides/skatepark-etikette-danmark", label: "Skatepark-etikette" },
      ]}
    />
  );
}
