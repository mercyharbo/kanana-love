import { Footer } from '@/components/landing-page/Footer'
import { Header } from '@/components/landing-page/Header'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Kanana Love | Executive Career Strategist & Leadership Transition Expert',
  description:
    'Strategic career support for senior leaders, VPs, and executives facing layoffs or transitions. Regain clarity, restore signal, and handle your next move with executive precision.',
  keywords: [
    'executive career strategist',
    'leadership transition',
    'senior career move',
    'VP layoff support',
    'executive job search',
    'Kanana Love',
  ],
  openGraph: {
    title: 'Kanana Love | Executive Career Strategist',
    description:
      'Helping senior leaders navigate complex transitions and layoffs at an executive level.',
    url: 'https://kananalove.com',
    siteName: 'Kanana Love',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kanana Love | Executive Career Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanana Love | Executive Career Strategist',
    description:
      'Strategic career support for senior leaders facing layoffs or transitions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
