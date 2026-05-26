const stats = [
  { value: "99%+", label: "Coding Accuracy Rate", desc: "Consistently exceeding industry benchmarks" },
  { value: "24–48h", label: "Turnaround Time", desc: "Fast, reliable delivery on every project" },
  { value: "100%", label: "HIPAA Compliant", desc: "Full compliance across all workflows" },
  { value: "15+", label: "Specialty Domains", desc: "From orthopedics to oncology and beyond" },
]

export default function Stats() {
  return (
    <section className="border-y border-[#1e1e1e] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-[#6b7280] mb-10">
          Performance you can count on
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e] rounded-xl overflow-hidden">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-[#0d0d0d] px-6 py-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#22c55e] mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
              <p className="text-xs text-[#6b7280] leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
