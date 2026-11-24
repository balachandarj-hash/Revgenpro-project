import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/lib/routes";
import { siteContent } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteRoutes.map((path) => ({
    url: absoluteUrl(path, siteContent.seo.siteUrl),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}