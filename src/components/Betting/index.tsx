'use client'
import { useState, useEffect } from 'react'

interface BettingProps {
  order: number
}

export function Betting({ order }: BettingProps) {
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
    <section className="md:py-4 md:p-8 py-2 px-4 bg-yellow-600 shadow-xl shadow-black">
      <div className="flex flex-col gap-4 max-w-6xl w-full mx-auto justify-center items-center">
        {order === 1 && (
          <h2 className="text-center md:text-2xl text-xl font-light text-gray-100">
            O método utilizado pelos
            <span className="text-yellow-100 font-normal">
              {' '}
              maiores apostadores de FIFA
            </span>{' '}
            do Brasil
          </h2>
        )}

        {order === 2 && (
          <h2 className="text-center md:text-2xl text-xl font-light text-gray-100">
            Nunca mais{' '}
            <span className="text-yellow-100 font-normal">
              pague grupo de sinais.
            </span>{' '}
            Seja você o tipster 🚀
          </h2>
        )}
      </div>
    </section>
  )
}
