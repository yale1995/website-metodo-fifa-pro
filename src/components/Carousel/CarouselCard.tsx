import Image from 'next/image'
import {
  HTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'

interface CarouselCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pathImage: string
}

const CarouselCardBase: ForwardRefRenderFunction<
  HTMLDivElement,
  CarouselCardProps
> = ({ pathImage, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`shrink-0 snap-start rounded-lg overflow-hidden`}
      {...props}
    >
      <Image
        src={pathImage}
        alt="Resultados Método FIFA PRO"
        width={180}
        height={180}
        priority={true}
      />
    </div>
  )
}

export const CarouselCard = forwardRef(CarouselCardBase)
