import type { Metadata } from "next";
import { legalPagesUpdatedDisplay, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookiepolitik",
  description: `Cookiepolitik for ${siteName}.`,
};

export default function CookiepolitikPage() {
  return (
    <div className="page-wrap mx-auto max-w-3xl">
      <h1 className="page-title text-4xl sm:text-5xl">Cookiepolitik</h1>
      <p className="mt-2 text-sm text-[var(--text-dim)]">Sidst opdateret: {legalPagesUpdatedDisplay}</p>
      <div className="mt-6 space-y-4 text-[var(--text-muted)]">
        <p>
          {siteName} bruger cookies til at huske dit cookievalg og — med dit samtykke — til statistik (Google
          Analytics) og annoncer (Google AdSense).
        </p>
        <p>
          Du kan vælge «Kun nødvendige» i cookie-banneret eller slette cookies i browseren. Nødvendige cookies
          sikrer grundlæggende funktion som at huske dit valg.
        </p>
      </div>
    </div>
  );
}
