import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blankate - Crypto & Web3 Dashboard',
  description: 'Modern crypto dashboard with Web3 integration, real-time prices, and portfolio tracking',
  keywords: ['crypto', 'web3', 'blockchain', 'defi', 'nft', 'ethereum'],
  authors: [{ name: 'Blankate Team' }],
  openGraph: {
    title: 'Blankate - Crypto & Web3 Dashboard',
    description: 'Modern crypto dashboard with Web3 integration',
    url: 'https://blankate.app',
    siteName: 'Blankate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Blankate Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blankate - Crypto & Web3 Dashboard',
    description: 'Modern crypto dashboard with Web3 integration',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800`}>
        <Providers>
          <div className="min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
