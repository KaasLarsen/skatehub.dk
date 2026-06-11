"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SkateHubLogo } from "@/components/skatehub-logo";

type NavItem = { href: string; label: string; activePrefix?: string };

const nav: NavItem[] = [
  { href: "/koebsguides", label: "Købsguides", activePrefix: "/koebsguides" },
  { href: "/skateparker", label: "Skateparker", activePrefix: "/skateparker" },
  { href: "/viden", label: "Guides & viden", activePrefix: "/viden" },
  { href: "/guides", label: "Alle artikler", activePrefix: "/guides" },
];

function navItemActive(item: NavItem, pathname: string) {
  if (pathname === item.href) return true;
  if (item.activePrefix && (pathname === item.activePrefix || pathname.startsWith(`${item.activePrefix}/`))) {
    return true;
  }
  return item.href !== "/" && pathname.startsWith(`${item.href}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-stone-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <SkateHubLogo className="h-9 w-9 shrink-0" />
            <div className="min-w-0">
              <span className="text-xl font-semibold tracking-tight text-stone-900 transition-colors group-hover:text-orange-700">
                SkateHub
              </span>
              <span className="mt-0.5 block truncate text-xs text-stone-600 sm:text-[0.8125rem]">
                Skate, BMX, løbehjul og skateparker i Danmark
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Hovedmenu">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  navItemActive(item, pathname)
                    ? "bg-orange-50 text-orange-900"
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="rounded-lg border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700 md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {open ? (
          <nav id={panelId} className="mt-4 flex flex-col gap-1 border-t border-stone-100 pt-4 md:hidden" aria-label="Mobilmenu">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  navItemActive(item, pathname) ? "bg-orange-50 text-orange-900" : "text-stone-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
