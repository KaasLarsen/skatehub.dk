export type GuideFrontmatter = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  updated: string;
  published?: string;
  /** koebsguides | viden | skateparker */
  hub?: string;
};
