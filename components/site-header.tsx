"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { SkateHubLogo } from "@/components/skatehub-logo";

type NavItem = { href: string; label: string; activePrefix?: string };

const nav: NavItem[] = [
  { href: "/koebsguides", label: "Shop guides", activePrefix: "/koebsguides" },
  { href: "/skateparker", label: "Skateparker", activePrefix: "/skateparker" },
  { href: "/viden", label: "Learn", activePrefix: "/viden" },
  { href: "/guides", label: "Alt indhold", activePrefix: "/guides" },
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
    <header className="relative z-20 border-b-2 border-[var(--border-strong)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex min-w-0 items-center gap-3">
            <SkateHubLogo className="h-11 w-11 shrink-0 transition group-hover:scale-105" />
            <div className="min-w-0 leading-none">
              <span className="font-display text-2xl uppercase tracking-widest text-[var(--text)] transition group-hover:text-[var(--lime)] sm:text-3xl">
                SkateHub
              </span>
              <span className="font-graffiti mt-1 block truncate text-sm text-[var(--pink)] sm:text-base">
                shred · roll · ride
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Hovedmenu">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                  navItemActive(item, pathname) ? "nav-active" : "nav-idle"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="border-2 border-[var(--border-strong)] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[var(--text)] md:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {open ? (
          <nav
            id={panelId}
            className="mt-3 flex flex-col gap-1 border-t border-[var(--border)] pt-3 md:hidden"
            aria-label="Mobilmenu"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-2 px-3 py-2 text-xs font-bold uppercase tracking-wider ${
                  navItemActive(item, pathname) ? "nav-active" : "nav-idle"
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
