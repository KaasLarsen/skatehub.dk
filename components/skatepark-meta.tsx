import type { SkateparkFeatures, SkateparkDifficulty } from "@/lib/content/skatepark-types";

const difficultyLabels: Record<SkateparkDifficulty, string> = {
  begynder: "Begynder",
  mellem: "Mellem",
  avanceret: "Avanceret",
  blandet: "Blandet niveau",
};

export function SkateparkMetaBadges({
  features,
  difficulty,
}: {
  features: SkateparkFeatures;
  difficulty: SkateparkDifficulty;
}) {
  const badges: string[] = [];
  if (features.street) badges.push("Street");
  if (features.bowl) badges.push("Bowl");
  if (features.indoor) badges.push("Indendørs");
  if (features.bmxAllowed) badges.push("BMX OK");
  if (features.scooterAllowed) badges.push("Løbehjul OK");
  badges.push(difficultyLabels[difficulty]);

  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((label) => (
        <li
          key={label}
          className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-900 ring-1 ring-orange-100"
        >
          {label}
        </li>
      ))}
    </ul>
  );
}

export function SkateparkMapLink({
  address,
  latitude,
  longitude,
}: {
  address: string;
  latitude?: number;
  longitude?: number;
}) {
  const query =
    latitude != null && longitude != null
      ? `${latitude},${longitude}`
      : encodeURIComponent(`${address}, Danmark`);
  const href = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-medium text-orange-900 underline decoration-orange-300 underline-offset-4 hover:text-orange-950"
    >
      Åbn i Google Maps
    </a>
  );
}
