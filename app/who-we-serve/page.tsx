import type { Metadata } from "next"
import CategoryIndex from "@/components/category-index"
import JsonLd from "@/components/json-ld"
import { breadcrumbLd, itemListLd, pageMetadata } from "@/lib/seo"
import { segments } from "@/lib/site-content"

export const metadata: Metadata = pageMetadata({
  title: "Who We Serve: Hospitals, Payers & RCM | Zyphercode",
  description:
    "Zyphercode partners with hospitals, physician groups, health plans, and RCM companies for certified, HIPAA-compliant medical coding and BPM. See how we help.",
  path: "/who-we-serve",
})

export default function WhoWeServeIndexPage() {
  const jsonLd = [
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Who We Serve", path: "/who-we-serve" },
    ]),
    itemListLd(
      "Industries & Teams Zyphercode Serves",
      segments.map((s) => ({ name: s.title, path: `/who-we-serve/${s.slug}` })),
    ),
  ]
  return (
    <>
      <JsonLd data={jsonLd} />
      <CategoryIndex
        category="who-we-serve"
        eyebrow="Who We Serve"
        title="Serving healthcare, IT, and global outsourcing"
        intro="From hospital networks and physician practices to IT enterprises and global BPM engagements, explore the industries and teams we partner with — and how we deliver for each."
      />
    </>
  )
}
