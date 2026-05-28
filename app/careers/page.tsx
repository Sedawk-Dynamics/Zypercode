import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, ArrowRight, GraduationCap, HeartHandshake, TrendingUp, Globe, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { pickGradient } from "@/lib/gradients"

export const metadata: Metadata = {
  title: "Careers | Zyphercode Private Limited",
  description:
    "Join Zyphercode — build a career in medical coding, IT services, and BPM. Explore our culture, benefits, and open roles in Hyderabad and remote.",
  openGraph: {
    title: "Careers | Zyphercode Private Limited",
    description: "Grow your career in medical coding, IT services, and BPM with Zyphercode.",
    type: "website",
  },
}

const gradient = pickGradient("Careers")

const perks = [
  { Icon: GraduationCap, title: "Learn & certify", desc: "Sponsored AHIMA/AAPC certifications, IT upskilling, and continuous training." },
  { Icon: TrendingUp, title: "Real growth", desc: "Clear career paths from associate to team lead, auditor, and management." },
  { Icon: HeartHandshake, title: "Supportive culture", desc: "Mentorship, dedicated leads, and a team that genuinely has your back." },
  { Icon: Globe, title: "Flexible delivery", desc: "Onsite in Hyderabad, remote, and hybrid options across roles." },
]

const roles = [
  { title: "Medical Coder (ICD-10 / CPT)", type: "Full-time", loc: "Hyderabad / Remote", dept: "Coding" },
  { title: "Risk Adjustment Coder (HCC / CRC)", type: "Full-time", loc: "Hyderabad / Remote", dept: "Coding" },
  { title: "CDI Specialist", type: "Full-time", loc: "Hyderabad", dept: "Documentation" },
  { title: "Software Engineer", type: "Full-time", loc: "Hyderabad / Remote", dept: "IT Services" },
  { title: "BPM Process Associate (Voice / Non-voice)", type: "Full-time", loc: "Hyderabad", dept: "BPM" },
  { title: "Quality Auditor", type: "Full-time", loc: "Hyderabad", dept: "Quality" },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-[#1e1e1e]">
        <div aria-hidden className="absolute -top-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: gradient }} />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-[#6b7280] mb-8">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-[#9ca3af]">Careers</span>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight max-w-3xl">
            Build your career with Zyphercode
          </h1>
          <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl">
            We're a team of certified coders, engineers, and process specialists who care about
            accuracy, growth, and doing meaningful work. If that sounds like you, we'd love to talk.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors">
            Send us your resume <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Why join us</p>
            <h2 className="text-3xl font-bold text-white text-balance">A place to grow, not just work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((p) => (
              <div key={p.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: gradient }}>
                  <p.Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Open roles</p>
            <h2 className="text-3xl font-bold text-white text-balance">Current openings</h2>
          </div>
          <div className="space-y-3">
            {roles.map((r) => (
              <Link
                key={r.title}
                href="/contact"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#111] border border-[#1e1e1e] rounded-xl px-6 py-5 hover:border-[#22c55e]/40 transition-colors"
              >
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-[#22c55e] transition-colors">{r.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-[#6b7280]">
                    <span>{r.dept}</span>
                    <span>{r.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {r.loc}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22c55e] shrink-0">
                  Apply <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#6b7280] mt-8">
            Don't see your role?{" "}
            <Link href="/contact" className="text-[#22c55e] hover:underline">Send us your resume</Link>{" "}
            — we're always glad to meet great people.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14 text-center" style={{ background: gradient }}>
            <div aria-hidden className="absolute inset-0 bg-[#0a0a0a]/25" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance drop-shadow">Ready to apply?</h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Send us your resume and tell us what you're great at — we'll be in touch.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors">
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
