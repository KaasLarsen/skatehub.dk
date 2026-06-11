import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { contactEmail, legalPagesUpdatedDisplay, siteUrl } from "@/lib/site";

type TrustPageShellProps = {
  title: string;
  description?: string;
  breadcrumbLabel: string;
  breadcrumbHref: string;
  children: React.ReactNode;
};

export function TrustPageShell({
  title,
  description,
  breadcrumbLabel,
  breadcrumbHref,
  children,
}: TrustPageShellProps) {
  const pageUrl = `${siteUrl}${breadcrumbHref}`;

  return (
    <div className="page-wrap mx-auto max-w-3xl">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: breadcrumbLabel, url: pageUrl },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: breadcrumbHref, label: breadcrumbLabel }]} />
      <h1 className="page-title mt-6">{title}</h1>
      {description ? <p className="page-lead">{description}</p> : null}
      <p className="mt-2 text-sm text-[var(--text-dim)]">Sidst opdateret: {legalPagesUpdatedDisplay}</p>
      <div className="legal-prose mt-8">{children}</div>
    </div>
  );
}

export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="link-lime">
      {children}
    </Link>
  );
}

export function LegalMailLink() {
  return (
    <a href={`mailto:${contactEmail}`} className="link-lime">
      {contactEmail}
    </a>
  );
}
