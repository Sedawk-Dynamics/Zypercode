import Image from "next/image"
import Link from "next/link"
import { FlipCard } from "@/components/ui/flip-card"
import { segments } from "@/lib/site-content"

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
              <Link
                href="/who-we-serve"
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
              >
                Work with us →
              </Link>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg, i) => (
            <FlipCard
              key={seg.title}
              id={seg.anchorId}
              seed={seg.title}
              flipLeft={i % 3 === 1}
              className="h-[300px]"
              front={
                <div className="w-full h-full bg-[#111] border border-[#1e1e1e] hover:border-[#22c55e]/40 transition-colors duration-300 p-6 flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-[#22c55e]/10 flex items-center justify-center mb-4 text-[#22c55e]">
                    <seg.Icon size={22} />
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
                    {seg.shortDesc}
                  </p>
                  <Link
                    href={`/who-we-serve/${seg.slug}`}
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors self-start"
                  >
                    Learn more →
                  </Link>
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
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0a0a0a] bg-[#22c55e] px-4 py-2 rounded-md hover:bg-[#16a34a] transition-colors self-start"
            >
              Join our network →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
