import type { Metadata } from "next"
import CategoryIndex from "@/components/category-index"

export const metadata: Metadata = {
  title: "Services | Zyphercode Private Limited",
  description:
    "Explore Zyphercode's services — medical coding, clinical documentation improvement, risk adjustment, and coding audits & compliance.",
  openGraph: {
    title: "Services | Zyphercode Private Limited",
    description: "Medical coding, CDI, risk adjustment, and coding audits & compliance.",
    type: "website",
  },
}

export default function ServicesIndexPage() {
  return (
    <CategoryIndex
      category="services"
      eyebrow="Services"
      title="A comprehensive suite of coding and IT services"
      intro="From specialty-accurate medical coding to clinical documentation, risk adjustment, and compliance audits — explore the services that keep your revenue cycle accurate and audit-ready."
    />
  )
}
