import type { MetadataRoute } from "next";
import { getGuideSlugs } from "@/lib/content/guides";
import { SKATEPARK_CITY_HUBS, SKATEPARK_REGION_HUBS } from "@/lib/content/skatepark-hubs";
import { getSkateparkSlugs } from "@/lib/content/skateparks";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/koebsguides", "/skateparker", "/viden", "/guides", "/om-os", "/kontakt", "/privatliv", "/cookiepolitik"];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const cityHubEntries: MetadataRoute.Sitemap = SKATEPARK_CITY_HUBS.map((hub) => ({
    url: `${siteUrl}/skateparker/by/${hub.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const regionHubEntries: MetadataRoute.Sitemap = SKATEPARK_REGION_HUBS.map((hub) => ({
    url: `${siteUrl}/skateparker/region/${hub.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const guideEntries: MetadataRoute.Sitemap = getGuideSlugs().map((slug) => ({
    url: `${siteUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const skateparkEntries: MetadataRoute.Sitemap = getSkateparkSlugs().map((slug) => ({
    url: `${siteUrl}/skateparker/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...cityHubEntries, ...regionHubEntries, ...guideEntries, ...skateparkEntries];
}
