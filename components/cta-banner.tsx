export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#0a0a0a] border-t border-[#1e1e1e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-2xl overflow-hidden border border-[#22c55e]/20 bg-[#111] p-10 sm:p-14 text-center green-glow"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(34,197,94,0.07) 0%, transparent 70%), #111111",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-4">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
            Drive your coding accuracy into action
          </h2>
          <p className="max-w-xl mx-auto text-[#9ca3af] leading-relaxed mb-10">
            Explore how Zyphercode can be your medical coding and IT partner. Contact us today for a
            free consultation and workflow assessment.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
            <div className="bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-xs text-[#6b7280] uppercase tracking-widest mb-1">Email</p>
              <a
                href="mailto:info@zypher-code.com"
                className="text-sm text-[#22c55e] hover:underline break-all"
              >
                info@zypher-code.com
              </a>
            </div>
            <div className="bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-xs text-[#6b7280] uppercase tracking-widest mb-1">Phone</p>
              <a
                href="tel:+916302234570"
                className="text-sm text-[#22c55e] hover:underline"
              >
                +91 6302234570
              </a>
            </div>
            <div className="bg-[#0a0a0a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-xs text-[#6b7280] uppercase tracking-widest mb-1">Address</p>
              <p className="text-sm text-[#9ca3af] leading-relaxed">
                7-1-309/53, BK Guda,<br />Hyderabad 500038
              </p>
            </div>
          </div>

          <a
            href="mailto:info@zypher-code.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}
