import type { Metadata } from "next";
import Link from "next/link";
import { ContentCardGrid } from "@/components/content-card-grid";
import { DealSeasonBanner } from "@/components/deal-season-banner";
import { OldschoolDeck } from "@/components/graffiti-backdrop";
import { listBangerGuides } from "@/lib/content/banger-guides";
import { listSkateparks } from "@/lib/content/skateparks";
import { editorialTeamName, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteName} – Danmarks hub for skate, BMX og skateparker`,
  description:
    "Købsguides til skateboards, BMX og trick-løbehjul — plus Danmarks voksende database over skateparker. For skaters, af skaters.",
  alternates: { canonical: siteUrl },
};

const heroLinks = [
  {
    href: "/guides/bedste-skate-sko-til-begyndere",
    label: "Skate-sko",
    tag: "Køb",
    blurb: "Flad sål og forstærkning til skatepark.",
  },
  {
    href: "/guides/skateboard-stoerrelsesguide",
    label: "Deck-størrelse",
    tag: "Køb",
    blurb: "7,75 eller 8,0? Tabel efter alder og højde.",
  },
  {
    href: "/guides/bedste-beskyttelsesaet-boern",
    label: "Beskyttelse børn",
    tag: "Parents",
    blurb: "Hjelm, knæ, albue og håndled i ét sæt.",
  },
  {
    href: "/guides/saadan-skubber-du-paa-skateboard",
    label: "Lær at skubbe",
    tag: "Learn",
    blurb: "Push, dreje og stop — før ollie.",
  },
  {
    href: "/guides/hvad-koster-det-at-starte-paa-skateboard",
    label: "Hvad koster det?",
    tag: "Budget",
    blurb: "Komplet prisguide — board, hjelm og beskyttelse.",
  },
  {
    href: "/guides/bedste-skateboard-til-boern",
    label: "Board til børn",
    tag: "Parents",
    blurb: "Skateboard efter alder — 6, 8, 10 og 12 år.",
  },
  {
    href: "/koebsguides",
    label: "Købsguides",
    tag: "Shop",
    blurb: "Boards, BMX, løbehjul og beskyttelse — hvad skal du vælge?",
  },
  {
    href: "/skateparker",
    label: "Skateparker",
    tag: "Spots",
    blurb: "Find parker i hele DK — street, bowl, indoor og kort.",
  },
  {
    href: "/viden",
    label: "Learn",
    tag: "How-to",
    blurb: "Tricks, vedligeholdelse og guides til begyndere.",
  },
];

const marqueeWords = [
  "SHRED",
  "OLLIE",
  "KICKFLIP",
  "BMX",
  "BOWL",
  "STREET",
  "SKATEPARK",
  "OLDSCHOOL",
  "LØBEHJUL",
  "GRIND",
  "SESSION",
  "SKATEHUB",
];

const cultureCards = [
  {
    title: "Find dit setup",
    body: "Complete boards, BMX, trick-løbehjul og reservedele — start med vores top-købsguides.",
    href: "/koebsguides",
    accent: "lime" as const,
  },
  {
    title: "Find din park",
    body: "Danmarks største skatepark-database. Adresse, kort, street/bowl og om BMX er tilladt.",
    href: "/skateparker",
    accent: "pink" as const,
  },
  {
    title: "Lær noget nyt",
    body: "Ollie, vedligeholdelse, størrelsesguider — praktisk viden til din næste session.",
    href: "/viden",
    accent: "cyan" as const,
  },
];

export default function HomePage() {
  const koebsguides = listBangerGuides();
  const skateparker = listSkateparks().slice(0, 4);

  return (
    <div className="page-wrap">
      <DealSeasonBanner />
      {/* Marquee strip */}
      <div className="mb-8 overflow-hidden border-y-2 border-[var(--border-strong)] bg-[var(--bg-elevated)] py-2">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="font-display text-sm uppercase tracking-[0.3em] text-[var(--text-dim)]"
            >
              {word}
              <span className="mx-4 text-[var(--pink)]">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="hero-panel">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-graffiti text-xl text-[var(--pink)] sm:text-2xl">Danmarks skate-hub</p>
            <h1 className="graffiti-tag font-display mt-2 text-5xl uppercase leading-[0.95] tracking-wide text-[var(--text)] sm:text-7xl">
              Skate.
              <br />
              <span className="text-[var(--lime)]">Shred.</span>
              <br />
              Ride.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              {siteName} er for alle der kører board, BMX eller trick-løbehjul. Købsguides, skatepark-spots og
              how-to — <strong className="text-[var(--text)]">bygget til skater-kulturen</strong>, ikke endnu en
              kedelig shop-side.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroLinks.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`sticker-card group ${i % 2 === 1 ? "sticker-card-alt" : ""}`}
                  >
                    <span className="badge-neon">{item.tag}</span>
                    <span className="mt-2 block font-display text-xl uppercase tracking-wide text-[var(--text)] group-hover:text-[var(--lime)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-[var(--text-muted)]">{item.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-[var(--text-dim)]">
              Skrevet af{" "}
              <Link href="/om-os" className="link-lime">
                {editorialTeamName}
              </Link>
            </p>
          </div>

          <div className="hidden justify-center lg:flex">
            <OldschoolDeck className="h-[420px] w-auto drop-shadow-[8px_8px_0_rgba(200,245,66,0.3)]" />
          </div>
        </div>
      </section>

      {/* Culture cards */}
      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        {cultureCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`sticker-card ${card.accent === "pink" ? "sticker-card-alt" : ""}`}
          >
            <h3 className="font-display text-2xl uppercase tracking-wide text-[var(--text)]">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{card.body}</p>
            <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[var(--lime)]">
              Gå til →
            </span>
          </Link>
        ))}
      </section>

      {/* Guides section */}
      <section className="mt-20">
        <div className="flex items-end justify-between gap-4 border-b-2 border-[var(--border)] pb-4">
          <div>
            <h2 className="section-title">Fresh guides</h2>
            <p className="mt-2 text-[var(--text-muted)]">
              Vores top-købsguides —{" "}
              <Link href="/guides/skateboard-stoerrelsesguide" className="link-lime">
                størrelse
              </Link>
              ,{" "}
              <Link href="/guides/bedste-skate-sko-til-begyndere" className="link-lime">
                skate-sko
              </Link>{" "}
              og{" "}
              <Link href="/guides/bedste-beskyttelsesaet-boern" className="link-lime">
                beskyttelse
              </Link>
              .
            </p>
          </div>
          <Link href="/koebsguides" className="section-link">
            Se alle →
          </Link>
        </div>
        <ContentCardGrid items={koebsguides} />
      </section>

      {/* Skateparks section */}
      <section className="mt-20">
        <div className="flex items-end justify-between gap-4 border-b-2 border-[var(--border)] pb-4">
          <div>
            <h2 className="section-title">
              Skateparker <span className="text-[var(--pink)]">i DK</span>
            </h2>
            <p className="mt-2 text-[var(--text-muted)]">
              Find dit næste spot — street, bowl og indoor. Start med{" "}
              <Link href="/skateparker/by/koebenhavn" className="link-lime">
                København
              </Link>{" "}
              eller{" "}
              <Link href="/skateparker/region/hovedstaden" className="link-lime">
                din region
              </Link>
              .
            </p>
          </div>
          <Link href="/skateparker" className="section-link">
            Se kortet →
          </Link>
        </div>
        <ContentCardGrid items={skateparker} hrefPrefix="/skateparker" altCards />
      </section>
    </div>
  );
}
