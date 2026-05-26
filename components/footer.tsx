import Image from "next/image"
import { Linkedin, Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"

const footerLinks = [
  {
    heading: "Who We Serve",
    links: [
      { label: "Hospitals & Health Systems", href: "#who-we-serve" },
      { label: "Physician Groups & Clinics", href: "#who-we-serve" },
      { label: "Health Plans & Payers", href: "#who-we-serve" },
      { label: "IT Services and Consulting", href: "#who-we-serve" },
      { label: "Finance and Accounting", href: "#who-we-serve" },
      { label: "Human Resources", href: "#who-we-serve" },
      { label: "Customer Experience", href: "#who-we-serve" },
      { label: "BPM", href: "#who-we-serve" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Medical Coding (ICD/CPT)", href: "#services" },
      { label: "HCC / Risk Adjustment Coding", href: "#services" },
      { label: "Clinical Documentation (CDI)", href: "#services" },
      { label: "Revenue Cycle Management", href: "#services" },
      { label: "IT Services and Consulting", href: "#services" },
      { label: "Business Process Management (BPM)", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Zyphercode", href: "#about" },
      { label: "How We Work", href: "#about" },
      { label: "Careers", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo-horizontal.png"
                alt="Zyphercode Private Limited"
                width={220}
                height={60}
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-xs mb-5">
              We as BPM focus on integrated end-to-end outsourcing and deliver transformational benefits to clients through reduced cost, improved productivity, and process improvement. Zyphercode provides medical coding for healthcare organizations and IT services and consulting for IT organizations globally.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin
                  size={14}
                  className="text-[#22c55e] mt-0.5 shrink-0"
                />
                <span>
                  7-1-309/53, BK Guda, Hyderabad 500038, India
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Mail
                  size={14}
                  className="text-[#22c55e] shrink-0"
                />
                <a
                  href="mailto:Info@zyphercodepvtltd.com"
                  className="hover:text-black transition-colors"
                >
                  Info@zyphercodepvtltd.com
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <Phone
                  size={14}
                  className="text-[#22c55e] shrink-0"
                />
                <a
                  href="tel:+916302234570"
                  className="hover:text-black transition-colors"
                >
                  +91 6302234570
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/zyphercodepvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#22c55e] hover:border-[#22c55e] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://x.com/zyphercode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#22c55e] hover:border-[#22c55e] transition-colors"
              >
                <FaXTwitter size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/zypher-code-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#22c55e] hover:border-[#22c55e] transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/zyphercodepvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-gray-500 hover:text-[#22c55e] hover:border-[#22c55e] transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-4 font-medium">
                {col.heading}
              </p>

              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Zyphercode Private Limited.
            All Rights Reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-black transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#contact"
              className="hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
