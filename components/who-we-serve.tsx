import Image from "next/image"
import { Building2, Stethoscope, HeartPulse, Briefcase, Code2, TrendingUp, Users, HeadsetIcon, Workflow } from "lucide-react"
import { FlipCard } from "@/components/ui/flip-card"

const segments = [
  {
    icon: <Building2 size={22} />,
    title: "Hospitals & Health Systems",
    tagline: "High-volume coding, seamless EHR flows",
    desc: "We support large health systems with high-volume inpatient and outpatient coding, CDI programs, and seamless EHR-integrated workflows that keep your revenue cycle moving.",
    href: "#contact",
  },
  {
    icon: <Stethoscope size={22} />,
    title: "Physician Groups & Clinics",
    tagline: "Specialty coding from primary to subspecialty",
    desc: "Specialty-specific professional fee coding for single and multi-specialty groups — from primary care to cardiology, orthopedics, neurology, and more.",
    href: "#contact",
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Health Plans & Payers",
    tagline: "Accurate risk capture, optimized payments",
    desc: "Risk adjustment coding, HCC capture, and retrospective chart reviews to ensure your member risk scores are accurate and your capitation payments are optimized.",
    href: "#contact",
  },
  {
    icon: <Briefcase size={22} />,
    title: "Revenue Cycle Companies",
    tagline: "Scale without adding headcount",
    desc: "White-label and outsourced coding partnerships for RCM companies looking to scale capacity, reduce costs, and maintain quality without adding headcount.",
    href: "#contact",
  },
  {
    icon: <Code2 size={22} />,
    title: "IT Services and Consulting",
    tagline: "Modernize. Integrate. Scale.",
    desc: "End-to-end IT services and consulting — application development, cloud and infrastructure management, enterprise software engineering, API and systems integration, data analytics, cybersecurity, and managed support. Our consultants partner with you to design the right architecture, modernize legacy systems, and align technology investments with business outcomes.",
    href: "#contact",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Finance and Accounting",
    tagline: "Books, reports, analytics — handled",
    desc: "Finance and accounting support services including bookkeeping, financial reporting, accounts payable/receivable, and business analytics to streamline your financial operations.",
    href: "#contact",
  },
  {
    icon: <Users size={22} />,
    title: "Human Resources",
    tagline: "People operations, fully outsourced",
    desc: "HR support services including payroll processing, employee onboarding, benefits administration, compliance, and HR consulting to help your organization scale efficiently.",
    href: "#contact",
  },
  {
    icon: <HeadsetIcon size={22} />,
    title: "Customer Experience",
    tagline: "Every channel. Every customer. Every time.",
    desc: "Multi-channel customer support solutions including chat, email, voice support, and customer success management to enhance client relationships and satisfaction.",
    href: "#contact",
  },
  {
    icon: <Workflow size={22} />,
    title: "BPM (Business Process Management)",
    tagline: "Integrated end-to-end outsourcing",
    desc: "We as BPM focus on integrated end-to-end outsourcing and deliver transformational benefits to clients through reduced cost, improved productivity, and process improvement. Voice and non-voice services for US, UK, Australia and Europe — including Google mapping, finance services, chat and email support, and technical support (networking, network setup, infrastructure).",
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
            Serving healthcare, IT, and global outsourcing
          </h2>
          <p className="text-[#9ca3af] leading-relaxed">
            From hospital networks and physician practices to IT enterprises and global BPM engagements,
            Zyphercode brings the same commitment to accuracy, compliance, and transformational outcomes
            to every client we partner with.
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
          {segments.map((seg, i) => (
            <FlipCard
              key={seg.title}
              seed={seg.title}
              flipLeft={i % 3 === 1}
              className="h-[300px]"
              front={
                <div className="w-full h-full bg-[#111] border border-[#1e1e1e] hover:border-[#22c55e]/40 transition-colors duration-300 p-6 flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-[#22c55e]/10 flex items-center justify-center mb-4 text-[#22c55e]">
                    {seg.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{seg.title}</h3>
                  <p className="text-sm text-[#22c55e]/90 italic leading-relaxed">{seg.tagline}</p>
                  <div className="mt-auto pt-4 text-[11px] uppercase tracking-widest text-[#6b7280] flex items-center gap-1.5">
                    Hover to reveal <span aria-hidden>↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col text-white">
                  <h3 className="text-base font-bold mb-3 drop-shadow-sm">{seg.title}</h3>
                  <p className="text-sm leading-relaxed text-white/95 overflow-y-auto pr-1 flex-1">
                    {seg.desc}
                  </p>
                  <a
                    href={seg.href}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors self-start"
                  >
                    Contact us →
                  </a>
                </div>
              }
            />
          ))}

          {/* Network callout card */}
          <div className="bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl p-6 flex flex-col justify-between h-[300px]">
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
