import './globals.css'
import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['cyrillic'] })

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title:
    'Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!',
  description:
    'Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!',
  viewport: 'width=device-width, initial-scale=1',
  'theme-color': '#1e1b4b',
  icons: {
    icon: '/favicon-fifapro.png',
  },
  openGraph: {
    title:
      'Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!',
    description:
      'Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!',
    url: 'http://metodofifapro.com.br',
    siteName: 'Método Fifa PRO',
    images: [
      {
        url: '/open-graph.png',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body
        className={`md:bg-[url('../assets/background-image.jpg')] bg-cover backdrop-blur-sm ${roboto.className}`}
      >
        {children}
      </body>
    </html>
  )
}
