import Link from "next/link";
import { SkateHubLogo } from "@/components/skatehub-logo";
import { siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative z-20 mt-auto border-t-2 border-[var(--border-strong)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-[var(--text-muted)]">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <SkateHubLogo className="h-9 w-9" />
              <p className="font-display text-2xl uppercase tracking-widest text-[var(--text)]">{siteName}</p>
            </div>
            <p className="mt-3 leading-relaxed">
              Danmarks skate-hub — boards, BMX, trick-løbehjul og skateparker. Købsguides, spots og viden til alle der
              shredder.
            </p>
            <p className="font-graffiti mt-2 text-lg text-[var(--pink)]">Stay rolling.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Indhold</p>
              <nav className="mt-3 flex flex-col gap-2" aria-label="Footer indhold">
                <Link href="/koebsguides" className="transition hover:text-[var(--lime)]">
                  Købsguides
                </Link>
                <Link href="/skateparker" className="transition hover:text-[var(--lime)]">
                  Skateparker
                </Link>
                <Link href="/viden" className="transition hover:text-[var(--lime)]">
                  Guides & viden
                </Link>
                <Link href="/guides" className="transition hover:text-[var(--lime)]">
                  Alle artikler
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--lime)]">Om sitet</p>
              <nav className="mt-3 flex flex-col gap-2" aria-label="Footer om">
                <Link href="/om-os" className="transition hover:text-[var(--lime)]">
                  Om os
                </Link>
                <Link href="/kontakt" className="transition hover:text-[var(--lime)]">
                  Kontakt
                </Link>
                <Link href="/privatliv" className="transition hover:text-[var(--lime)]">
                  Privatliv
                </Link>
                <Link href="/cookiepolitik" className="transition hover:text-[var(--lime)]">
                  Cookies
                </Link>
                <Link href="/vilkaar" className="transition hover:text-[var(--lime)]">
                  Vilkår
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-[var(--border)] pt-6 text-xs leading-relaxed text-[var(--text-dim)]">
          © {new Date().getFullYear()} {siteName}. Indhold kan indeholde affiliate-links og annoncer.{" "}
          <Link href="/vilkaar" className="link-lime">
            Vilkår
          </Link>
          {" · "}
          <Link href="/privatliv" className="link-lime">
            Privatliv
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
