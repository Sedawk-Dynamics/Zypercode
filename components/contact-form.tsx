"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { services, segments } from "@/lib/site-content"

const interests = [...services.map((s) => s.title), ...segments.map((s) => s.title)]

const inputClass =
  "w-full bg-[#0d0d0d] border border-[#1e1e1e] rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#6b7280] focus:outline-none focus:border-[#22c55e]/60 focus:ring-1 focus:ring-[#22c55e]/40 transition-colors"
const labelClass = "block text-xs font-medium text-[#9ca3af] mb-2"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", interest: "", message: "" })
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.")
      return
    }
    setError("")

    const subject = `Inquiry${form.interest ? ` — ${form.interest}` : ""} from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : null,
      form.interest ? `Interested in: ${form.interest}` : null,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n")

    window.location.href = `mailto:info@zypher-code.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#22c55e]/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={28} className="text-[#22c55e]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Your email is ready to send</h3>
        <p className="text-sm text-[#9ca3af] leading-relaxed max-w-sm mx-auto">
          We've opened your email app with the message pre-filled. If it didn't open, reach us
          directly at{" "}
          <a href="mailto:info@zypher-code.com" className="text-[#22c55e] hover:underline">
            info@zypher-code.com
          </a>
          .
        </p>
        <button
          onClick={() => {
            setForm({ name: "", email: "", company: "", interest: "", message: "" })
            setSubmitted(false)
          }}
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold border border-[#333] text-[#d1d5db] rounded-md hover:border-[#22c55e]/50 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-[#22c55e]">*</span>
          </label>
          <input id="name" type="text" value={form.name} onChange={update("name")} placeholder="Jane Doe" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-[#22c55e]">*</span>
          </label>
          <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="jane@company.com" className={inputClass} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" type="text" value={form.company} onChange={update("company")} placeholder="Acme Health" className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>I'm interested in</label>
          <select id="interest" value={form.interest} onChange={update("interest")} className={inputClass}>
            <option value="">Select an option</option>
            {interests.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-[#22c55e]">*</span>
        </label>
        <textarea id="message" rows={5} value={form.message} onChange={update("message")} placeholder="Tell us about your goals, volume, timeline, or questions…" className={`${inputClass} resize-y`} />
      </div>

      {error && <p className="text-sm text-[#f87171]">{error}</p>}

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold bg-[#22c55e] text-[#0a0a0a] rounded-md hover:bg-[#16a34a] transition-colors"
      >
        Send message <Send size={15} />
      </button>
      <p className="text-xs text-[#6b7280]">
        We typically respond within one business day.
      </p>
    </form>
  )
}
