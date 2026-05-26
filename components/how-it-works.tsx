import { ArrowRight } from "lucide-react"

const process = [
  {
    step: "01",
    title: "Onboarding & Assessment",
    desc: "We begin with a comprehensive assessment of your current workflows — coding, IT infrastructure, BPM requirements, and technology stack — to design the right solution.",
  },
  {
    step: "02",
    title: "Dedicated Team & Technology Setup",
    desc: "A dedicated team of certified coders and IT specialists, along with optimized BPM workflows (voice/non-voice), is assembled and configured within 48 hours.",
  },
  {
    step: "03",
    title: "Execution & Quality Review",
    desc: "Medical coding and BPM services execute with dual-layer QA — primary processor plus senior auditor — ensuring 99%+ accuracy. IT systems integrate seamlessly with your infrastructure.",
  },
  {
    step: "04",
    title: "Reporting, Optimization & Support",
    desc: "Monthly performance dashboards, process analytics, IT incident support, and coder feedback loops help you continuously improve outcomes across coding, BPM, and technology.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#0d0d0d] border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">How We Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Simple, transparent, and proven
          </h2>
          <p className="text-[#9ca3af] leading-relaxed">
            Our four-step engagement model ensures a smooth start and consistent results from day one.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[#22c55e]/20"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.step} className="relative flex flex-col items-start">
                {/* Step circle */}
                <div className="w-10 h-10 rounded-full border-2 border-[#22c55e] bg-[#0d0d0d] flex items-center justify-center text-xs font-bold text-[#22c55e] mb-5 z-10">
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#22c55e] hover:text-[#86efac] transition-colors"
          >
            Start your onboarding today <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
