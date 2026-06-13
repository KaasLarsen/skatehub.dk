import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AffiliateTrackedLink } from "@/components/affiliate-tracked-link";
import { BlackFridayProductSearch } from "@/components/black-friday-product-search";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentCardGrid } from "@/components/content-card-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { AFFILIATE_SHOPS } from "@/lib/affiliate-shops";
import { BLACK_FRIDAY_GUIDE_SLUGS, BLACK_FRIDAY_SHOP_KEYS } from "@/lib/content/black-friday";
import { listGuidesByHub } from "@/lib/content/guides";
import { siteUrl } from "@/lib/site";

const PAGE_URL = `${siteUrl}/black-friday`;
const YEAR = new Date().getFullYear();

export const metadata: Metadata = {
  title: `Black Friday ${YEAR} — skateboard, BMX og løbehjul`,
  description:
    "Find skateboard, BMX, trick-løbehjul og beskyttelse hos vores partnere. Købsguides, live priser og tips til Black Friday og julegaver.",
  alternates: { canonical: PAGE_URL },
};

function ProductSearchFallback() {
  return <div className="mt-10 h-72 animate-pulse border-2 border-[var(--border)] bg-[var(--bg-card)]" />;
}

export default function BlackFridayPage() {
  const allGuides = listGuidesByHub("koebsguides");
  const guides = BLACK_FRIDAY_GUIDE_SLUGS.map((slug) => allGuides.find((g) => g.slug === slug)).filter(
    (g): g is NonNullable<typeof g> => g != null,
  );

  return (
    <div className="page-wrap">
      <BreadcrumbJsonLd
        items={[
          { name: "Forside", url: `${siteUrl}/` },
          { name: "Black Friday", url: PAGE_URL },
        ]}
      />
      <Breadcrumbs items={[{ href: "/", label: "Forside" }, { href: "/black-friday", label: "Black Friday" }]} />

      <p className="mt-6 inline-block border-2 border-[var(--pink)] bg-[var(--bg-card)] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--pink)]">
        Black Friday {YEAR}
      </p>
      <h1 className="page-title mt-4">
        Tilbud på <span className="text-[var(--lime)]">skate, BMX</span> og løbehjul
      </h1>
      <p className="page-lead">
        Black Friday og julegave-sæsonen er det bedste tidspunkt at opgradere gear — eller give et complete board, BMX
        eller beskyttelse i gave. Vi samler <strong>live priser fra vores partnere</strong> og peger dig videre til de
        købsguides, der faktisk hjælper dig med at vælge rigtigt.
      </p>

      <aside className="mt-8 border-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] p-5 text-sm text-[var(--text-muted)]">
        <p className="font-bold uppercase tracking-wider text-[var(--text)]">Sådan fungerer siden</p>
        <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed">
          <li>
            Priserne kommer <strong>direkte fra partner-feeds</strong> — vi opdaterer ikke manuelt med «-50%»-labels.
          </li>
          <li>
            Tjek altid <strong>endelig pris, rabat og lager</strong> hos forhandleren, når du klikker videre.
          </li>
          <li>
            Links er <strong>affiliate-links</strong> — læs mere i vores{" "}
            <Link href="/vilkaar" className="link-lime">
              vilkår
            </Link>
            .
          </li>
        </ul>
      </aside>

      <Suspense fallback={<ProductSearchFallback />}>
        <BlackFridayProductSearch />
      </Suspense>

      <section className="mt-16">
        <h2 className="font-display text-2xl uppercase tracking-wide text-[var(--text)] sm:text-3xl">
          Shop hos vores <span className="text-[var(--cyan)]">partnere</span>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
          I Black Friday-perioden kører shops typisk egne kampagnesider. Gå direkte til partneren og sammenlign med
          priserne herover.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BLACK_FRIDAY_SHOP_KEYS.map((key) => {
            const shop = AFFILIATE_SHOPS[key];
            return (
              <li key={key}>
                <AffiliateTrackedLink
                  href={shop.href}
                  merchant={shop.name}
                  placement="black-friday-shop"
                  className="sticker-card group flex items-center justify-between gap-3 p-4"
                >
                  <span className="font-display text-lg uppercase tracking-wide text-[var(--text)] group-hover:text-[var(--lime)]">
                    {shop.name}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] group-hover:text-[var(--lime)]">
                    Besøg →
                  </span>
                </AffiliateTrackedLink>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl uppercase tracking-wide text-[var(--text)] sm:text-3xl">
          Købsguides til <span className="text-[var(--lime)]">Black Friday</span>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">
          Billigst er sjældent bedst — især til børn. Læs guiden før du trykker køb, så du undgår forkert størrelse
          deck, for lille BMX eller dårlig beskyttelse.
        </p>
        <ContentCardGrid items={guides} />
      </section>

      <section className="mt-16 border-2 border-[var(--border-strong)] bg-[var(--bg-card)] p-6">
        <h2 className="font-display text-xl uppercase tracking-wide text-[var(--text)]">Tips til at handle smart</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 text-sm text-[var(--text-muted)]">
          <li>
            <strong className="text-[var(--text)]">Complete board til børn:</strong> Tjek deck-bredde og truck-størrelse
            — se{" "}
            <Link href="/guides/skateboard-stoerrelsesguide" className="link-lime">
              størrelsesguiden
            </Link>
            .
          </li>
          <li>
            <strong className="text-[var(--text)]">BMX:</strong> 20&quot; til de fleste 8–14-årige; spar ikke på hjelm —{" "}
            <Link href="/guides/bedste-bmx-hjelm" className="link-lime">
              BMX-hjelm-guide
            </Link>
            .
          </li>
          <li>
            <strong className="text-[var(--text)]">Beskyttelse:</strong> Hjelm + knæ/albue/håndled i ét sæt er den
            nemmeste julegave til nybegyndere.
          </li>
          <li>
            <strong className="text-[var(--text)]">Upgrades:</strong> Hjul, bearings og griptape er gode «billige»
            gaver til skaters der allerede har board.
          </li>
        </ul>
      </section>

      <p className="mt-12 text-center text-sm text-[var(--text-dim)]">
        Flere guides?{" "}
        <Link href="/koebsguides" className="link-lime">
          Se alle købsguides
        </Link>{" "}
        ·{" "}
        <Link href="/guides/hvad-koster-det-at-starte-paa-skateboard" className="link-lime">
          Budget til skate-start
        </Link>
      </p>
    </div>
  );
}
