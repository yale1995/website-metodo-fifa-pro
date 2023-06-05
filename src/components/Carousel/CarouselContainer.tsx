'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface CarouselContainerProps {
  children: ReactNode
}

export function CarouselContainer({ children }: CarouselContainerProps) {
  const carouselRef = useRef<any>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft
        const itemWidth = carouselRef.current.children[0].offsetWidth
        const numItems = carouselRef.current.children.length
        const maxScrollLeft = (numItems - 3) * itemWidth - 3 * 20

        carouselRef.current.scrollTo({
          left: scrollLeft >= maxScrollLeft ? 0 : scrollLeft + itemWidth,
          behavior: 'smooth',
        })
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex gap-10 overflow-x-auto snap-mandatory py-4 no-scrollbar"
      ref={carouselRef}
    >
      {children}
    </div>
  )
}
