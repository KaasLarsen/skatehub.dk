import type { Metadata } from "next";
import { legalPagesUpdatedDisplay, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: `Privatlivspolitik for ${siteName}.`,
};

export default function PrivatlivPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Privatlivspolitik</h1>
      <p className="mt-2 text-sm text-stone-500">Sidst opdateret: {legalPagesUpdatedDisplay}</p>
      <div className="mt-6 space-y-4 text-stone-700">
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
