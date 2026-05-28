import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-14 border-b border-[#1e1e1e]">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-[#6b7280] mb-8">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-[#9ca3af]">{title}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance leading-tight">{title}</h1>
          <p className="text-[#9ca3af] leading-relaxed max-w-2xl">{intro}</p>
          <p className="text-xs text-[#6b7280] mt-5">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((s, i) => (
            <div key={s.heading}>
              <h2 className="text-xl font-bold text-white mb-3">
                <span className="text-[#22c55e] mr-2">{String(i + 1).padStart(2, "0")}.</span>
                {s.heading}
              </h2>
              <div className="space-y-3">
                {s.body.map((p, j) => (
                  <p key={j} className="text-[#9ca3af] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-8 border-t border-[#1e1e1e]">
            <p className="text-sm text-[#9ca3af]">
              Questions about this page? Reach us at{" "}
              <a href="mailto:info@zypher-code.com" className="text-[#22c55e] hover:underline">info@zypher-code.com</a>{" "}
              or via our{" "}
              <Link href="/contact" className="text-[#22c55e] hover:underline">contact page</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
