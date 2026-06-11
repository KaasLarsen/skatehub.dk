import type { Metadata } from "next";
import { LegalLink, TrustPageShell } from "@/components/trust-page-shell";
import { contactEmail, legalEntityCountry, legalEntityName, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  description: `Privatlivspolitik for ${siteName} — cookies, Google AdSense, affiliate-links og dine rettigheder efter GDPR.`,
  alternates: { canonical: `${siteUrl}/privatliv` },
};

export default function PrivatlivPage() {
  return (
    <TrustPageShell
      breadcrumbHref="/privatliv"
      breadcrumbLabel="Privatlivspolitik"
      title="Privatlivspolitik"
      description={`Sådan behandler ${siteName} personoplysninger og cookies.`}
    >
      <p>
        Denne privatlivspolitik beskriver, hvordan <strong>{siteName}</strong> ({siteUrl}) behandler
        personoplysninger, når du besøger sitet. Dataansvarlig er <strong>{legalEntityName}</strong>,{" "}
        {legalEntityCountry}. Kontakt:{" "}
        <a href={`mailto:${contactEmail}`} className="link-lime">
          {contactEmail}
        </a>
        .
      </p>

      <h2>1. Hvilke oplysninger indsamler vi?</h2>
      <h3>Når du besøger sitet</h3>
      <ul>
        <li>
          <strong>Tekniske logdata</strong> — fx IP-adresse, browser-type, tidspunkt og side-URL. Dette behandles
          af vores hosting-udbyder (Vercel) til drift og sikkerhed.
        </li>
        <li>
          <strong>Cookies og lignende teknologier</strong> — se vores{" "}
          <LegalLink href="/cookiepolitik">cookiepolitik</LegalLink>. Vi bruger nødvendige cookies til at huske dit
          cookievalg. Med dit samtykke kan statistik- og annonceringstjenester sætte cookies.
        </li>
      </ul>
      <h3>Når du skriver til os</h3>
      <p>
        Hvis du kontakter os via e-mail, behandler vi de oplysninger du sender (navn, e-mail, beskedens indhold) for
        at besvare henvendelsen.
      </p>
      <h3>Affiliate-links</h3>
      <p>
        Når du klikker på shop-links til vores Partner-Ads partnere, sendes du videre til forhandlerens site. Vi
        modtager ikke dine betalingsoplysninger. Partner-Ads og forhandleren kan registrere klik og tekniske data
        efter deres egne politikker.
      </p>

      <h2>2. Formål og retsgrundlag</h2>
      <table>
        <thead>
          <tr>
            <th>Formål</th>
            <th>Retsgrundlag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Drift og sikkerhed af sitet</td>
            <td>Legitim interesse / kontraktopfyldelse</td>
          </tr>
          <tr>
            <td>Cookievalg (nødvendige cookies)</td>
            <td>Legitim interesse / teknisk nødvendighed</td>
          </tr>
          <tr>
            <td>Statistik (Google Analytics), hvis aktiveret</td>
            <td>Samtykke</td>
          </tr>
          <tr>
            <td>Annoncer (Google AdSense), hvis aktiveret</td>
            <td>Samtykke</td>
          </tr>
          <tr>
            <td>Besvarelse af henvendelser</td>
            <td>Legitim interesse / samtykke</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Tredjeparter og databehandlere</h2>
      <p>Vi kan dele eller lade tredjeparter behandle data i følgende tilfælde:</p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> — hosting og CDN (USA/EU afhængigt af region).{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            className="link-lime"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercels privatlivspolitik
          </a>
        </li>
        <li>
          <strong>Google Ireland Limited</strong> — Google AdSense (annoncer) og evt. Google Analytics 4
          (statistik), når aktiveret og med samtykke. Google kan bruge cookies til at vise og måle annoncer.{" "}
          <a
            href="https://policies.google.com/privacy"
            className="link-lime"
            rel="noopener noreferrer"
            target="_blank"
          >
            Googles privatlivspolitik
          </a>
          . Du kan administrere annonceringsindstillinger på{" "}
          <a
            href="https://adssettings.google.com"
            className="link-lime"
            rel="noopener noreferrer"
            target="_blank"
          >
            adssettings.google.com
          </a>
          .
        </li>
        <li>
          <strong>Partner-Ads / forhandlere</strong> — affiliate-tracking ved klik på shop-links. Læs partnerens og
          forhandlerens vilkår på destinationssitet.
        </li>
      </ul>
      <p>
        Google og andre annoncører kan bruge tredjeparts-cookies til at vise annoncer baseret på tidligere besøg på
        dette eller andre websites. Se også Googles side om{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          className="link-lime"
          rel="noopener noreferrer"
          target="_blank"
        >
          hvordan Google bruger data fra partnere
        </a>
        .
      </p>

      <h2>4. Opbevaring</h2>
      <ul>
        <li>Cookievalg gemmes i din browser (localStorage) indtil du sletter det eller ændrer valg.</li>
        <li>E-mail-korrespondance opbevares så længe det er nødvendigt for at håndtere sagen — typisk op til 24 måneder.</li>
        <li>Server-logdata opbevares af hosting-udbyder efter deres standardperioder.</li>
      </ul>

      <h2>5. Dine rettigheder</h2>
      <p>Efter GDPR har du ret til:</p>
      <ul>
        <li>Indsigt i de oplysninger vi behandler om dig</li>
        <li>Berigtigelse af forkerte oplysninger</li>
        <li>Sletning («retten til at blive glemt»), hvor betingelserne er opfyldt</li>
        <li>Begrænsning af behandling</li>
        <li>Indsigelse mod behandling baseret på legitim interesse</li>
        <li>Tilbagetrækning af samtykke (fx til cookies) — uden at påvirke lovlig behandling før tilbagetrækning</li>
        <li>Dataportabilitet, hvor relevant</li>
      </ul>
      <p>
        Kontakt <a href={`mailto:${contactEmail}`} className="link-lime">{contactEmail}</a> for at udøve dine
        rettigheder. Du kan også klage til{" "}
        <a href="https://www.datatilsynet.dk" className="link-lime" rel="noopener noreferrer" target="_blank">
          Datatilsynet
        </a>
        .
      </p>

      <h2>6. Børn</h2>
      <p>
        {siteName} henvender sig til et bredt publikum inkl. forældre. Vi indsamler ikke bevidst personoplysninger
        fra børn under 13 år. Hvis du mener, et barn har givet os oplysninger, kontakt os — så sletter vi dem.
      </p>

      <h2>7. Ændringer</h2>
      <p>
        Vi opdaterer denne politik ved ændringer i praksis (fx når nye annonce- eller analyseværktøjer aktiveres).
        Væsentlige ændringer vil fremgå af datoen øverst på siden.
      </p>

      <h2>8. Kontakt</h2>
      <p>
        Spørgsmål om privatliv: <a href={`mailto:${contactEmail}`} className="link-lime">{contactEmail}</a> eller{" "}
        <LegalLink href="/kontakt">kontaktsiden</LegalLink>. Relateret:{" "}
        <LegalLink href="/cookiepolitik">cookiepolitik</LegalLink> og{" "}
        <LegalLink href="/vilkaar">vilkår og betingelser</LegalLink>.
      </p>
    </TrustPageShell>
  );
}
