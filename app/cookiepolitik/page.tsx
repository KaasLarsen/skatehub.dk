import type { Metadata } from "next";
import { LegalLink, TrustPageShell } from "@/components/trust-page-shell";
import { contactEmail, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookiepolitik",
  description: `Cookiepolitik for ${siteName} — hvilke cookies vi bruger, Google AdSense, samtykke og hvordan du styrer valg.`,
  alternates: { canonical: `${siteUrl}/cookiepolitik` },
};

export default function CookiepolitikPage() {
  return (
    <TrustPageShell
      breadcrumbHref="/cookiepolitik"
      breadcrumbLabel="Cookiepolitik"
      title="Cookiepolitik"
      description="Information om cookies og lignende teknologier på skatehub.dk."
    >
      <p>
        {siteName} bruger cookies og lignende teknologier for at drive sitet, huske dit valg og — med dit
        samtykke — til statistik og annoncer. Denne politik supplerer vores{" "}
        <LegalLink href="/privatliv">privatlivspolitik</LegalLink>.
      </p>

      <h2>Hvad er cookies?</h2>
      <p>
        Cookies er små tekstfiler, som gemmes på din enhed, når du besøger et website. De kan være
        «førsteparts» (sat af os) eller «tredjeparts» (sat af fx Google).
      </p>

      <h2>Sådan giver du samtykke</h2>
      <p>
        Ved første besøg vises et cookie-banner. Du kan vælge <strong>«Accepter»</strong> (nødvendige +
        statistik/annoncer, når aktiveret) eller <strong>«Kun nødvendige»</strong>. Dit valg gemmes i din browser
        (localStorage under nøglen <code>skatehub-cookie-consent</code>).
      </p>
      <p>
        Du kan til enhver tid slette cookies i browserens indstillinger og dermed få banneret vist igen. Nødvendige
        funktioner kræver ikke marketing-samtykke.
      </p>

      <h2>Cookie-oversigt</h2>
      <table>
        <thead>
          <tr>
            <th>Navn / type</th>
            <th>Formål</th>
            <th>Varighed</th>
            <th>Kræver samtykke</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>skatehub-cookie-consent (localStorage)</td>
            <td>Husker dit cookievalg</td>
            <td>Indtil slettet</td>
            <td>Nej — nødvendig</td>
          </tr>
          <tr>
            <td>Google AdSense (_gcl_, etc.)</td>
            <td>Visning og måling af annoncer</td>
            <td>Varierer — se Google</td>
            <td>Ja — når annoncer er aktive</td>
          </tr>
          <tr>
            <td>Google Analytics (_ga, _ga_*)</td>
            <td>Anonymiseret besøgsstatistik</td>
            <td>Op til 24 måneder</td>
            <td>Ja — når analytics er aktiveret</td>
          </tr>
          <tr>
            <td>Partner-Ads / forhandler</td>
            <td>Affiliate-tracking ved klik på shop-links</td>
            <td>Varierer</td>
            <td>Ja — ved klik til tredjepart</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm text-[var(--text-dim)]">
        Den præcise liste kan ændre sig, når vi aktiverer eller deaktiverer tjenester. Google AdSense-script kan
        loades til site-verificering; fulde annoncer vises kun med samtykke og når annoncer er slået til.
      </p>

      <h2>Google AdSense og annoncering</h2>
      <p>
        Google bruger cookies til at vise annoncer, begrænse antal gange du ser en annonce og måle effektivitet.
        Tredjepartsleverandører, herunder Google, kan bruge cookies til at vise annoncer baseret på tidligere
        besøg på dette website eller andre websites.
      </p>
      <ul>
        <li>
          Administrér Google-annoncer:{" "}
          <a href="https://adssettings.google.com" className="link-lime" rel="noopener noreferrer" target="_blank">
            adssettings.google.com
          </a>
        </li>
        <li>
          Om cookies hos Google:{" "}
          <a
            href="https://policies.google.com/technologies/cookies"
            className="link-lime"
            rel="noopener noreferrer"
            target="_blank"
          >
            policies.google.com/technologies/cookies
          </a>
        </li>
        <li>
          Opt-out for mange annoncører (EU):{" "}
          <a href="https://www.youronlinechoices.eu" className="link-lime" rel="noopener noreferrer" target="_blank">
            youronlinechoices.eu
          </a>
        </li>
      </ul>

      <h2>Statistik (Google Analytics)</h2>
      <p>
        Hvis Google Analytics 4 er aktiveret, bruger vi det til at forstå hvordan sitet bruges (fx hvilke sider der
        læses). Data behandles med samtykke og kan være anonymiseret/aggregeret. IP-adresser kan forkortes af
        Google afhængigt af konfiguration.
      </p>

      <h2>Sådan sletter eller blokerer du cookies</h2>
      <p>De fleste browsere tillader at:</p>
      <ul>
        <li>Se hvilke cookies der er gemt og slette dem</li>
        <li>Blokere tredjeparts-cookies</li>
        <li>Slette cookies automatisk når browseren lukkes</li>
      </ul>
      <p>
        Hvis du blokerer alle cookies, kan cookie-banneret vises ved hvert besøg, og visse funktioner (fx
        annoncer) virker ikke.
      </p>

      <h2>Kontakt</h2>
      <p>
        Spørgsmål om cookies: <a href={`mailto:${contactEmail}`} className="link-lime">{contactEmail}</a>. Se også{" "}
        <LegalLink href="/privatliv">privatlivspolitik</LegalLink> og <LegalLink href="/kontakt">kontakt</LegalLink>
        .
      </p>
    </TrustPageShell>
  );
}
