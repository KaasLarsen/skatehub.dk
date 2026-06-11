import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductSearch } from "@/components/product-search";
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

  return (
    <article className="page-wrap mx-auto max-w-3xl">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Guides", url: `${siteUrl}/guides` },
          { name: frontmatter.title, url: canonical },
        ]}
      />
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
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-dim)]">
          {readingMinutes} min · Opdateret {frontmatter.updated} · {editorialTeamName}
        </p>
        <h1 className="page-title mt-3 text-4xl sm:text-5xl">{frontmatter.title}</h1>
        <p className="page-lead">{frontmatter.description}</p>
      </header>

      <div className="prose-skatehub mt-10">{content}</div>

      {frontmatter.hub === "koebsguides" ? (
        <ProductSearch
          defaultQuery={frontmatter.tags?.slice(0, 2).join(" ") || "skateboard"}
          placement={`guide-${slug}`}
          title="Find produkter til denne guide"
        />
      ) : null}

      {frontmatter.hub ? (
        <p className="mt-12 text-sm text-[var(--text-dim)]">
          <Link href={`/${frontmatter.hub}`} className="link-lime">
            ← Tilbage til {frontmatter.hub === "koebsguides" ? "købsguides" : frontmatter.hub}
          </Link>
        </p>
      ) : null}
    </article>
  );
}
