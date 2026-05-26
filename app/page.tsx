import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Services from "@/components/services"
import WhoWeServe from "@/components/who-we-serve"
import WhyChooseUs from "@/components/why-choose-us"
import HowItWorks from "@/components/how-it-works"
import CtaBanner from "@/components/cta-banner"
import Footer from "@/components/footer"

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
