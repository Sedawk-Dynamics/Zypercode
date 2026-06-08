import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"
import JsonLd from "@/components/json-ld"
import { breadcrumbLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service | Zyphercode",
  description:
    "The terms that govern your use of the Zyphercode Private Limited website and services, including intellectual property, confidentiality, and governing law.",
  path: "/terms",
})

const termsJsonLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
])

export default function TermsPage() {
  return (
    <>
      <JsonLd data={termsJsonLd} />
      <LegalPage
      title="Terms of Service"
      updated="May 28, 2026"
      intro="These terms govern your use of the Zyphercode Private Limited website. By accessing or using this site, you agree to them."
      sections={[
        {
          heading: "Use of this website",
          body: [
            "You may use this website for lawful purposes only. You agree not to misuse the site, attempt to disrupt its operation, or access it in ways not permitted by these terms.",
          ],
        },
        {
          heading: "Services",
          body: [
            "Information about our services is provided for general informational purposes. Specific engagements, deliverables, service levels, and pricing are governed by separate written agreements.",
            "Nothing on this website constitutes a binding offer; descriptions may change as our services evolve.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "All content on this site — including text, graphics, logos, and design — is the property of Zyphercode Private Limited and is protected by applicable laws. You may not reproduce or redistribute it without permission.",
          ],
        },
        {
          heading: "Confidentiality",
          body: [
            "Any confidential information exchanged in the course of an engagement is handled under the confidentiality and data-protection terms of the relevant signed agreement.",
          ],
        },
        {
          heading: "Disclaimer of warranties",
          body: [
            "This website is provided on an 'as is' and 'as available' basis. We make no warranties regarding the accuracy, completeness, or availability of the site content.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent permitted by law, Zyphercode Private Limited is not liable for indirect, incidental, or consequential damages arising from your use of this website.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of India, and any disputes are subject to the jurisdiction of the courts of Hyderabad, Telangana.",
          ],
        },
      ]}
      />
    </>
  )
}
