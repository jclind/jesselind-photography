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
  const GA_ID = 'G-G4SQVX634K'

  return (
    <html lang='en'>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <link
          rel='preconnect'
          href='https://firebasestorage.googleapis.com'
          crossOrigin=''
        />
        <link
          rel='preconnect'
          href='https://firestore.googleapis.com'
          crossOrigin=''
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
