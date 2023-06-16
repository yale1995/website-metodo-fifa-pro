'use client'

import { useEffect, useState } from 'react'

export function VideoValidation() {
  const [showComponent, setShowComponent] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 20000)
  }, [])

  if (!showComponent) {
    return null // Return null if showComponent is false
  }

  return (
    <section className="max-w-7xl w-full mx-auto gap-4 p-2 md:p-8">
      <h2 className="text-3xl font-bold text-center text-yellow-300 py-4">
        DEPOIMENTOS DE ALUNOS
      </h2>
      <div className="flex max-w-6xl mx-auto gap-8 md:flex flex-col">
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/EIgPhJeI_mY"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full md:h-[450px] h-96 rounded-lg"
        />

        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/xIBRk8yrju4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full md:h-[450px] h-96 rounded-lg"
        />
      </div>
    </section>
  )
}
