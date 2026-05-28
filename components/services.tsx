import Image from "next/image"
import { FileText, Brain, ShieldCheck, BarChart3 } from "lucide-react"
import { FlipCard } from "@/components/ui/flip-card"

const services = [
  {
    id: "service-coding",
    icon: <FileText size={20} className="text-[#22c55e]" />,
    title: "Medical Coding (ICD-10 / CPT / HCC)",
    desc: "Precise inpatient and outpatient coding across all specialties using the latest ICD-10-CM/PCS, CPT, and HCPCS code sets. Our AHIMA/AAPC-certified coders ensure maximum reimbursement with zero compliance risk.",
    tag: "Core Service",
    tagline: "Certified accuracy across every claim",
    image: "/images/medical-coding-card.jpg",
  },
  {
    id: "service-cdi",
    icon: <Brain size={20} className="text-[#22c55e]" />,
    title: "Clinical Documentation Improvement (CDI)",
    desc: "Bridge the gap between clinical care and accurate documentation. Our CDI specialists work alongside your physicians to capture the complete severity of illness and complexity of care.",
    tag: "Documentation",
    tagline: "Clinical clarity, captured at the source",
    image: "/images/cdi-documentation-card.jpg",
  },
  {
    id: "service-hcc",
    icon: <ShieldCheck size={20} className="text-[#22c55e]" />,
    title: "Risk Adjustment Coding (HCC)",
    desc: "Comprehensive Hierarchical Condition Category (HCC) coding for Medicare Advantage and value-based care programs. Capture accurate risk scores and ensure appropriate capitation payments.",
    tag: "Risk Adjustment",
    tagline: "Accurate risk scores. Right payments.",
    image: "/images/risk-adjustment-card.jpg",
  },
  {
    id: "service-audits",
    icon: <BarChart3 size={20} className="text-[#22c55e]" />,
    title: "Coding Audits & Compliance",
    desc: "Prospective and retrospective coding audits to identify errors, recover lost revenue, and mitigate compliance risk. Detailed reporting with actionable recommendations.",
    tag: "Compliance",
    tagline: "Audit-grade integrity, every chart",
    image: "/images/compliance-audit.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Products &amp; Solutions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Zyphercode drives data accuracy into action
          </h2>
          <p className="text-[#9ca3af] leading-relaxed">
            We offer a comprehensive suite of medical coding and IT services tailored to the needs of
            hospitals, physician groups, payers, and health systems across India and beyond.
          </p>
          <p className="mt-3 text-xs text-[#6b7280] italic">
            Hover any card to reveal the full story.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <FlipCard
              key={s.title}
              id={s.id}
              seed={s.title}
              flipLeft={i % 2 === 1}
              className="h-[460px]"
              front={
                <article className="relative w-full h-full bg-[#111] border border-[#1e1e1e] hover:border-[#22c55e]/40 transition-colors duration-300 flex flex-col">
                  {/* Image thumbnail */}
                  <div className="relative h-40 w-full overflow-hidden shrink-0">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block text-[10px] uppercase tracking-widest text-[#22c55e] bg-[#22c55e]/10 px-2.5 py-0.5 rounded-full mb-4 self-start">
                      {s.tag}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#22c55e]/10 flex items-center justify-center mb-3">
                      {s.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-[#22c55e]/90 italic leading-relaxed">{s.tagline}</p>
                    <div className="mt-auto pt-4 text-[11px] uppercase tracking-widest text-[#6b7280] flex items-center gap-1.5">
                      Hover to reveal <span aria-hidden>↻</span>
                    </div>
                  </div>
                </article>
              }
              back={
                <div className="relative w-full h-full p-7 flex flex-col text-white">
                  <span className="inline-block text-[10px] uppercase tracking-widest bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded-full mb-4 self-start">
                    {s.tag}
                  </span>
                  <h3 className="text-lg font-bold mb-3 drop-shadow-sm">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/95 overflow-y-auto pr-1 flex-1">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors self-start"
                  >
                    Get in touch →
                  </a>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
