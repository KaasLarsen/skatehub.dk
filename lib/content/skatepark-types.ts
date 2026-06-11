export type SkateparkDifficulty = "begynder" | "mellem" | "avanceret" | "blandet";

export type SkateparkFeatures = {
  street?: boolean;
  bowl?: boolean;
  bmxAllowed?: boolean;
  scooterAllowed?: boolean;
  indoor?: boolean;
};

export type SkateparkFrontmatter = {
  title: string;
  description: string;
  slug: string;
  city: string;
  region: string;
  address: string;
  latitude?: number;
  longitude?: number;
  features: SkateparkFeatures;
  difficulty: SkateparkDifficulty;
  tags: string[];
  updated: string;
};
