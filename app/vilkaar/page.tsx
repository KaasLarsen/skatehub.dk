import type { Metadata } from "next";
import { LegalLink, TrustPageShell } from "@/components/trust-page-shell";
import { contactEmail, legalEntityName, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vilkår og betingelser",
  description: `Vilkår for brug af ${siteName} — ansvarsfraskrivelse, affiliate-oplysning, immaterielle rettigheder og ansvar.`,
  alternates: { canonical: `${siteUrl}/vilkaar` },
};

export default function VilkaarPage() {
  return (
    <TrustPageShell
      breadcrumbHref="/vilkaar"
      breadcrumbLabel="Vilkår og betingelser"
      title="Vilkår og betingelser"
      description="Regler for brug af skatehub.dk og oplysning om affiliate-indhold."
    >
      <p>
        Ved at bruge <strong>{siteName}</strong> ({siteUrl}) accepterer du disse vilkår. Siden drives af{" "}
        <strong>{legalEntityName}</strong>. Kontakt:{" "}
        <a href={`mailto:${contactEmail}`} className="link-lime">
          {contactEmail}
        </a>
        .
      </p>

      <h2>1. Hvad er SkateHub?</h2>
      <p>
        {siteName} er et informations- og inspirations-site om skateboard, BMX, trick-løbehjul, beskyttelse og
        skateparker i Danmark. Vi sælger ikke selv produkter. Alt køb sker hos tredjeparts-forhandlere via links
        fra vores sider.
      </p>

      <h2>2. Ikke professionel rådgivning</h2>
      <p>
        Indholdet på {siteName} er generel information og købsvejledning — ikke professionel rådgivning om
        sikkerhed, medicin eller jura. Skate, BMX og tricks indebærer risiko for skade. Brug altid passende
        beskyttelse (hjelm, knæbeskyttere m.m.) og følg regler på stedet.
      </p>
      <p>
        Priser, lagerstatus og produkt-specifikationer kan ændre sig hos forhandleren uden at vi opdaterer
        artikler med det samme. Tjek altid forhandlerens side før køb.
      </p>

      <h2>3. Affiliate-oplysning (reklame)</h2>
      <p>
        <strong>{siteName} deltager i affiliate-programmer.</strong> Mange links til webshops — især via Partner-Ads
        — er affiliate-links. Det betyder:
      </p>
      <ul>
        <li>Vi modtager provision, hvis du køber efter at have klikket på linket.</li>
        <li>Det koster dig ikke ekstra som forbruger.</li>
        <li>Links spores via Partner-Ads (partner-id og uid) og forhandlerens system.</li>
        <li>Vi viser affiliate-oplysning på sider med shop-links, hvor det er relevant.</li>
      </ul>
      <p>
        Affiliate-samarbejder påvirker ikke vores redaktionelle vurderinger i væsentlig grad — vi anbefaler udstyr
        vi mener passer til danske begyndere og skaters, og vi linker ikke til tilfældige shops uden for vores
        partnernetværk i brødtekst.
      </p>

      <h2>4. Annoncer (Google AdSense)</h2>
      <p>
        Siden kan vise annoncer leveret af Google AdSense og andre tjenester. Annoncer er tydeligt adskilt fra
        redaktionelt indhold. Google og annoncører kan bruge cookies — se{" "}
        <LegalLink href="/cookiepolitik">cookiepolitik</LegalLink> og{" "}
        <LegalLink href="/privatliv">privatlivspolitik</LegalLink>.
      </p>

      <h2>5. Immaterielle rettigheder</h2>
      <p>
        Tekst, layout, logo og grafik på {siteName} tilhører {legalEntityName} eller licensgivere, medmindre andet
        er angivet. Du må dele links til vores artikler, men må ikke kopiere store mængder tekst, scrape indhold
        eller genudgive det kommercielt uden skriftlig tilladelse.
      </p>

      <h2>6. Brugeradfærd og eksterne links</h2>
      <p>
        Når du klikker på links til forhandlere, skateparker eller andre sites, forlader du {siteName}. Vi er
        ikke ansvarlige for indhold, priser eller privatlivspraksis på tredjeparts-sites. Læs altid forhandlerens
        vilkår før køb.
      </p>

      <h2>7. Skatepark-information</h2>
      <p>
        Adresser, åbningstider og regler for skateparker kan ændre sig. Kommunale anlæg kan lukke, renoveres eller
        få nye skiltninger. Vi opdaterer databasen løbende, men garanterer ikke at alle oplysninger er 100 %
        aktuelle til enhver tid. Send rettelser til{" "}
        <a href={`mailto:${contactEmail}`} className="link-lime">
          {contactEmail}
        </a>
        .
      </p>

      <h2>8. Ansvarsbegrænsning</h2>
      <p>
        {siteName} leveres «som den er». I det omfang dansk ret tillader det, fraskriver vi os ansvar for tab
        eller skade der opstår ved brug af sitet, herunder fejl i guides, outdated priser, tekniske nedbrud eller
        skader i forbindelse med skate/BMX-aktivitet. Intet i disse vilkår begrænser forbrugerrettigheder du ikke
        kan fravige efter lov.
      </p>

      <h2>9. Ændringer og opsigelse</h2>
      <p>
        Vi kan ændre disse vilkår. Fortsat brug af sitet efter ændringer betyder accept. Vi kan suspendere eller
        lukke dele af sitet uden varsel af tekniske eller redaktionelle årsager.
      </p>

      <h2>10. Lovvalg og værneting</h2>
      <p>
        Vilkår er underlagt dansk ret. Tvister søges løst i mindelighed; ellers er værneting danske domstole, med
        forbehold for ufravigelige forbrugerregler.
      </p>

      <h2>11. Kontakt</h2>
      <p>
        Spørgsmål til vilkårene: <a href={`mailto:${contactEmail}`} className="link-lime">{contactEmail}</a> ·{" "}
        <LegalLink href="/kontakt">Kontakt</LegalLink> · <LegalLink href="/om-os">Om os</LegalLink>
      </p>
    </TrustPageShell>
  );
}
