export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="mt-3 text-xs leading-relaxed text-[var(--text-dim)]">
        Links til shops kan være affiliate — du betaler ikke ekstra.
      </p>
    );
  }

  return (
    <aside className="info-panel mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
      <strong className="font-bold uppercase tracking-wider text-[var(--lime)]">Affiliate:</strong> Nogle links fører
      til webshops som SkatePro og Blue Tomato. Vi kan modtage en lille provision — det koster dig ikke ekstra og
      holder SkateHub kørende.
    </aside>
  );
}
