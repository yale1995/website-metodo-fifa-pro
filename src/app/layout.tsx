import './globals.css'
import { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Método FIFA PRO | Transforme sua vida financeira',
  icons: {
    icon: '/favicon-fifapro.png',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="title"
          content="Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!"
        />
        <meta
          name="description"
          content="Transforme a sua vida financeira através do Método FIFA PRO. Descubra como dominar estratégias de apostas no FIFA e alcance a sua independência financeira!"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[url('../assets/background-image.jpg')] bg-cover backdrop-blur-sm">
        {children}
      </body>
    </html>
  )
}
