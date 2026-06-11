import type { Metadata } from "next";
import { editorialTeamDescription, editorialTeamName, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om SkateHub",
  description: "Hvem står bag SkateHub.dk — Danmarks skate-hub for boards, BMX, løbehjul og skateparker.",
};

export default function OmOsPage() {
  return (
    <div className="page-wrap mx-auto max-w-3xl">
      <h1 className="page-title">
        Om <span className="text-[var(--lime)]">{siteName}</span>
      </h1>
      <div className="mt-6 space-y-4 text-lg leading-relaxed text-[var(--text-muted)]">
        <p>
          {siteName} er Danmarks samlingspunkt for skateboards, longboards, cruiser boards, trick-løbehjul, BMX,
          beskyttelse og skateparker. Vi er bygget til skater-kulturen — ikke som endnu en generisk shop-side.
        </p>
        <p>
          <strong className="text-[var(--text)]">{editorialTeamName}</strong> skriver købsguides, størrelsesguider og
          praktisk viden på dansk. Vores største fokus er{" "}
          <strong className="text-[var(--lime)]">skatepark-guiden</strong>: en voksende database over skateparker i
          hele Danmark.
        </p>
        <p>{editorialTeamDescription}</p>
        <p className="font-graffiti text-xl text-[var(--pink)]">Skate or die — but wear a helmet.</p>
      </div>
    </div>
  );
}
