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
  title: 'Zyphercode Private Limited | Medical Coding & IT Services',
  description:
    'Zyphercode Pvt Ltd delivers expert medical coding and IT services — helping healthcare organizations achieve accuracy, compliance, and efficiency at scale.',
  keywords: 'medical coding, IT services, healthcare coding, HIM, revenue cycle, Hyderabad, Zyphercode',
  openGraph: {
    title: 'Zyphercode Private Limited | Medical Coding & IT Services',
    description:
      'Expert medical coding and IT services for healthcare organizations. Accurate, compliant, and scalable.',
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
