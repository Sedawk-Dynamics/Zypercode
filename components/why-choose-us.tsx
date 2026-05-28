import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "Certified & Experienced Coders",
    desc: "Our team holds AHIMA (RHIA, CCS) and AAPC (CPC, CRC) certifications across all major specialty domains. We stay current with annual code updates, payer policies, and CMS guidelines.",
  },
  {
    number: "02",
    title: "Technology-Driven Workflows",
    desc: "We leverage AI-assisted coding tools, automated quality audits, and real-time dashboards to deliver faster turnaround and higher first-pass acceptance rates.",
  },
  {
    number: "03",
    title: "Dedicated Account Management",
    desc: "Every client gets a dedicated account manager and coding team lead — a single point of contact who understands your workflows, payer mix, and compliance requirements.",
  },
  {
    number: "04",
    title: "Scalable & Flexible Engagement",
    desc: "Whether you need overflow support, full outsourcing, or project-based audits, we tailor our engagement model to your volume, timeline, and budget.",
  },
]

const highlights = [
  "AHIMA & AAPC certified coding staff",
  "Speciality-specific coding expertise",
  "Dual-layer quality assurance process",
  "Secure, HIPAA-compliant data handling",
  "Flexible remote & hybrid delivery",
  "Transparent SLA-backed commitments",
  "Rapid onboarding within 48 hours",
  "Detailed monthly performance reports",
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Why Zyphercode</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 text-balance">
              Expert solutions for healthcare and IT organizations
            </h2>
            <p className="text-[#9ca3af] leading-relaxed mb-8">
              Zyphercode Private Limited delivers specialized solutions tailored to each sector — <span className="text-white font-medium">medical coding for healthcare organizations</span> and <span className="text-white font-medium">IT services and consulting for IT organizations</span>. We combine clinical expertise, technology innovation, and process optimization to deliver accuracy, reliability, and transformational business impact. Founded in Hyderabad.
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((p) => (
                <div key={p.number} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full border border-[#22c55e]/40 flex items-center justify-center text-xs font-bold text-[#22c55e]">
                    {p.number}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                    <p className="text-sm text-[#9ca3af] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-5">
            {/* Team photo */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e] h-56">
              <Image
                src="/images/about-team.jpg"
                alt="Zyphercode team of healthcare IT professionals collaborating"
                fill
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-5">
                <p className="text-sm font-semibold text-white">Our Hyderabad Team</p>
                <p className="text-xs text-[#9ca3af]">Certified coders &amp; IT specialists</p>
              </div>
            </div>

            {/* Highlight checklist card */}
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 green-glow">
              <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-5">What you get</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#d1d5db]">
                    <CheckCircle2 size={15} className="text-[#22c55e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-[#1e1e1e]">
                <p className="text-sm text-[#6b7280] mb-3">Ready to improve your coding accuracy?</p>
                <a
                  href="/services/coding-audits"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
                >
                  Schedule a Free Audit →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
