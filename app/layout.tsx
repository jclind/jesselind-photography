import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.scss'
import Navbar from '@/components/Common/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jesse Lind Photography',
  description:
    'Explore the photography portfolio of Jesse Lind, featuring curated galleries and projects.',
  openGraph: {
    title: 'Jesse Lind Photography',
    url: 'https://jesselind-photography.vercel.app',
    siteName: 'Jesse Lind Photography',
    images: ['/default-og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
