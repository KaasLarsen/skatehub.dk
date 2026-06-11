import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleJsonLd, BreadcrumbJsonLd, SkateparkPlaceJsonLd } from "@/components/json-ld";
import { SkateparkMapLink, SkateparkMetaBadges } from "@/components/skatepark-meta";
import { getSkatepark, getSkateparkSlugs } from "@/lib/content/skateparks";
import { editorialTeamName, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getSkateparkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = await getSkatepark(slug);
  if (!p) return {};
  const canonical = `${siteUrl}/skateparker/${slug}`;
  return {
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      type: "article",
      title: p.frontmatter.title,
      description: p.frontmatter.description,
    },
  };
}

export default async function SkateparkPage({ params }: Props) {
  const { slug } = await params;
  const data = await getSkatepark(slug);
  if (!data) notFound();

  const { frontmatter, content, readingMinutes } = data;
  const canonical = `${siteUrl}/skateparker/${slug}`;

  return (
    <article className="page-wrap mx-auto max-w-3xl">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Skateparker", url: `${siteUrl}/skateparker` },
          { name: frontmatter.title, url: canonical },
        ]}
      />
      <SkateparkPlaceJsonLd
        name={frontmatter.title}
        description={frontmatter.description}
        url={canonical}
        address={frontmatter.address}
        city={frontmatter.city}
        latitude={frontmatter.latitude}
        longitude={frontmatter.longitude}
      />
      <ArticleJsonLd
        title={frontmatter.title}
        description={frontmatter.description}
        url={canonical}
        datePublished={frontmatter.updated}
        dateModified={frontmatter.updated}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Forside" },
          { href: "/skateparker", label: "Skateparker" },
          { href: `/skateparker/${slug}`, label: frontmatter.title },
        ]}
      />
      <header className="mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">
          {frontmatter.city} · {frontmatter.region} · {readingMinutes} min · {editorialTeamName}
        </p>
        <h1 className="page-title mt-3 text-4xl sm:text-5xl">{frontmatter.title}</h1>
        <p className="page-lead">{frontmatter.description}</p>
      </header>

      <div className="info-panel mt-6">
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Adresse</dt>
            <dd className="mt-1 text-[var(--text)]">{frontmatter.address}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">By / region</dt>
            <dd className="mt-1 text-[var(--text)]">
              {frontmatter.city}, {frontmatter.region}
            </dd>
          </div>
        </dl>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <SkateparkMetaBadges features={frontmatter.features} difficulty={frontmatter.difficulty} />
          <SkateparkMapLink
            address={frontmatter.address}
            latitude={frontmatter.latitude}
            longitude={frontmatter.longitude}
          />
        </div>
      </div>

      <div className="prose-skatehub mt-10">{content}</div>
    </article>
  );
}
