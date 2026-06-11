import Link from "next/link";
import { siteName } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-stone-600">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-md">
            <p className="font-semibold text-stone-900">{siteName}</p>
            <p className="mt-2 leading-relaxed">
              Danmarks nicheportal for skateboards, longboards, BMX, trick-løbehjul og skateparker — med købsguides,
              størrelsesguider og en voksende database over skateparker.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Indhold</p>
              <nav className="mt-3 flex flex-col gap-2" aria-label="Footer indhold">
                <Link href="/koebsguides" className="hover:text-orange-900">
                  Købsguides
                </Link>
                <Link href="/skateparker" className="hover:text-orange-900">
                  Skateparker
                </Link>
                <Link href="/viden" className="hover:text-orange-900">
                  Guides & viden
                </Link>
                <Link href="/guides" className="hover:text-orange-900">
                  Alle artikler
                </Link>
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Om sitet</p>
              <nav className="mt-3 flex flex-col gap-2" aria-label="Footer om">
                <Link href="/om-os" className="hover:text-orange-900">
                  Om os
                </Link>
                <Link href="/kontakt" className="hover:text-orange-900">
                  Kontakt
                </Link>
                <Link href="/privatliv" className="hover:text-orange-900">
                  Privatliv
                </Link>
                <Link href="/cookiepolitik" className="hover:text-orange-900">
                  Cookiepolitik
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-stone-200 pt-6 text-xs text-stone-500">
          © {new Date().getFullYear()} {siteName}. Indhold til inspiration — tjek altid produktinfo hos forhandleren.
        </p>
      </div>
    </footer>
  );
}
