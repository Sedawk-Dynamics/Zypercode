import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight, ArrowRight, Check,
  FileText, Code2, Workflow,
  BadgeCheck, Cpu, UserCog, Scaling,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { pickGradient } from "@/lib/gradients"

export const metadata: Metadata = {
  title: "About Zyphercode | Medical Coding, IT Services & BPM",
  description:
    "Zyphercode Private Limited delivers medical coding for healthcare organizations, IT services and consulting for IT organizations, and integrated end-to-end BPM. Founded in Hyderabad.",
  openGraph: {
    title: "About Zyphercode | Medical Coding, IT Services & BPM",
    description: "Who we are, what we do, and why organizations partner with Zyphercode.",
    type: "website",
  },
}

const gradient = pickGradient("About Zyphercode")

const pillars = [
  { Icon: FileText, title: "Medical Coding for Healthcare", desc: "Specialty-accurate ICD-10, CPT, and HCC coding, CDI, risk adjustment, and audits — delivered by AHIMA/AAPC-certified professionals." },
  { Icon: Code2, title: "IT Services for IT Organizations", desc: "Application development, cloud and infrastructure, integration, data, cybersecurity, and managed support that align technology with business goals." },
  { Icon: Workflow, title: "BPM & Outsourcing", desc: "Integrated end-to-end voice and non-voice outsourcing for the US, UK, Australia, and Europe — reducing cost while improving productivity." },
]

const values = [
  { Icon: BadgeCheck, title: "Certified & Experienced", desc: "AHIMA (RHIA, CCS) and AAPC (CPC, CRC) credentials across every major specialty, kept current with annual updates and CMS guidance." },
  { Icon: Cpu, title: "Technology-Driven", desc: "AI-assisted workflows, automated quality audits, and real-time dashboards for faster turnaround and higher first-pass rates." },
  { Icon: UserCog, title: "Dedicated Partnership", desc: "Every client gets a dedicated account manager and team lead — a single point of contact who knows your workflows and goals." },
  { Icon: Scaling, title: "Scalable & Flexible", desc: "Overflow support, full outsourcing, or project-based engagements — tailored to your volume, timeline, and budget." },
]

const highlights = [
  "AHIMA & AAPC certified staff",
  "Specialty-specific expertise",
  "Dual-layer quality assurance",
  "Secure, HIPAA-compliant operations",
  "Flexible remote & hybrid delivery",
  "Transparent SLA-backed commitments",
  "Rapid onboarding within 48 hours",
  "Detailed monthly performance reports",
]

const stats = [
  { value: "99%+", label: "Coding accuracy" },
  { value: "24–48h", label: "Turnaround time" },
  { value: "100%", label: "HIPAA compliant" },
  { value: "15+", label: "Specialty domains" },
]

export default function AboutPage() {
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
            <span className="text-[#9ca3af]">About</span>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">About us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight max-w-3xl">
            Expert solutions for healthcare and IT organizations
          </h1>
          <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl">
            Zyphercode Private Limited delivers specialized solutions tailored to each sector — medical
            coding for healthcare organizations and IT services and consulting for IT organizations —
            backed by integrated, end-to-end BPM. Founded in Hyderabad, India.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors">
            Partner with us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Story + image */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-4">Our story</p>
              <h2 className="text-3xl font-bold text-white mb-5 text-balance">Built on accuracy, reliability, and impact</h2>
              <div className="space-y-5 text-[#9ca3af] leading-relaxed text-lg">
                <p>
                  We started with a simple belief: that precise data and disciplined execution can
                  transform how organizations operate. That belief now spans three practices —
                  healthcare coding, IT services and consulting, and business process management.
                </p>
                <p>
                  By combining clinical expertise, engineering depth, and refined operations, we help
                  clients improve accuracy, reduce cost, and unlock measurable business impact — whether
                  that's a cleaner revenue cycle, a modernized tech stack, or a re-engineered process.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e] h-80">
              <Image src="/images/about-team.jpg" alt="The Zyphercode team in Hyderabad" fill className="object-cover" />
              <div aria-hidden className="absolute inset-0" style={{ background: gradient, opacity: 0.18 }} />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-sm font-semibold text-white">Our Hyderabad Team</p>
                <p className="text-xs text-[#d1d5db]">Certified coders &amp; IT specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e] rounded-xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#0d0d0d] px-6 py-8 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#22c55e] mb-1">{s.value}</p>
                <p className="text-sm text-[#9ca3af]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">What we do</p>
            <h2 className="text-3xl font-bold text-white text-balance">Three practices, one standard of excellence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-7 hover:border-[#22c55e]/40 transition-colors">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: gradient }}>
                  <p.Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Why Zyphercode</p>
            <h2 className="text-3xl font-bold text-white text-balance">What sets us apart</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center mb-4">
                  <v.Icon size={20} className="text-[#22c55e]" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">What you get</p>
              <h2 className="text-3xl font-bold text-white mb-5 text-balance">A partner that delivers, transparently</h2>
              <p className="text-[#9ca3af] leading-relaxed">
                From day one you get certified talent, disciplined quality control, and clear reporting —
                so the value shows up in your numbers.
              </p>
              <Link href="/how-it-works" className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-[#22c55e] hover:text-[#86efac] transition-colors">
                See how we work <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 green-glow">
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#d1d5db]">
                    <Check size={16} className="text-[#22c55e] shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14 text-center" style={{ background: gradient }}>
            <div aria-hidden className="absolute inset-0 bg-[#0a0a0a]/25" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance drop-shadow">Let's work together</h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Tell us about your goals — we'll show you how Zyphercode can deliver measurable results.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors">
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
