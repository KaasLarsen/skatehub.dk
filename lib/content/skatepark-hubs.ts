/** URL-slug → visningsnavn for byer med hub-side. */
export const SKATEPARK_CITY_HUBS: {
  slug: string;
  city: string;
  region: string;
  title: string;
  description: string;
  paragraphs: string[];
}[] = [
  {
    slug: "koebenhavn",
    city: "København",
    region: "Hovedstaden",
    title: "Skateparker i København",
    description:
      "Oversigt over skateparker i København og omegn: street, bowl, Fælledparken, Enghave Plads, Ishøj og tips til begyndere.",
    paragraphs: [
      "København er Danmarks stærkeste skate-miljø — med både **kommunale udendørs parker**, ikoniske street-spots og indendørs haller i nærområdet. Uanset om du kører skateboard, BMX eller trick-løbehjul, finder du beton året rundt, især fra forår til efterår.",
      "Hovedstadens parker spænder fra **Fælledparkens** klassiske bowl og street på Østerbro til **Enghave Plads**' street-fokus på Vesterbro. Længere mod vestegnen ligger **[Ishøj Skatepark](/skateparker/ishoej-skatepark)** — et af landets største anlæg. **[Roskilde](/skateparker/roskilde-skatepark)** dækker midtsjælland.",
      "Som begynder: start på flade zoner, tag hjelm og knæbeskyttere med, og læs vores guide til skatepark-etikette før du dropper ind i bowl. Myldretid er typisk efter skole og i weekender — morgen og hverdag formiddag giver mere ro til ollie og grundtricks.",
    ],
  },
  {
    slug: "aarhus",
    city: "Aarhus",
    region: "Midtjylland",
    title: "Skateparker i Aarhus",
    description:
      "Find skateparker i Aarhus: Gl. Skole indendørs, udendørs spots og tips til BMX, løbehjul og begyndere i Østjylland.",
    paragraphs: [
      "Aarhus er **midtjyllands skate-hub** — med indendørs kørsel om vinteren og udendørs parker om sommeren. Byen trækker skaters fra Randers, Silkeborg og hele Østjylland.",
      "**Gl. Skole Skatepark** er det klassiske indendørs samlingspunkt med street, miniramp og flat — perfekt når regn og kulde rammer. Udendørs findes flere kommunale anlæg og spots i byens udviklingsområder.",
      "BMX og trick-løbehjul er velkomne de fleste steder — respekter flow og vent på din tur i rampen. Se vores BMX-guides og købsguides til beskyttelse før første session.",
    ],
  },
  {
    slug: "odense",
    city: "Odense",
    region: "Syddanmark",
    title: "Skateparker i Odense og på Fyn",
    description:
      "Skateparker på Fyn: Odense Skatehal, udendørs spots og praktisk info til skaters fra hele Syddanmark.",
    paragraphs: [
      "Odense og Fyn har et **tæt skate-miljø** centreret om både udendørs beton og indendørs faciliteter. **Odense Skatehal** er regionens go-to spot når vejret ikke samarbejder — med street, miniramp og flat til alle niveauer.",
      "Fyn binder skaters fra Svendborg, Middelfart og Nyborg sammen om fælles sessioner. Indendørs haller har typisk krav om hjelm og adgangsbetaling — tjek altid aktuelle åbningstider.",
      "Planlægger du tur fra Jylland? Kombinér med [Esbjerg](/skateparker/esbjerg-skatepark) mod vest eller [København](/skateparker/by/koebenhavn) over Storebælt.",
    ],
  },
  {
    slug: "aalborg",
    city: "Aalborg",
    region: "Nordjylland",
    title: "Skateparker i Aalborg og Nordjylland",
    description:
      "Skatepark i Aalborg ved havnefronten: street, bowl, BMX og løbehjul — plus tips til skaters i hele Nordjylland.",
    paragraphs: [
      "Aalborg har en **havne-nær skatepark** med street og bowl-elementer — synlig langs Vestre Havnepromenade og populær blandt lokale og besøgende.",
      "Nordjylland har færre store anlæg end hovedstaden, men Aalborg fungerer som **regionalt knudepunkt** for skaters fra Hjørring, Frederikshavn og Limfjords-området.",
      "Vestkystvind og salt luft slider på bearings — tjek vedligeholdelse efter våde sessioner. Beskyttelse anbefales især i bowl.",
    ],
  },
  {
    slug: "esbjerg",
    city: "Esbjerg",
    region: "Syddanmark",
    title: "Skateparker i Esbjerg og Vestjylland",
    description:
      "Skatepark i Esbjerg ved Gråkjær: street, bowl og info til skaters på den jyske vestkyst.",
    paragraphs: [
      "Esbjergs skatepark ved **Gråkjær** er Vestjyllands væsentlige mødested for skateboard, BMX og trick-løbehjul — med både street og bowl.",
      "Parken er **gratis og udendørs** — typisk for kommunale anlæg. Vestkysten kan være blæsende; tag ekstra lag og sikr løse genstande.",
      "Besøger du fra Østjylland? Se også [Aarhus](/skateparker/by/aarhus) og [Odense Skatehal](/skateparker/odense-skatehal) som alternativer på turen.",
    ],
  },
  {
    slug: "roskilde",
    city: "Roskilde",
    region: "Hovedstaden",
    title: "Skateparker i Roskilde og omegn",
    description:
      "Skatepark i Roskilde: street og transition tæt på Musicon — plus adgang fra Sjælland og Københavnsområdet.",
    paragraphs: [
      "Roskilde har udviklet sig til et **stærkt skate-miljø** på Sjælland uden for København — med kommunalt anlæg tæt på byens ungdoms- og kulturområder.",
      "Parken er et naturligt stop for skaters fra **Køge, Holbæk og Frederikssund** der vil undgå hovedstadens myldretid. Beton og features er velegnet til både begyndere og øvede.",
      "Kombinér besøg med en tur til [Københavns parker](/skateparker/by/koebenhavn) eller [Ishøj](/skateparker/ishoej-skatepark) samme dag med offentlig transport.",
    ],
  },
];

export const SKATEPARK_REGION_HUBS: {
  slug: string;
  region: string;
  title: string;
  description: string;
  paragraphs: string[];
}[] = [
  {
    slug: "hovedstaden",
    region: "Hovedstaden",
    title: "Skateparker i Hovedstaden",
    description:
      "Alle skateparker i Region Hovedstaden: København, Roskilde, Ishøj, Fælledparken, Enghave og mere.",
    paragraphs: [
      "Region Hovedstaden har **Danmarks tætteste koncentration af skateparker** — fra ikoniske KBH-spots til store anlæg i Ishøj og Roskilde.",
      "Udendørs parker er gratis og åbne det meste af året. Indendørs haller ligger ofte i nærområdet når regn rammer.",
      "Begyndere bør starte med flade zoner og beskyttelse — se vores købsguides til skateboard, hjelm og knæbeskyttere.",
    ],
  },
  {
    slug: "midtjylland",
    region: "Midtjylland",
    title: "Skateparker i Midtjylland",
    description:
      "Skateparker i Midtjylland: Aarhus, Silkeborg og indendørs skatehaller — street, miniramp og BMX.",
    paragraphs: [
      "Midtjylland centreres om **Aarhus** med indendørs og udendørs faciliteter. Silkeborg og omegn supplerer med kommunale parker.",
      "Vinteren drives indendørs; sommeren flytter sessionen ud på beton. BMX og løbehjul er velkomne de fleste steder.",
      "Find den rigtige størrelse BMX og beskyttelse i vores købsguides før du besøger parken.",
    ],
  },
  {
    slug: "syddanmark",
    region: "Syddanmark",
    title: "Skateparker i Syddanmark",
    description:
      "Skateparker i Syddanmark: Odense, Esbjerg, Kolding, Vejle — Fyn og Vestjylland samlet.",
    paragraphs: [
      "Syddanmark dækker **Fyn og det sydlige Jylland** — med skatehaller i Odense og udendørs parker i Esbjerg, Kolding og Vejle.",
      "Regionen har færre parker end hovedstaden, men miljøet er tæt og engageret. Indendørs haller er vigtige om vinteren.",
      "Planlæg roadtrip mellem byerne — se by-hub-siderne for detaljer per område.",
    ],
  },
  {
    slug: "nordjylland",
    region: "Nordjylland",
    title: "Skateparker i Nordjylland",
    description:
      "Skateparker i Nordjylland: Aalborg og regionens spots — street, bowl og tips til besøg.",
    paragraphs: [
      "Nordjyllands stærkeste anlæg findes i **Aalborg** ved havnefronten — med street og bowl til blandede niveauer.",
      "Mindre byer har ofte kommunale miniparks — Aalborg fungerer som regional hub for længere ture.",
      "Vind og vejr fra Limfjorden og Nordsøen — vedligehold dit board efter våde og saltede sessioner.",
    ],
  },
];

export function getCityHub(slug: string) {
  return SKATEPARK_CITY_HUBS.find((h) => h.slug === slug) ?? null;
}

export function getRegionHub(slug: string) {
  return SKATEPARK_REGION_HUBS.find((h) => h.slug === slug) ?? null;
}

export function cityHubSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function regionHubSlug(region: string): string {
  return region
    .toLowerCase()
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
