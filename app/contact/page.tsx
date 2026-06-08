import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import JsonLd from "@/components/json-ld"
import { abs, breadcrumbLd, localBusinessLd, ORG_ID, pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Contact Zyphercode | Medical Coding & IT",
  description:
    "Contact Zyphercode for medical coding, IT services & BPM. AHIMA/AAPC-certified, HIPAA-compliant. Tell us your goals — we reply within one business day.",
  path: "/contact",
})

const contactJsonLd = [
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  localBusinessLd(),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Zyphercode Private Limited",
    url: abs("/contact"),
    mainEntity: { "@id": ORG_ID },
  },
]

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
    value: "708, Radhe Nagar, Khajaguda, Rai Durg, Hyderabad, Telangana-500104",
    href: "https://www.google.com/maps/place/Sandhya+Techno-1/@17.4217455,78.3845025,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb952c002445db:0x77f39f2f052cfcf4!8m2!3d17.4217455!4d78.3845025!16s%2Fg%2F11hj_xzwm4!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
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
      <JsonLd data={contactJsonLd} />
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
              <a
                href="https://www.google.com/maps/place/Sandhya+Techno-1/@17.4217455,78.3845025,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb952c002445db:0x77f39f2f052cfcf4!8m2!3d17.4217455!4d78.3845025!16s%2Fg%2F11hj_xzwm4!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Zyphercode office location in Google Maps"
                className="block rounded-2xl overflow-hidden border border-[#1e1e1e] hover:border-[#22c55e]/50 transition-colors h-64 group relative"
              >
                <iframe
                  title="Zyphercode office location"
                  src="https://maps.google.com/maps?q=17.4217455,78.3845025&z=17&ie=UTF8&iwloc=A&output=embed"
                  className="w-full h-full grayscale-[0.2] contrast-110 pointer-events-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-xs font-medium bg-white/95 text-[#0a0a0a] px-3 py-1.5 rounded-md shadow-lg border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  Open in Google Maps →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
