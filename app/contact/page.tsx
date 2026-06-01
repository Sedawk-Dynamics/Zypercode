import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Zyphercode Private Limited",
  description:
    "Get in touch with Zyphercode for medical coding, IT services and consulting, and BPM. Tell us about your goals and we'll respond within one business day.",
  openGraph: {
    title: "Contact Us | Zyphercode Private Limited",
    description: "Reach Zyphercode for medical coding, IT services, and BPM engagements.",
    type: "website",
  },
}

const details = [
  {
    Icon: Mail,
    label: "Email",
    value: "info@zypher-code.com",
    href: "mailto:info@zypher-code.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 6302234570",
    href: "tel:+916302234570",
  },
  {
    Icon: MapPin,
    label: "Office",
    value: "Sandhya Techno-1, X Road, Radhe Nagar, Khajaguda, Rai Durg, Hyderabad, Telangana 500104, India",
    href: "https://www.google.com/maps/place/Sandhya+Techno-1,+Cluster_malkajgiri+82,+X+Road,+Radhe+Nagar,+Khajaguda,+Rai+Durg,+Telangana+500104",
  },
  {
    Icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 9:00 AM – 7:00 PM IST",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 border-b border-[#1e1e1e]">
        <div
          aria-hidden
          className="absolute -top-32 -right-24 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "linear-gradient(135deg, #22c55e 0%, #14b8a6 50%, #0ea5e9 100%)" }}
        />
        <div aria-hidden className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-[#6b7280] mb-8">
            <Link href="/" className="hover:text-[#22c55e] transition-colors">Home</Link>
            <ChevronRight size={13} />
            <span className="text-[#9ca3af]">Contact</span>
          </nav>
          <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-3">Get in touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance leading-tight">
            Let's build something accurate, reliable, and scalable
          </h1>
          <p className="text-lg text-[#d1d5db] leading-relaxed max-w-2xl">
            Whether you need medical coding, IT services and consulting, or end-to-end BPM, tell us
            about your goals and our team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Send us a message</h2>
              <p className="text-sm text-[#9ca3af] mb-7">
                Fields marked <span className="text-[#22c55e]">*</span> are required.
              </p>
              <ContactForm />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#22c55e] mb-5">Contact details</p>
                <ul className="space-y-5">
                  {details.map((d) => (
                    <li key={d.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                        <d.Icon size={16} className="text-[#22c55e]" />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-widest text-[#6b7280] mb-0.5">{d.label}</p>
                        {d.href ? (
                          <a href={d.href} className="text-sm text-[#d1d5db] hover:text-[#22c55e] transition-colors break-all">
                            {d.value}
                          </a>
                        ) : (
                          <p className="text-sm text-[#d1d5db] leading-relaxed">{d.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] h-64">
                <iframe
                  title="Zyphercode office location"
                  src="https://maps.google.com/maps?q=Sandhya+Techno-1+Radhe+Nagar+Khajaguda+Rai+Durg+Hyderabad+Telangana+500104&ftid=0x3bcb952c002445db:0x77f39f2f052cfcf4&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full grayscale-[0.2] contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
