'use client'
import { CarouselCard } from '@/components/Carousel/CarouselCard'
import { CarouselContainer } from '@/components/Carousel/CarouselContainer'

import { PaperPlaneRight } from 'phosphor-react'
import { useEffect, useRef, useState } from 'react'
import { carouselImages } from '@/data/carousel-images'
import { Modal } from '../Modal'

interface QuizzInvitationProps {
  onAdvance: () => void
}

export function QuizzInvitation({ onAdvance }: QuizzInvitationProps) {
  const [onZoom, setOnZoom] = useState<boolean>(false)
  const [filteredImage, setFilteredImage] = useState<string>('')
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleCardZoom = (pathImage: string) => {
    const selectedImageToZoom = carouselImages.find(
      (image) => image === pathImage,
    )

    if (selectedImageToZoom) {
      setFilteredImage(selectedImageToZoom)
    }
    setOnZoom(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setOnZoom(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="mx-auto pt-4 flex-1 flex flex-col justify-between w-full">
      <h1 className="text-2xl text-gray-300 text-center">
        ESTAMOS PROCURANDO PESSOAS QUE BUSCAM
        <strong className="text-yellow-500 block pt-2">
          TRANSFORMAR A SUA VIDA FINANCEIRA!
        </strong>
      </h1>

      <CarouselContainer>
        {carouselImages.map((path, index) => (
          <CarouselCard
            key={index}
            pathImage={path}
            onClick={() => handleCardZoom(path)}
          />
        ))}
      </CarouselContainer>

      <h2 className="text-xl text-gray-300 text-center">
        Descubra como dominar estratégias de apostas no FIFA e alcance sua{' '}
        <strong className="text-xl text-yellow-500 text-center block">
          INDEPENDÊNCIA FINANCEIRA!
        </strong>
      </h2>
      <div className="px-2">
        <button
          onClick={onAdvance}
          className="flex w-full justify-center items-center bg-green-600 rounded-lg p-4 text-gray-300 gap-2 text-xl font-bold md:mx-auto mt-4 hover:bg-green-500 hover:text-gray-50 md:w-96"
        >
          <PaperPlaneRight size={24} weight="bold" className="-rotate-45" />
          QUERO MUDAR DE VIDA
        </button>
      </div>

      {onZoom && (
        <Modal>
          <CarouselCard
            pathImage={filteredImage}
            ref={cardRef}
            onClick={() => handleCardZoom(filteredImage)}
            className={`rounded-lg overflow-hidden absolute left-0 right-0 mx-auto transform scale-150 transition-all duration-700`}
            style={{ maxWidth: '180px' }}
          />
        </Modal>
      )}
    </div>
  )
}
