import './globals.css'

import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import { UserAnswerContextProvider } from '@/contexts/UserAnswerContext'

const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  subsets: ['cyrillic'],
})

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title:
    'Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!',
  description:
    'Descubra como dominar estratégias de apostas no FIFA e alcançar a INDEPENDÊNCIA FINANCEIRA!',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#1e1b4b',
  icons: {
    icon: '/favicon-fifapro.png',
  },
  openGraph: {
    title:
      'Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!',
    description:
      'Descubra como dominar estratégias de apostas no FIFA e alcançar a INDEPENDÊNCIA FINANCEIRA!',
    url: 'http://metodofifapro.com',
    siteName: 'Método FIFA PRO',
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
      <title>Mude de Vida com FIFA PRO</title>
      <body className={roboto.className}>
        <UserAnswerContextProvider>{children}</UserAnswerContextProvider>
      </body>
    </html>
  )
}
