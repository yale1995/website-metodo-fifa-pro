'use client'

import { CarouselContainer } from '../Carousel/CarouselContainer'
import { printslImages } from '../../data/carousel-images'
import { CarouselCard } from '../Carousel/CarouselCard'
import { useEffect, useRef, useState } from 'react'
import { Modal } from '../Modal'

export function SocialValidation() {
  const [onZoom, setOnZoom] = useState<boolean>(false)
  const [filteredImage, setFilteredImage] = useState<string>('')
  const cardRef = useRef<HTMLDivElement | null>(null)

  const handleCardZoom = (pathImage: string) => {
    const selectedImageToZoom = printslImages.find(
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
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-yellow-400 py-4">
        RESULTADOS DOS NOSSOS ALUNOS
      </h2>
      <CarouselContainer>
        {printslImages.map((image, index) => (
          <CarouselCard
            pathImage={image}
            key={index}
            onClick={() => handleCardZoom(image)}
          />
        ))}
      </CarouselContainer>

      {onZoom && (
        <Modal>
          <CarouselCard
            pathImage={filteredImage}
            ref={cardRef}
            onClick={() => handleCardZoom(filteredImage)}
            className={`rounded-lg overflow-hidden absolute left-0 right-0 bottom-56 mx-auto transform scale-150 transition-all duration-700`}
            style={{ maxWidth: '180px' }}
          />
        </Modal>
      )}
    </section>
  )
}
