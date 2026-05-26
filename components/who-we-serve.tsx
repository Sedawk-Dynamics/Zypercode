import Image from "next/image"
import { Building2, Stethoscope, HeartPulse, Briefcase, Globe, Code2, TrendingUp, Users, HeadsetIcon } from "lucide-react"

const segments = [
  {
    icon: <Building2 size={22} className="text-[#22c55e]" />,
    title: "Hospitals & Health Systems",
    desc: "We support large health systems with high-volume inpatient and outpatient coding, CDI programs, and seamless EHR-integrated workflows that keep your revenue cycle moving.",
    href: "#contact",
  },
  {
    icon: <Stethoscope size={22} className="text-[#22c55e]" />,
    title: "Physician Groups & Clinics",
    desc: "Specialty-specific professional fee coding for single and multi-specialty groups — from primary care to cardiology, orthopedics, neurology, and more.",
    href: "#contact",
  },
  {
    icon: <HeartPulse size={22} className="text-[#22c55e]" />,
    title: "Health Plans & Payers",
    desc: "Risk adjustment coding, HCC capture, and retrospective chart reviews to ensure your member risk scores are accurate and your capitation payments are optimized.",
    href: "#contact",
  },
  {
    icon: <Briefcase size={22} className="text-[#22c55e]" />,
    title: "Revenue Cycle Companies",
    desc: "White-label and outsourced coding partnerships for RCM companies looking to scale capacity, reduce costs, and maintain quality without adding headcount.",
    href: "#contact",
  },
  {
    icon: <Globe size={22} className="text-[#22c55e]" />,
    title: "IT & Startups",
    desc: "We partner with IT companies and startups to deliver comprehensive IT services and consulting. Our expertise includes enterprise software engineering, cloud infrastructure management, data analytics, EHR integrations, HL7/FHIR implementation, and strategic technology consulting to help scale operations and align technology with business objectives.",
    href: "#contact",
  },
  {
    icon: <Code2 size={22} className="text-[#22c55e]" />,
    title: "IT Services and Consulting",
    desc: "End-to-end IT consulting and services for organizations looking to modernize their infrastructure, optimize workflows, and implement enterprise solutions. We provide architecture design, implementation, and ongoing support.",
    href: "#contact",
  },
  {
    icon: <TrendingUp size={22} className="text-[#22c55e]" />,
    title: "Finance and Accounting",
    desc: "Finance and accounting support services including bookkeeping, financial reporting, accounts payable/receivable, and business analytics to streamline your financial operations.",
    href: "#contact",
  },
  {
    icon: <Users size={22} className="text-[#22c55e]" />,
    title: "Human Resources",
    desc: "HR support services including payroll processing, employee onboarding, benefits administration, compliance, and HR consulting to help your organization scale efficiently.",
    href: "#contact",
  },
  {
    icon: <HeadsetIcon size={22} className="text-[#22c55e]" />,
    title: "Customer Experience",
    desc: "Multi-channel customer support solutions including chat, email, voice support, and customer success management to enhance client relationships and satisfaction.",
    href: "#contact",
  },
]

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="py-24 bg-[#0d0d0d] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Who We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Serving the full spectrum of healthcare
          </h2>
          <p className="text-[#9ca3af] leading-relaxed">
            From large hospital networks to individual physician practices, Zyphercode brings the same
            commitment to accuracy and compliance to every client we partner with.
          </p>
        </div>

        {/* Full-width hospital image banner */}
        <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e] h-56 sm:h-72 mb-10">
          <Image
            src="/images/hospital-serve.jpg"
            alt="Modern hospital environment served by Zyphercode coding services"
            fill
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(10,10,10,0.80) 0%, rgba(10,10,10,0.20) 60%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center px-8 sm:px-12">
            <div className="max-w-sm">
              <p className="text-xs uppercase tracking-widest text-[#22c55e] mb-2">Healthcare Partners</p>
              <p className="text-2xl sm:text-3xl font-bold text-white text-balance leading-snug">
                Built for every corner of healthcare
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
              >
                Work with us →
              </a>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg) => (
            <a
              key={seg.title}
              href={seg.href}
              className="group bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#22c55e]/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-11 h-11 rounded-lg bg-[#22c55e]/10 flex items-center justify-center mb-4">
                {seg.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{seg.title}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed flex-1">{seg.desc}</p>
              <p className="mt-4 text-xs font-medium text-[#22c55e]">
                Read more{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </a>
          ))}

          {/* Network callout card */}
          <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#22c55e] mb-4">Our reach</p>
              <div className="space-y-4">
                {[
                  { num: "15+", desc: "Clinical specialties covered" },
                  { num: "99%+", desc: "Average coding accuracy" },
                  { num: "100%", desc: "HIPAA-compliant operations" },
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-[#22c55e]">{item.num}</span>
                    <span className="text-sm text-[#9ca3af]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a0a0a] bg-[#22c55e] px-4 py-2 rounded-md hover:bg-[#16a34a] transition-colors self-start"
            >
              Join our network →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
