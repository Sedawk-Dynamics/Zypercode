import type { Metadata } from "next"
import CategoryIndex from "@/components/category-index"
import JsonLd from "@/components/json-ld"
import { breadcrumbLd, itemListLd, pageMetadata } from "@/lib/seo"
import { services } from "@/lib/site-content"

export const metadata: Metadata = pageMetadata({
  title: "Medical Coding & Compliance Services | Zyphercode",
  description:
    "Explore Zyphercode's medical coding, CDI, HCC risk adjustment, and coding audit services — AHIMA/AAPC-certified, HIPAA-compliant, 99%+ accuracy. Talk to us.",
  path: "/services",
})

export default function ServicesIndexPage() {
  const jsonLd = [
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
    itemListLd(
      "Zyphercode Services",
      services.map((s) => ({ name: s.title, path: `/services/${s.slug}` })),
    ),
  ]
  return (
    <>
      <JsonLd data={jsonLd} />
      <CategoryIndex
        category="services"
        eyebrow="Services"
        title="A comprehensive suite of coding and IT services"
        intro="From specialty-accurate medical coding to clinical documentation, risk adjustment, and compliance audits — explore the services that keep your revenue cycle accurate and audit-ready."
      />
    </>
  )
}
