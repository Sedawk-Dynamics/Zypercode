import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Services from "@/components/services"
import WhoWeServe from "@/components/who-we-serve"
import WhyChooseUs from "@/components/why-choose-us"
import HowItWorks from "@/components/how-it-works"
import CtaBanner from "@/components/cta-banner"
import Footer from "@/components/footer"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Medical Coding & IT Services Company | Zyphercode",
  description:
    "HIPAA-compliant medical coding (ICD-10/CPT/HCC), CDI, risk adjustment, plus IT services & BPM. AHIMA/AAPC-certified, 99%+ accuracy. Get a free coding audit.",
  path: "/",
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhoWeServe />
      <WhyChooseUs />
      <HowItWorks />
      <CtaBanner />
      <Footer />
    </main>
  )
}
