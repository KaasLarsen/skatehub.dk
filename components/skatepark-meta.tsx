import type { SkateparkFeatures, SkateparkDifficulty } from "@/lib/content/skatepark-types";

const difficultyLabels: Record<SkateparkDifficulty, string> = {
  begynder: "Begynder",
  mellem: "Mellem",
  avanceret: "Avanceret",
  blandet: "Blandet niveau",
};

const badgeRotate = ["", "badge-pink", "badge-cyan", ""];

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
      {badges.map((label, i) => (
        <li key={label} className={`badge-neon ${badgeRotate[i % badgeRotate.length]}`}>
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
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-lime text-sm font-bold uppercase tracking-wider">
      Åbn i Google Maps →
    </a>
  );
}
