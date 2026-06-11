import type { Metadata } from "next";
import { legalPagesUpdatedDisplay, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: `Privatlivspolitik for ${siteName}.`,
};

export default function PrivatlivPage() {
  return (
    <div className="page-wrap mx-auto max-w-3xl">
      <h1 className="page-title text-4xl sm:text-5xl">Privatlivspolitik</h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">Sidst opdateret: {legalPagesUpdatedDisplay}</p>
      <div className="mt-6 space-y-4 text-[var(--text-muted)]">
        <p>
          {siteName} behandler personoplysninger i overensstemmelse med gældende lovgivning. Vi indsamler primært
          anonymiseret statistik via cookies, når du har givet samtykke.
        </p>
        <p>
          Kontakt os via kontakt-siden, hvis du har spørgsmål til behandling af dine oplysninger. Den fulde
          privatlivspolitik udvides, når analytics og AdSense aktiveres på produktionssitet.
        </p>
      </div>
    </div>
  );
}
