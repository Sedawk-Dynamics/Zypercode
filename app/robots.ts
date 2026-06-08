import type { MetadataRoute } from "next"
import { SITE } from "@/lib/seo"

// Served at /robots.txt — allows full crawl and points to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  }
}
