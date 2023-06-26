'use client'

import { useEffect, useState } from 'react'

interface VideoValidationProps {
  name: string
  description: string
  path: string
}

export function VideoValidation({
  name,
  description,
  path,
}: VideoValidationProps) {
  const [showComponent, setShowComponent] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 1000 * 60 * 15 + 30)
  }, [])

  if (!showComponent) {
    return null // Return null if showComponent is false
  }

  const isAyrtonRafael = name === 'Ayrton Rafael'

  return (
    <section className="py-12 px-2 bg-indigo-950 backdrop-brightness-75">
      <div
        className={`max-w-6xl mx-auto flex flex-col ${
          isAyrtonRafael ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center gap-8`}
      >
        <div className="flex-shrink-0 max-w-sm">
          <h2 className="text-3xl font-bold md:text-left text-center text-yellow-400">
            {name}
          </h2>
          <span className="text-gray-300 text-lg block md:text-left text-center">
            {description}
          </span>
        </div>
        <div className="flex w-full shadow-black shadow-lg">
          <video controls autoPlay loop muted className="rounded-lg">
            <source src={path} />
          </video>
        </div>
      </div>
    </section>
  )
}
