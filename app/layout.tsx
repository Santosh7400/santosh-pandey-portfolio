import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['500', '600', '700', '800'] })

export const metadata: Metadata = {
  title: 'Santosh Pandey | Computer Science & Cybersecurity Portfolio',
  description:
    'Portfolio of Santosh Pandey — B.Tech Computer Science and Engineering (Cyber Security) student at SRM University–AP, IEEE published researcher in speech emotion recognition, and developer.',
  keywords: ['Santosh Pandey', 'Cybersecurity', 'Computer Science', 'Portfolio', 'SRM University-AP', 'IEEE', 'Nepal'],
  authors: [{ name: 'Santosh Pandey' }],
  openGraph: {
    title: 'Santosh Pandey | Portfolio',
    description: 'Computer Science & Cybersecurity engineer, researcher, and developer.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#05061a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
