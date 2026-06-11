import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import { mdxComponents } from "@/lib/content/mdx-components";
import type { SkateparkFrontmatter } from "@/lib/content/skatepark-types";

export type { SkateparkFrontmatter } from "@/lib/content/skatepark-types";

const skateparksDir = path.join(process.cwd(), "content/skateparker");

export function getSkateparkSlugs(): string[] {
  if (!fs.existsSync(skateparksDir)) return [];
  return fs
    .readdirSync(skateparksDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function listSkateparks(): SkateparkFrontmatter[] {
  return getSkateparkSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(skateparksDir, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return { ...(data as SkateparkFrontmatter), slug };
    })
    .sort((a, b) => a.city.localeCompare(b.city, "da"));
}

export function listSkateparksByRegion(region: string): SkateparkFrontmatter[] {
  const needle = region.toLowerCase();
  return listSkateparks().filter((p) => p.region.toLowerCase() === needle);
}

export function listSkateparksByCity(city: string): SkateparkFrontmatter[] {
  const needle = city.toLowerCase();
  return listSkateparks().filter((p) => p.city.toLowerCase() === needle);
}

export async function getSkatepark(slug: string) {
  const full = path.join(skateparksDir, `${slug}.mdx`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { content: body, data } = matter(raw);
  const fm = data as SkateparkFrontmatter;
  const rt = readingTime(body);

  const { content } = await compileMDX({
    source: body,
    options: { parseFrontmatter: false },
    components: mdxComponents,
  });

  return {
    frontmatter: fm,
    content,
    readingMinutes: Math.max(1, Math.round(rt.minutes)),
    wordCount: rt.words,
  };
}

export function getSkateparkRegions(): string[] {
  const regions = new Set(listSkateparks().map((p) => p.region));
  return [...regions].sort((a, b) => a.localeCompare(b, "da"));
}

export function getSkateparkCities(): string[] {
  const cities = new Set(listSkateparks().map((p) => p.city));
  return [...cities].sort((a, b) => a.localeCompare(b, "da"));
}
