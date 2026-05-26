import Image from "next/image"
import { ArrowRight, ShieldCheck, Activity } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-20">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#22c55e]/30 bg-[#22c55e]/10 rounded-full px-4 py-1.5 text-sm text-[#22c55e] mb-8">
              <Activity size={14} />
              <span>Trusted Medical Coding &amp; IT Partner</span>
            </div>

            {/* Headline */}
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 text-balance">
              Making Healthcare Data{" "}
              <span className="text-gradient-green">Accurate,</span>{" "}
              Compliant &amp; Actionable
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-[#9ca3af] leading-relaxed mb-10 text-pretty">
              Zyphercode Private Limited delivers expert medical coding, clinical documentation improvement,
              and IT services — helping healthcare organizations maximize revenue, ensure compliance, and
              improve patient outcomes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
              >
                Partner With Us
                <ArrowRight size={16} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold border border-[#333] text-[#d1d5db] rounded-md hover:border-[#22c55e]/50 hover:text-white transition-colors"
              >
                Explore Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#6b7280]">
              {[
                "HIPAA Compliant",
                "ICD-10 / CPT Certified",
                "99%+ Accuracy",
                "24–48 Hr TAT",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-[#22c55e]" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative hidden lg:block">
            {/* Glow behind image */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(34,197,94,0.12) 0%, transparent 70%)",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-[#22c55e]/20 shadow-2xl">
              <Image
                src="/images/hero-visual.jpg"
                alt="Medical coding professional working on ICD-10 codes and patient charts"
                width={680}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#1e1e1e] rounded-lg px-4 py-3">
                  <p className="text-xl font-bold text-[#22c55e]">99%+</p>
                  <p className="text-[10px] text-[#6b7280]">Coding accuracy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
