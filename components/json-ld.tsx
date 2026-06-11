import {
  contactEmail,
  editorialTeamDescription,
  editorialTeamName,
  editorialTeamSchemaId,
  organizationLogoUrl,
  organizationSameAs,
  organizationSchemaId,
  siteName,
  siteUrl,
} from "@/lib/site";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": organizationSchemaId,
        name: siteName,
        url: siteUrl,
        logo: organizationLogoUrl,
        email: contactEmail,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: contactEmail,
          availableLanguage: ["Danish", "English"],
        },
        sameAs: organizationSameAs(),
      }}
    />
  );
}

export function WebSiteJsonLd({ url }: { url: string }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url,
        publisher: { "@id": organizationSchemaId },
        inLanguage: "da-DK",
      }}
    />
  );
}

type BreadcrumbItem = { name: string; url: string };

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

type ArticleJsonLdProps = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
};

export function ArticleJsonLd({ title, description, url, datePublished, dateModified }: ArticleJsonLdProps) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        datePublished,
        dateModified,
        author: {
          "@type": "Organization",
          "@id": editorialTeamSchemaId,
          name: editorialTeamName,
          description: editorialTeamDescription,
        },
        publisher: { "@id": organizationSchemaId },
        inLanguage: "da-DK",
      }}
    />
  );
}

type PlaceJsonLdProps = {
  name: string;
  description: string;
  url: string;
  address: string;
  city: string;
  latitude?: number;
  longitude?: number;
};

export function SkateparkPlaceJsonLd({ name, description, url, address, city, latitude, longitude }: PlaceJsonLdProps) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "SportsActivityLocation",
        name,
        description,
        url,
        address: {
          "@type": "PostalAddress",
          streetAddress: address,
          addressLocality: city,
          addressCountry: "DK",
        },
        ...(latitude != null && longitude != null
          ? { geo: { "@type": "GeoCoordinates", latitude, longitude } }
          : {}),
      }}
    />
  );
}
