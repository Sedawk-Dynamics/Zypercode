import Link from "next/link"
import { ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { pickGradient } from "@/lib/gradients"
import { services, segments, type Category } from "@/lib/site-content"

interface CategoryIndexProps {
  category: Category
  eyebrow: string
  title: string
  intro: string
}

export default function CategoryIndex({ category, eyebrow, title, intro }: CategoryIndexProps) {
  const items = category === "services" ? services : segments
  const heroGradient = pickGradient(title)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 border-b border-[#1e1e1e]">
        <div aria-hidden className="absolute -top-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-25 pointer-events-none" style={{ background: heroGradient }} />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-[#6b7280] mb-8">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-[#9ca3af]">{eyebrow}</span>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">{eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl">{intro}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item) => {
              const g = pickGradient(item.title)
              return (
                <Link
                  key={item.slug}
                  href={`/${item.category}/${item.slug}`}
                  className="group relative bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#22c55e]/40 transition-colors flex flex-col overflow-hidden"
                >
                  <div aria-hidden className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: g }} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: g }}>
                      <item.Icon size={22} className="text-white" />
                    </div>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-[#22c55e] bg-[#22c55e]/10 px-2.5 py-0.5 rounded-full mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-[#22c55e]/90 italic mb-3">{item.tagline}</p>
                    <p className="text-sm text-[#9ca3af] leading-relaxed line-clamp-3">{item.shortDesc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      View details
                      <ArrowUpRight size={15} className="text-[#22c55e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14 text-center" style={{ background: heroGradient }}>
            <div aria-hidden className="absolute inset-0 bg-[#0a0a0a]/25" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance drop-shadow">
                Not sure where to start?
              </h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Tell us your goals and we'll point you to the right solution.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors">
                Talk to our team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
