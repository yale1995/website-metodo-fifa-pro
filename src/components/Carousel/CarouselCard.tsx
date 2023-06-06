import Image from 'next/image'
import { useState, useEffect, useRef, Fragment } from 'react'
import { Modal } from '../Modal'

interface CarouselCardProps {
  pathImage: string
}

export function CarouselCard({ pathImage }: CarouselCardProps) {
  const [onZoom, setOnZoom] = useState(false)
  const cardRef = useRef<any>(null)

  const handleCardZoom = () => {
    setOnZoom(true)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setOnZoom(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Fragment>
      <div
        ref={cardRef}
        onClick={handleCardZoom}
        className={`shrink-0 snap-start rounded-lg overflow-hidden`}
      >
        <Image
          src={pathImage}
          alt="Resultados Método FIFA PRO"
          width={180}
          height={180}
        />
      </div>

      {onZoom && (
        <Modal>
          <div
            ref={cardRef}
            onClick={handleCardZoom}
            className={`rounded-lg overflow-hidden absolute transition-all duration-300 left-0 right-0 mx-auto transform scale-150`}
            style={{ maxWidth: '180px' }}
          >
            <Image
              src={pathImage}
              alt="Resultados Método FIFA PRO"
              width={180}
              height={180}
            />
          </div>
        </Modal>
      )}
    </Fragment>
  )
}
