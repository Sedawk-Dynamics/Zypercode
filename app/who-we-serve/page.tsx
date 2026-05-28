import type { Metadata } from "next"
import CategoryIndex from "@/components/category-index"

export const metadata: Metadata = {
  title: "Who We Serve | Zyphercode Private Limited",
  description:
    "Zyphercode serves hospitals, physician groups, payers, RCM companies, IT organizations, and global BPM clients across healthcare, technology, and outsourcing.",
  openGraph: {
    title: "Who We Serve | Zyphercode Private Limited",
    description: "Healthcare, IT, finance, HR, customer experience, and BPM — who we partner with.",
    type: "website",
  },
}

export default function WhoWeServeIndexPage() {
  return (
    <CategoryIndex
      category="who-we-serve"
      eyebrow="Who We Serve"
      title="Serving healthcare, IT, and global outsourcing"
      intro="From hospital networks and physician practices to IT enterprises and global BPM engagements, explore the industries and teams we partner with — and how we deliver for each."
    />
  )
}
