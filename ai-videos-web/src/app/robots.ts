import type { MetadataRoute } from "next";
import { siteContent } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  const base = siteContent.seo.siteUrl.replace(/\/$/, "");
  const sitemap = `${base}/sitemap.xml`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap,
  };
}