import type { Metadata } from "next";
import { LegalLink, TrustPageShell } from "@/components/trust-page-shell";
import { contactEmail, legalEntityName, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${siteName} — rettelser til skateparker, privatliv, samarbejde og feedback. E-mail: ${contactEmail}.`,
  alternates: { canonical: `${siteUrl}/kontakt` },
};

export default function KontaktPage() {
  return (
    <TrustPageShell
      breadcrumbHref="/kontakt"
      breadcrumbLabel="Kontakt"
      title="Kontakt"
      description="Vi svarer på e-mail — typisk inden for 2–5 hverdage."
    >
      <p>
        {siteName} drives af {legalEntityName}. Du er velkommen til at skrive, hvis du har spørgsmål om indhold,
        privatliv, affiliate-links eller samarbejde.
      </p>

      <h2>E-mail</h2>
      <p>
        <a href={`mailto:${contactEmail}`} className="link-lime text-xl font-bold">
          {contactEmail}
        </a>
      </p>
      <p className="text-sm text-[var(--text-dim)]">
        Vi har pt. ikke telefon-support eller fysisk kontor — al henvendelse via e-mail.
      </p>

      <h2>Det kan du skrive om</h2>
      <ul>
        <li>
          <strong>Rettelser til skateparker</strong> — forkert adresse, lukket park, nye features eller om BMX/løbehjul
          er tilladt.
        </li>
        <li>
          <strong>Fejl i guides</strong> — outdated priser, forkerte specs eller brækkede links.
        </li>
        <li>
          <strong>Privatliv og cookies</strong> — anmodning om indsigt, sletning eller spørgsmål til vores{" "}
          <LegalLink href="/privatliv">privatlivspolitik</LegalLink>.
        </li>
        <li>
          <strong>Samarbejde</strong> — forhandlere, brands eller skateparker der ønsker at blive nævnt (vi
          garanterer ikke omtale; alt indhold er redaktionelt).
        </li>
        <li>
          <strong>Affiliate og annoncer</strong> — spørgsmål til Partner-Ads-links eller Google AdSense på sitet.
        </li>
      </ul>

      <h2>Svar tid</h2>
      <p>
        Vi bestræber os på at svare inden for <strong>2–5 hverdage</strong>. Henvendelser om persondata behandles
        inden for de frister GDPR kræver (typisk senest 30 dage).
      </p>

      <h2>Juridiske henvendelser</h2>
      <p>
        For spørgsmål om <LegalLink href="/vilkaar">vilkår og betingelser</LegalLink>,{" "}
        <LegalLink href="/cookiepolitik">cookies</LegalLink> eller databehandling: brug samme e-mail og markér
        emnefeltet tydeligt (fx «Privatliv» eller «Rettelse skatepark»).
      </p>
    </TrustPageShell>
  );
}
