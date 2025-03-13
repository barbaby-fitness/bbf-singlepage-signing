import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://contracts.barbabyfitness.com'),
  title: 'BarBaby Fitness',
  description: 'Sign your fitness journey contract with BarBaby Fitness',
  openGraph: {
    title: 'BarBaby Fitness',
    description: 'Sign your fitness journey contract with BarBaby Fitness',
    url: 'https://contracts.barbabyfitness.com',
    siteName: 'BarBaby Fitness',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://pub-64bc777b98324a3096485c1cb97974b1.r2.dev/1.png',
      width: 1200,
      height: 630,
      alt: 'BarBaby Fitness'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BarBaby Fitness',
    description: 'Sign your fitness journey contract with BarBaby Fitness',
    images: ['https://pub-64bc777b98324a3096485c1cb97974b1.r2.dev/1.png']
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
