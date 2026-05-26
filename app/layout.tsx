import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

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
  title: 'Zyphercode Private Limited | Medical Coding, IT Services & BPM',
  description:
    'We as BPM focus on integrated end-to-end outsourcing and deliver transformational benefits to clients through reduced cost, improved productivity, and process improvement. Zyphercode provides medical coding for healthcare organizations and IT services and consulting for IT organizations globally.',
  keywords: 'medical coding, IT services and consulting, BPM, business process management, healthcare coding, finance and accounting, HR services, customer experience, Hyderabad, Zyphercode',
  openGraph: {
    title: 'Zyphercode Private Limited | Medical Coding, IT Services & BPM',
    description:
      'We as BPM focus on integrated end-to-end outsourcing and deliver transformational benefits to clients through reduced cost, improved productivity, and process improvement.',
    type: 'website',
  },
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
