import type { Metadata } from "next"

// ─────────────────────────────────────────────────────────────
// Single source of truth for canonical host, NAP, social profiles,
// per-page metadata, and JSON-LD. Keeping these in one place is what
// keeps NAP (Name/Address/Phone) identical across footer, schema, and
// Google Business Profile — a genuine local-ranking factor.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  url: "https://www.zypher-code.com", // canonical host: www + https, NO trailing slash
  name: "Zyphercode Private Limited",
  shortName: "Zyphercode",
  description:
    "Zyphercode delivers HIPAA-compliant medical coding (ICD-10/CPT/HCC), CDI, risk adjustment, and coding audits, plus IT services and BPM for clients in India, the US, UK, Australia, and Europe.",
  locale: "en_US",
  email: "info@zypher-code.com",
  telephone: "+91-6302234570",
  // NOTE: no purpose-built 1200×630 OG image exists yet — see recommendations.
  defaultOgImage: "/logo-horizontal.png",
  // NAP must match the visible site (footer + contact page). The SEO brief
  // listed "Sandhya Techno-1, X Road, Radhe Nagar, Khajaguda, Rai Durg" — the
  // live footer/contact show "708, Radhe Nagar, Khajaguda, Rai Durg". Using the
  // visible address here for consistency. >>> OWNER: confirm the single
  // canonical street address and keep it identical on the Google Business Profile.
  address: {
    streetAddress: "708, Radhe Nagar, Khajaguda, Rai Durg",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500104",
    addressCountry: "IN",
  },
  geo: { latitude: 17.4217455, longitude: 78.3845025 },
  areaServed: ["IN", "US", "GB", "AU", "EU"],
  sameAs: [
    "https://www.linkedin.com/company/zypher-code-pvt-ltd/",
    "https://www.instagram.com/zyphercodepvtltd/",
    "https://www.facebook.com/zyphercodepvtltd/",
  ],
} as const

export const ORG_ID = `${SITE.url}/#organization`

/** Resolve a path to an absolute, canonical www URL. */
export function abs(path = "/"): string {
  if (path.startsWith("http")) return path
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`
}

interface PageMetaInput {
  title: string // full <title>, brand included, crafted to ≤60 chars
  description: string // 140–160 chars, primary keyword + trust hook + soft CTA
  path: string // canonical path, e.g. "/services/medical-coding"
  image?: string // OG image path (defaults to site OG image)
  imageAlt?: string
  type?: "website" | "article" | "profile"
  noindex?: boolean
}

/**
 * Build a complete, standards-compliant Metadata object:
 * self-referencing absolute canonical + hreflang(en, x-default),
 * robots, Open Graph, and Twitter card — all page-specific.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
}: PageMetaInput): Metadata {
  const url = abs(path)
  const ogImage = abs(image ?? SITE.defaultOgImage)
  return {
    // `absolute` bypasses the layout title template so the crafted, length-tuned
    // title (brand already included) is used verbatim — no double "| Zyphercode".
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: { en: url, "x-default": url },
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

// ─────────────────────────────────────────────────────────────
// JSON-LD builders — return plain objects, rendered via <JsonLd/>.
// ─────────────────────────────────────────────────────────────

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: abs("/logo-horizontal.png"),
    image: abs("/logo-horizontal.png"),
    email: SITE.email,
    telephone: SITE.telephone,
    address: { "@type": "PostalAddress", ...SITE.address },
    sameAs: [...SITE.sameAs],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.telephone,
        email: SITE.email,
        contactType: "sales",
        areaServed: [...SITE.areaServed],
        availableLanguage: ["en"],
      },
    ],
  }
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  }
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: abs("/logo-horizontal.png"),
    url: `${SITE.url}/`,
    telephone: SITE.telephone,
    email: SITE.email,
    priceRange: "$$",
    address: { "@type": "PostalAddress", ...SITE.address },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: [...SITE.areaServed],
    sameAs: [...SITE.sameAs],
    parentOrganization: { "@id": ORG_ID },
  }
}

export function serviceLd({
  serviceType,
  description,
  path,
  areaServed,
}: {
  serviceType: string
  description: string
  path: string
  areaServed?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    name: serviceType,
    description,
    url: abs(path),
    provider: { "@id": ORG_ID },
    areaServed: areaServed ?? [...SITE.areaServed],
  }
}

export function itemListLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  }
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  }
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}
