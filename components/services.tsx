import Image from "next/image"
import { Code2, FileText, Brain, RefreshCcw, ShieldCheck, BarChart3, Headphones } from "lucide-react"

const services = [
  {
    icon: <FileText size={20} className="text-[#22c55e]" />,
    title: "Medical Coding (ICD-10 / CPT / HCC)",
    desc: "Precise inpatient and outpatient coding across all specialties using the latest ICD-10-CM/PCS, CPT, and HCPCS code sets. Our AHIMA/AAPC-certified coders ensure maximum reimbursement with zero compliance risk.",
    tag: "Core Service",
    image: "/images/medical-coding-card.jpg",
  },
  {
    icon: <Brain size={20} className="text-[#22c55e]" />,
    title: "Clinical Documentation Improvement (CDI)",
    desc: "Bridge the gap between clinical care and accurate documentation. Our CDI specialists work alongside your physicians to capture the complete severity of illness and complexity of care.",
    tag: "Documentation",
    image: "/images/cdi-documentation-card.jpg",
  },
  {
    icon: <RefreshCcw size={20} className="text-[#22c55e]" />,
    title: "Revenue Cycle Management",
    desc: "End-to-end RCM support — charge capture, claims submission, denial management, and AR follow-up — to reduce write-offs and accelerate collections for your practice or system.",
    tag: "RCM",
    image: "/images/rcm-analytics-card.jpg",
  },
  {
    icon: <ShieldCheck size={20} className="text-[#22c55e]" />,
    title: "Risk Adjustment Coding (HCC)",
    desc: "Comprehensive Hierarchical Condition Category (HCC) coding for Medicare Advantage and value-based care programs. Capture accurate risk scores and ensure appropriate capitation payments.",
    tag: "Risk Adjustment",
    image: "/images/risk-adjustment-card.jpg",
  },
  {
    icon: <Code2 size={20} className="text-[#22c55e]" />,
    title: "IT Services and Consulting",
    desc: "Comprehensive IT consulting and services for healthcare and non-healthcare organizations. We deliver enterprise software engineering, cloud infrastructure management, data analytics, API development, and strategic technology consulting to optimize operations, enhance security, and drive digital transformation.",
    tag: "Technology",
    image: "/images/ehr-integration.jpg",
  },
  {
    icon: <BarChart3 size={20} className="text-[#22c55e]" />,
    title: "Coding Audits & Compliance",
    desc: "Prospective and retrospective coding audits to identify errors, recover lost revenue, and mitigate compliance risk. Detailed reporting with actionable recommendations.",
    tag: "Compliance",
    image: "/images/compliance-audit.jpg",
  },
  {
    icon: <Headphones size={20} className="text-[#22c55e]" />,
    title: "Business Process Management (BPM)",
    desc: "We focus on integrated end-to-end outsourcing delivering transformational benefits through reduced costs, improved productivity, and process optimization. Services include Google Mapping, Finance Services, Chat and Email Support, and Technical Support (networking, infrastructure setup, system maintenance). We serve US, UK, Australia, Europe, and Asia-Pacific regions.",
    tag: "BPM Services",
    image: "/images/bpm-services-card.jpg",
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
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-[#111] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-[#22c55e]/40 transition-all duration-300 flex flex-col"
            >
              {/* Image thumbnail */}
              {s.image && (
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111]" />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Tag */}
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#22c55e] bg-[#22c55e]/10 px-2.5 py-0.5 rounded-full mb-4 self-start">
                  {s.tag}
                </span>
                <div className="mb-3">{s.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 text-xs font-medium text-[#22c55e] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
