"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  {
    label: "Who We Serve",
    items: [
      { label: "Hospitals & Health Systems", href: "#who-we-serve" },
      { label: "Physician Groups", href: "#who-we-serve" },
      { label: "Health Plans & Payers", href: "#who-we-serve" },
      { label: "Revenue Cycle Management", href: "#who-we-serve" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Medical Coding (ICD/CPT)", href: "#services" },
      { label: "HCC / Risk Adjustment Coding", href: "#services" },
      { label: "Clinical Documentation (CDI)", href: "#services" },
      { label: "Revenue Cycle Management", href: "#services" },
      { label: "IT Services & EHR Integration", href: "#services" },
      { label: "Coding Audits & Compliance", href: "#services" },
      { label: "Business Process Management (BPM)", href: "#services" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-horizontal.png"
            alt="Zyphercode Private Limited"
            width={220}
            height={60}
            className="w-44 h-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.items ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 rounded-xl shadow-lg py-2 mt-2">
                    {link.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-black p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 pb-6 pt-2 shadow-md">
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.label}>
                <p className="text-gray-500 text-xs uppercase tracking-widest pt-4 pb-2 px-2 font-semibold">
                  {link.label}
                </p>

                {link.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-2 py-2.5 text-sm text-gray-700 hover:text-black transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block px-2 py-3 text-sm text-gray-700 hover:text-black border-t border-gray-200 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}

          <a
            href="#contact"
            className="mt-5 block w-full text-center py-3 text-sm font-medium bg-[#22c55e] text-white rounded-lg hover:bg-[#16a34a] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  )
}
