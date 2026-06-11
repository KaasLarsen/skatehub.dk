export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="text-xs leading-relaxed text-stone-500">
        Links til webshops kan være affiliate-links. Du betaler ikke ekstra — vi kan modtage en lille provision.
      </p>
    );
  }

  return (
    <aside className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-relaxed text-stone-600">
      <strong className="font-medium text-stone-800">Affiliate-oplysning:</strong> Nogle links på SkateHub fører til
      webshops som SkatePro, Blue Tomato og andre. Hvis du køber via et link, kan vi modtage en lille provision uden
      at det koster dig ekstra. Det hjælper med at holde sitet kørende.
    </aside>
  );
}
