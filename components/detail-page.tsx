import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { pickGradient } from "@/lib/gradients"
import { allContent, type CardContent, type Category } from "@/lib/site-content"

const CATEGORY_LABEL: Record<Category, string> = {
  services: "Services",
  "who-we-serve": "Who We Serve",
}

export default function DetailPage({ content }: { content: CardContent }) {
  const gradient = pickGradient(content.title)
  const { Icon } = content
  const categoryHref = `/${content.category}`
  const related = allContent.filter(
    (c) => c.category === content.category && c.slug !== content.slug,
  )

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-[#1e1e1e]">
        {/* Gradient glow backdrop */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: gradient }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-grid opacity-40 pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-[#6b7280] mb-8">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <Link href={categoryHref} className="hover:text-[#22c55e] transition-colors">
              {CATEGORY_LABEL[content.category]}
            </Link>
            <ChevronRight size={13} />
            <span className="text-[#9ca3af]">{content.title}</span>
          </nav>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              {/* Icon tile */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                style={{ background: gradient }}
              >
                <Icon size={26} className="text-white drop-shadow" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">{content.tag}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
                {content.title}
              </h1>
              <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl">{content.intro}</p>

              <div className="flex flex-col sm:flex-row gap-4 mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
                <Link
                  href={categoryHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold border border-[#333] text-[#d1d5db] rounded-md hover:border-[#22c55e]/50 hover:text-white transition-colors"
                >
                  All {CATEGORY_LABEL[content.category]}
                </Link>
              </div>
            </div>

            {/* Hero side panel */}
            <div className="relative">
              {content.image ? (
                <div className="relative h-72 rounded-2xl overflow-hidden border border-[#1e1e1e]">
                  <Image src={content.image} alt={content.title} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: gradient, opacity: 0.28 }} />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                </div>
              ) : (
                <div
                  className="relative h-72 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center"
                  style={{ background: gradient }}
                >
                  <div aria-hidden className="absolute inset-0 bg-[#0a0a0a]/10" />
                  <Icon size={96} className="text-white/90 drop-shadow-lg" />
                </div>
              )}

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-px bg-[#1e1e1e] rounded-xl overflow-hidden mt-4 border border-[#1e1e1e]">
                {content.stats.map((s) => (
                  <div key={s.label} className="bg-[#0d0d0d] px-3 py-4 text-center">
                    <p className="text-lg font-bold text-[#22c55e] leading-tight">{s.value}</p>
                    <p className="text-[10px] text-[#6b7280] mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-4">Overview</p>
            <div className="space-y-5">
              {content.overview.map((para, i) => (
                <p key={i} className="text-[#9ca3af] leading-relaxed text-lg">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────── */}
      <section className="py-20 bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">What we deliver</p>
            <h2 className="text-3xl font-bold text-white text-balance">Capabilities built for results</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.highlights.map((h) => (
              <div
                key={h.title}
                className="group bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#22c55e]/40 transition-colors"
              >
                <div
                  className="w-9 h-9 rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: gradient }}
                >
                  <Check size={16} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{h.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Why Zyphercode</p>
              <h2 className="text-3xl font-bold text-white mb-5 text-balance">
                The outcomes you can expect
              </h2>
              <p className="text-[#9ca3af] leading-relaxed">
                We pair specialized expertise with disciplined delivery and transparent reporting —
                so the value shows up in your numbers, not just in a deck.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-7 px-6 py-3 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
              >
                Schedule a conversation <ArrowRight size={15} />
              </Link>
            </div>
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 green-glow">
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {content.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-[#d1d5db]">
                    <Check size={16} className="text-[#22c55e] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process (optional) ───────────────────────────── */}
      {content.process && (
        <section className="py-20 bg-[#0d0d0d] border-y border-[#1e1e1e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">How it works</p>
              <h2 className="text-3xl font-bold text-white text-balance">A clear, proven approach</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.process.map((p) => (
                <div key={p.step} className="relative bg-[#111] border border-[#1e1e1e] rounded-xl p-6">
                  <span
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold text-white mb-4"
                    style={{ background: gradient }}
                  >
                    {p.step}
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ (optional) ───────────────────────────────── */}
      {content.faqs && (
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-white mb-8 text-balance">Common questions</h2>
            <div className="space-y-4">
              {content.faqs.map((f) => (
                <div key={f.q} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6">
                  <h3 className="text-base font-semibold text-white mb-2">{f.q}</h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA band ─────────────────────────────────────── */}
      <section className="py-16 border-t border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-14 text-center" style={{ background: gradient }}>
            <div aria-hidden className="absolute inset-0 bg-[#0a0a0a]/25" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance drop-shadow">
                Ready to get started with {content.title}?
              </h2>
              <p className="text-white/90 max-w-xl mx-auto mb-8">
                Let's talk about your goals and how Zyphercode can deliver measurable results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-white text-[#0a0a0a] rounded-md hover:bg-white/90 transition-colors"
              >
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Continue exploring ───────────────────────────── */}
      <section className="pb-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-6">
            Continue exploring {CATEGORY_LABEL[content.category]}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.category}/${r.slug}`}
                className="group flex items-center justify-between gap-3 bg-[#111] border border-[#1e1e1e] rounded-xl px-5 py-4 hover:border-[#22c55e]/40 transition-colors"
              >
                <span className="text-sm font-medium text-[#d1d5db] group-hover:text-white transition-colors">
                  {r.title}
                </span>
                <ArrowUpRight size={16} className="text-[#22c55e] shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
