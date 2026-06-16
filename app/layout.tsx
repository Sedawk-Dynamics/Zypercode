import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/json-ld'
import { SITE, organizationLd, websiteLd } from '@/lib/seo'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  // metadataBase lets Next resolve every relative canonical/OG URL to the
  // absolute www + https host — without it, OG/canonical tags break.
  metadataBase: new URL(SITE.url),
  title: {
    default: 'IT Services, BPO & Healthcare Solutions | Zyphercode',
    template: '%s | Zyphercode',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: `${SITE.url}/` }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    'IT services and consulting',
    'BPO and BPM services',
    'BPM services Hyderabad',
    'healthcare services outsourcing',
    'medical coding',
    'ICD-10 CPT HCC coding',
    'clinical documentation improvement',
    'HCC risk adjustment coding',
    'coding audits and compliance',
    'Zyphercode',
  ],
  alternates: {
    canonical: '/',
    languages: { en: '/', 'x-default': '/' },
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    url: `${SITE.url}/`,
    siteName: SITE.name,
    locale: SITE.locale,
    title: 'IT Services, BPO & Healthcare Solutions | Zyphercode',
    description: SITE.description,
    images: [{ url: SITE.defaultOgImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Services, BPO & Healthcare Solutions | Zyphercode',
    description: SITE.description,
    images: [SITE.defaultOgImage],
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  formatDetection: { telephone: true, address: true, email: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {/* Sitewide structured data: Organization + WebSite */}
        <JsonLd data={[organizationLd(), websiteLd()]} />
        {children}
      </body>
    </html>
  )
}
