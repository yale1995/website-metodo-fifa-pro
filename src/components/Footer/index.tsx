'use client'
import { useState, useEffect } from 'react'
import { Logo } from '../Logo'

export function Footer() {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 1000 * 60 * 15 + 30)
  }, [])

  if (!showComponent) {
    return null // Return null if showComponent is false
  }

  return (
    <footer className="px-2 py-6 bg-indigo-700">
      <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto md:flex-row ">
        <Logo isFooter={true} />

        <p className="text-xs text-center text-gray-300 md:text-left">
          Este site não é afiliado ao Facebook ou a qualquer entidade do
          Facebook. Depois que você sair do Facebook, a responsabilidade não é
          deles e sim do nosso site. Fazemos todos os esforços para indicar
          claramente e mostrar todas as provas do produto e usamos resultados
          reais. Nós não vendemos o seu e-mail ou qualquer informação para
          terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma
          dúvida, sinta-se à vontade para usar o link de contato e falar conosco
          em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e
          respondemos todas as mensagens por ordem de chegada
        </p>
      </div>
      <span className="block text-center text-white font-normal pt-4 md:p-0">
        Contato: suportefifapro@gmail.com
      </span>
    </footer>
  )
}
