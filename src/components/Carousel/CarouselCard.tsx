import Image from 'next/image'
import { useState } from 'react'

interface CarouselCardProps {
  pathImage: string
}

export function CarouselCard({ pathImage }: CarouselCardProps) {
  const [onZoom, setOnZoom] = useState(false)

  const handleCardZoom = () => {
    setOnZoom((state) => !state)
  }

  return (
    <div
      onClick={handleCardZoom}
      className={`shrink-0 snap-start rounded-lg overflow-hidden transition-all duration-300 ${
        onZoom ? 'absolute left-0 right-0 mx-auto transform scale-150' : ''
      }`}
      style={{ maxWidth: '180px' }}
    >
      <Image
        src={pathImage}
        alt="Resultados Método FIFA PRO"
        width={180}
        height={180}
      />
    </div>
  )
}
