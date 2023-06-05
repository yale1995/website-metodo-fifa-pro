'use client'
import { CarouselCard } from '@/components/Carousel/CarouselCard'
import { CarouselContainer } from '@/components/Carousel/CarouselContainer'

import { PaperPlaneRight } from 'phosphor-react'

export function QuizzInvitation() {
  const carouselImages = [
    '/carousel-images/1.jpeg',
    '/carousel-images/2.jpeg',
    '/carousel-images/3.jpeg',
    '/carousel-images/4.jpeg',
    '/carousel-images/5.jpeg',
    '/carousel-images/1.jpeg',
    '/carousel-images/2.jpeg',
    '/carousel-images/3.jpeg',
    '/carousel-images/4.jpeg',
    '/carousel-images/5.jpeg',
  ]
  return (
    <div className="mx-auto w-full">
      <h1 className="text-2xl text-gray-300 text-center">
        ESTAMOS PROCURANDO PESSOAS QUE BUSCAM
        <strong className="text-yellow-500 block pt-2">
          TRANSFORMAR A SUA VIDA FINANCEIRA!
        </strong>
      </h1>

      <CarouselContainer>
        {carouselImages.map((path, index) => (
          <CarouselCard key={index} pathImage={path} />
        ))}
      </CarouselContainer>

      <h2 className="text-xl text-gray-300 text-center">
        Descubra como dominar estratégias de apostas no FIFA e alcance sua{' '}
      </h2>
      <strong className="text-xl text-yellow-500 text-center block">
        INDEPENDÊNCIA FINANCEIRA!
      </strong>

      {/* <p className="text-2xl text-gray-300 text-center py-4">
        Para isso, precisamos que você responda 3 perguntas rápidas.
      </p>

      <span className="text-gray-300 block text-center underline pb-8">
        CLIQUE NO LINK ABAIXO SE DESEJA RESPONDER E MUDAR DE VIDA
      </span> */}

      <button className="flex w-full justify-center items-center bg-green-600 rounded-lg p-4 text-gray-300 gap-2 text-xl font-bold mx-auto mt-4 hover:bg-green-500 hover:text-gray-50 md:w-96">
        <PaperPlaneRight size={24} weight="bold" className="-rotate-45" />
        QUERO MUDAR DE VIDA
      </button>
    </div>
  )
}
