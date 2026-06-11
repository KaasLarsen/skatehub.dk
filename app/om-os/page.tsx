import type { Metadata } from "next";
import { LegalLink, TrustPageShell } from "@/components/trust-page-shell";
import {
  contactEmail,
  editorialTeamDescription,
  editorialTeamName,
  legalEntityName,
  siteName,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Om SkateHub",
  description:
    "Hvem står bag SkateHub.dk — redaktionelle købsguides, skatepark-database og affiliate-samarbejde. Danmarks skate-hub for boards, BMX og løbehjul.",
  alternates: { canonical: `${siteUrl}/om-os` },
};

export default function OmOsPage() {
  return (
    <TrustPageShell
      breadcrumbHref="/om-os"
      breadcrumbLabel="Om os"
      title={`Om ${siteName}`}
      description="Danmarks uafhængige skate-hub — guides, skateparker og praktisk viden på dansk."
    >
      <p>
        <strong>{siteName}</strong> ({siteUrl.replace("https://", "")}) er et dansk niche-site for skateboard,
        longboard, BMX, trick-løbehjul, beskyttelsesudstyr og skateparker. Vi skriver redaktionelle guides på
        dansk — ikke generiske produktlister kopieret fra webshops.
      </p>

      <h2>Hvad vi laver</h2>
      <ul>
        <li>
          <strong>Købsguides</strong> — skateboard til børn og begyndere, BMX, trick-løbehjul, hjul, hjelme og
          beskyttelse. Se <LegalLink href="/koebsguides">alle købsguides</LegalLink>.
        </li>
        <li>
          <strong>Skatepark-database</strong> — adresser, features og praktisk info om skateparker i hele
          Danmark. Se <LegalLink href="/skateparker">skateparker</LegalLink>.
        </li>
        <li>
          <strong>How-to og viden</strong> — tricks, vedligeholdelse, etikette og størrelsesguider. Se{" "}
          <LegalLink href="/viden">guides & viden</LegalLink>.
        </li>
      </ul>

      <h2>Hvem skriver indholdet?</h2>
      <p>
        <strong>{editorialTeamName}</strong> står for research, skrivning og opdatering af artikler.{" "}
        {editorialTeamDescription} Vi tester ikke alt udstyr fysisk i et laboratorium — anbefalinger bygger på
        erfaring fra skate-miljøet, produkt-specifikationer, tilgængelighed hos danske forhandlere og hvad der
        giver mening til begyndere og øvede i danske forhold.
      </p>

      <h2>Sådan tjener vi penge</h2>
      <p>
        {siteName} er finansieret via <strong>affiliate-samarbejder</strong> og kan i fremtiden vise{" "}
        <strong>annoncer</strong> (Google AdSense). Når du klikker på shop-links og køber hos vores partnere,
        modtager vi provision — uden merpris for dig. Læs{" "}
        <LegalLink href="/vilkaar">vilkår og affiliate-oplysning</LegalLink>.
      </p>
      <p>
        Affiliate-indtægter påvirker ikke hvilke produkter vi anbefaler. Vi linker kun til shops vi vurderer
        relevante for danske skaters, og vi blokerer links til ikke-godkendte partnere i vores indhold.
      </p>

      <h2>Redaktionelle retningslinjer</h2>
      <ul>
        <li>Guides skrives på dansk med fokus på begyndere, forældre og lokale forhold.</li>
        <li>Priser angives som vejledende og kan ændre sig hos forhandleren.</li>
        <li>Skatepark-info opdateres løbende — rettelser modtages gerne via kontakt.</li>
        <li>Vi sælger ikke selv produkter; køb sker altid hos tredjeparts-forhandlere.</li>
      </ul>

      <h2>Kontakt</h2>
      <p>
        Spørgsmål, rettelser eller samarbejde? Skriv til{" "}
        <a href={`mailto:${contactEmail}`} className="link-lime">
          {contactEmail}
        </a>{" "}
        eller besøg vores <LegalLink href="/kontakt">kontaktside</LegalLink>. Dataansvarlig: {legalEntityName}.
      </p>
    </TrustPageShell>
  );
}
