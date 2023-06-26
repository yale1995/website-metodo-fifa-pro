'use client'

import { CarouselContainer } from '../Carousel/CarouselContainer'
import { printslImages } from '../../data/carousel-images'
import { CarouselCard } from '../Carousel/CarouselCard'
import { useEffect, useRef, useState } from 'react'
import { Modal } from '../Modal'

export function SocialValidation() {
  const [onZoom, setOnZoom] = useState<boolean>(false)
  const [filteredImage, setFilteredImage] = useState<string>('')
  const [showComponent, setShowComponent] = useState<boolean>(false)
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

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 1000 * 60 * 15 + 30)
  }, [])

  if (!showComponent) {
    return null // Return null if showComponent is false
  }

  return (
    <section className="py-12 md:py-24 bg-indigo-950 backdrop-brightness-75">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 max-w-sm">
          <h2 className="text-3xl font-bold md:text-left text-center text-yellow-400">
            Resultados dos nossos alunos
          </h2>
          <span className="text-gray-300 text-lg block md:text-left text-center">
            Alunos que aplicaram o Método FIFA PRO já estão obtendo resultados
            no mercado mais lucrativos das apostas.
          </span>
        </div>
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
              className={`rounded-lg overflow-hidden absolute left-0 right-0 bottom-auto mx-auto transform scale-150 transition-all duration-700`}
              style={{ maxWidth: '180px' }}
            />
          </Modal>
        )}
      </div>
    </section>
  )
}
