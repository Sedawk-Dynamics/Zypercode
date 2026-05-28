import type { Metadata } from "next"
import LegalPage from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Privacy Policy | Zyphercode Private Limited",
  description: "How Zyphercode Private Limited collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="May 28, 2026"
      intro="Zyphercode Private Limited respects your privacy. This policy explains what information we collect, how we use it, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly — such as your name, email, company, and message when you submit our contact form or email us.",
            "We may also collect limited technical information automatically, such as browser type, device, and pages visited, to operate and improve our website.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "We use the information you provide to respond to your inquiries, deliver and improve our services, and communicate with you about your engagement.",
            "We do not sell your personal information. We use technical data only in aggregate to understand and improve site performance.",
          ],
        },
        {
          heading: "Protected health information (PHI)",
          body: [
            "Where we process protected health information on behalf of healthcare clients, we do so strictly under HIPAA-compliant agreements (BAAs), with encryption, access controls, and audit trails. PHI is never used for marketing.",
          ],
        },
        {
          heading: "Data security",
          body: [
            "We maintain administrative, technical, and physical safeguards designed to protect your information, including encrypted access, role-based controls, and regular reviews.",
          ],
        },
        {
          heading: "Data retention",
          body: [
            "We retain information only as long as necessary to fulfill the purposes described here, comply with legal obligations, and honor contractual commitments.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You may request access to, correction of, or deletion of the personal information you have provided to us by contacting us at info@zypher-code.com.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time. Material changes will be reflected by the 'Last updated' date above.",
          ],
        },
      ]}
    />
  )
}
