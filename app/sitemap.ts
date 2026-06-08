import type { MetadataRoute } from "next"
import { abs } from "@/lib/seo"
import { services, segments } from "@/lib/site-content"

// Served at /sitemap.xml — lists every canonical URL with lastmod & priority.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/who-we-serve", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/how-it-works", priority: 0.7, changeFrequency: "yearly" },
    { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ]

  const servicePaths = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  const segmentPaths = segments.map((s) => ({
    path: `/who-we-serve/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }))

  return [...staticPaths, ...servicePaths, ...segmentPaths].map((e) => ({
    url: abs(e.path),
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }))
}
