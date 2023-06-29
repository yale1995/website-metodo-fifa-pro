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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '554174783349868');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=554174783349868&ev=PageView&noscript=1" />`,
          }}
        />
      </head>
      <title>Mude de Vida com FIFA PRO</title>
      <body className={roboto.className}>
        <UserAnswerContextProvider>{children}</UserAnswerContextProvider>
      </body>
    </html>
  )
}
