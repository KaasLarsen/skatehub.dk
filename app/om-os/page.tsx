import type { Metadata } from "next";
import { editorialTeamDescription, editorialTeamName, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om SkateHub",
  description: "Hvem står bag SkateHub.dk — Danmarks nicheportal for skate, BMX, løbehjul og skateparker.",
};

export default function OmOsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-semibold tracking-tight text-stone-900">Om {siteName}</h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-stone-700">
        <p>
          {siteName} er Danmarks samlingspunkt for skateboards, longboards, cruiser boards, trick-løbehjul, BMX,
          beskyttelse og skateparker. Vi er bygget som en nicheportal — ikke en ren affiliate-side.
        </p>
        <p>
          <strong className="font-semibold text-stone-900">{editorialTeamName}</strong> skriver købsguides,
          størrelsesguider og praktisk viden på dansk. Vores største differentiator er{" "}
          <strong className="font-semibold text-stone-900">skatepark-guiden</strong>: en voksende database over
          skateparker i hele Danmark med adresse, kort og faciliteter.
        </p>
        <p>{editorialTeamDescription}</p>
        <p>
          Indtægter kommer fra affiliate-samarbejder (fx SkatePro og Blue Tomato), display-annoncer og på sigt
          direkte partnerskaber. Det finansierer driften — du betaler ikke ekstra hos forhandlerne.
        </p>
      </div>
    </div>
  );
}
