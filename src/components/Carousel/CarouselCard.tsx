import Image from 'next/image'

interface CarouselCardProps {
  pathImage: string
}

export function CarouselCard({ pathImage }: CarouselCardProps) {
  return (
    <div
      className="shrink-0 snap-start rounded-lg overflow-hidden
     hover:scale-150 transition-transform duration-300"
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
