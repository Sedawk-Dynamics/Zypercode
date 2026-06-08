import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, ArrowRight, Check, Layers, Repeat, ClipboardList } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import JsonLd from "@/components/json-ld"
import { pickGradient } from "@/lib/gradients"
import { breadcrumbLd, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "How We Work: Our Engagement Model | Zyphercode",
  description:
    "Zyphercode's four-step engagement model — onboarding & assessment, dedicated team, execution with dual-layer QA, and reporting. Live within 48 hours. Learn more.",
  path: "/how-it-works",
})

const howItWorksJsonLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "How We Work", path: "/how-it-works" },
])

const gradient = pickGradient("How We Work")

const steps = [
  {
    step: "01",
    title: "Onboarding & Assessment",
    desc: "We begin with a comprehensive assessment of your current workflows — coding, IT infrastructure, BPM requirements, and technology stack — to design the right solution.",
    points: ["Workflow and volume analysis", "Systems and access review", "Success metrics and SLA definition"],
  },
  {
    step: "02",
    title: "Dedicated Team & Technology Setup",
    desc: "A dedicated team of certified coders and IT specialists, along with optimized BPM workflows (voice/non-voice), is assembled and configured within 48 hours.",
    points: ["Specialty-matched certified team", "Secure, HIPAA-compliant access", "Tooling and workflow configuration"],
  },
  {
    step: "03",
    title: "Execution & Quality Review",
    desc: "Medical coding and BPM services execute with dual-layer QA — primary processor plus senior auditor — ensuring 99%+ accuracy. IT systems integrate seamlessly with your infrastructure.",
    points: ["Dual-layer quality assurance", "Real-time accuracy tracking", "Seamless systems integration"],
  },
  {
    step: "04",
    title: "Reporting, Optimization & Support",
    desc: "Monthly performance dashboards, process analytics, IT incident support, and coder feedback loops help you continuously improve outcomes across coding, BPM, and technology.",
    points: ["Monthly performance dashboards", "Continuous improvement loops", "Ongoing support and incident response"],
  },
]

const models = [
  { Icon: Layers, title: "Overflow Support", desc: "Flex capacity that absorbs backlogs and seasonal spikes without disrupting your in-house team." },
  { Icon: Repeat, title: "Full Outsourcing", desc: "End-to-end ownership of a function — coding, BPM, or IT operations — under transparent SLAs." },
  { Icon: ClipboardList, title: "Project-Based", desc: "Defined-scope engagements such as coding audits, cloud migrations, or process re-engineering." },
]

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <JsonLd data={howItWorksJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-[#1e1e1e]">
        <div aria-hidden className="absolute -top-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: gradient }} />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-[#6b7280] mb-8">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-[#9ca3af]">How We Work</span>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">How we work</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight max-w-3xl">
            Simple, transparent, and proven
          </h1>
          <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl">
            Our four-step engagement model ensures a smooth start and consistent results from day one —
            with quality, security, and clear reporting built into every stage.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 mt-9 px-7 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors">
            Start your onboarding <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {steps.map((s) => (
            <div key={s.step} className="grid lg:grid-cols-[auto_1fr] gap-6 bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 sm:p-9 hover:border-[#22c55e]/40 transition-colors">
              <div className="flex lg:flex-col items-center lg:items-start gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-xl font-bold text-white shrink-0" style={{ background: gradient }}>
                  {s.step}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
                <p className="text-[#9ca3af] leading-relaxed mb-5 max-w-3xl">{s.desc}</p>
                <ul className="grid sm:grid-cols-3 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#d1d5db]">
                      <Check size={15} className="text-[#22c55e] shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Engagement models</p>
            <h2 className="text-3xl font-bold text-white text-balance">Choose the model that fits</h2>
            <p className="text-[#9ca3af] leading-relaxed mt-3">
              We tailor every engagement to your volume, timeline, and budget — and you can move between
              models as your needs change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {models.map((m) => (
              <div key={m.title} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-7 hover:border-[#22c55e]/40 transition-colors">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5" style={{ background: gradient }}>
                  <m.Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{m.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding callout */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 sm:p-10 text-center green-glow">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Rapid onboarding</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 text-balance">Live within 48 hours</h2>
            <p className="text-[#9ca3af] leading-relaxed max-w-xl mx-auto">
              From kickoff to first delivery, most engagements are operational within two business days —
              secure access, configured workflows, and a dedicated team ready to go.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14 text-center" style={{ background: gradient }}>
            <div aria-hidden className="absolute inset-0 bg-[#0a0a0a]/25" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance drop-shadow">Ready to get started?</h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Let's map your workflow and design the right engagement — onboarding can begin this week.
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
