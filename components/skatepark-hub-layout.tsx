import Link from "next/link";
import { AffiliateDisclosure } from "@/components/affiliate-disclosure";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SkateparkMetaBadges } from "@/components/skatepark-meta";
import type { SkateparkFrontmatter } from "@/lib/content/skatepark-types";
import { siteUrl } from "@/lib/site";

type Props = {
  canonical: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  paragraphs: string[];
  parks: SkateparkFrontmatter[];
  relatedLinks?: { href: string; label: string }[];
};

export function SkateparkHubLayout({
  canonical,
  title,
  description,
  breadcrumbLabel,
  paragraphs,
  parks,
  relatedLinks = [],
}: Props) {
  return (
    <div className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Skateparker", url: `${siteUrl}/skateparker` },
          { name: breadcrumbLabel, url: canonical },
        ]}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "Forside" },
          { href: "/skateparker", label: "Skateparker" },
          { href: canonical.replace(siteUrl, ""), label: breadcrumbLabel },
        ]}
      />
      <h1 className="page-title mt-6">{title}</h1>
      <p className="page-lead">{description}</p>

      <div className="prose-skatehub mt-8 max-w-3xl">
        {paragraphs.map((p) => {
          const html = p.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
          const withLinks = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="link-lime">$1</a>');
          return (
            <p
              key={p.slice(0, 40)}
              className="mt-4 text-lg leading-relaxed text-[var(--text-muted)]"
              dangerouslySetInnerHTML={{ __html: withLinks }}
            />
          );
        })}
      </div>

      <AffiliateDisclosure compact />

      <section className="mt-12">
        <h2 className="section-title">
          Parker <span className="text-[var(--pink)]">i området</span>
        </h2>
        {parks.length === 0 ? (
          <p className="mt-4 text-[var(--text-muted)]">Vi udvider databasen løbende — tjek igen snart.</p>
        ) : (
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
        )}
      </section>

      {relatedLinks.length > 0 ? (
        <section className="mt-12 border-t-2 border-[var(--border)] pt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Relateret</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {relatedLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="link-lime text-sm font-semibold uppercase tracking-wider">
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-10 text-sm text-[var(--text-muted)]">
        Mangler udstyr? Se{" "}
        <Link href="/koebsguides" className="link-lime">
          købsguides
        </Link>{" "}
        og{" "}
        <Link href="/guides/skatepark-etikette-danmark" className="link-lime">
          skatepark-etikette
        </Link>
        .
      </p>
    </div>
  );
}
