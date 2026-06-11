import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { getGuide, getGuideSlugs } from "@/lib/content/guides";
import { editorialTeamName, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = await getGuide(slug);
  if (!g) return {};
  const canonical = `${siteUrl}/guides/${slug}`;
  return {
    title: g.frontmatter.title,
    description: g.frontmatter.description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      type: "article",
      title: g.frontmatter.title,
      description: g.frontmatter.description,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const data = await getGuide(slug);
  if (!data) notFound();

  const { frontmatter, content, readingMinutes } = data;
  const canonical = `${siteUrl}/guides/${slug}`;
  const published = frontmatter.published || frontmatter.updated;

  const breadcrumbItems = [
    { name: "Forside", url: `${siteUrl}/` },
    { name: "Guides", url: `${siteUrl}/guides` },
    { name: frontmatter.title, url: canonical },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ArticleJsonLd
        title={frontmatter.title}
        description={frontmatter.description}
        url={canonical}
        datePublished={published}
        dateModified={frontmatter.updated}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Forside" },
          { href: "/guides", label: "Guides" },
          { href: `/guides/${slug}`, label: frontmatter.title },
        ]}
      />
      <header className="mt-6">
        <p className="text-sm text-stone-500">
          {readingMinutes} min læsning · Opdateret {frontmatter.updated} · {editorialTeamName}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">{frontmatter.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-700">{frontmatter.description}</p>
      </header>

      <div className="mt-6">
        <AffiliateDisclosure />
      </div>

      <div className="prose-skatehub mt-10">{content}</div>

      {frontmatter.hub ? (
        <p className="mt-12 text-sm text-stone-600">
          <Link href={`/${frontmatter.hub}`} className="font-medium text-orange-900 hover:underline">
            ← Tilbage til {frontmatter.hub === "koebsguides" ? "købsguides" : frontmatter.hub}
          </Link>
        </p>
      ) : null}
    </article>
  );
}
