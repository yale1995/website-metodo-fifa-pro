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
    <section className="md:py-28 md:p-8 py-8 px-4 bg-green-600 shadow-xl">
      <div className="flex flex-col gap-4 max-w-6xl w-full mx-auto justify-center items-center">
        {order === 1 && (
          <h2 className="text-center text-2xl md:text-3xl md:font-bold text-gray-100">
            {'"'}O método utilizado pelos{' '}
            <span className="text-yellow-400">
              {' '}
              maiores apostadores de FIFA
            </span>{' '}
            do Brasil
            {'"'}
          </h2>
        )}

        {order === 2 && (
          <h2 className="text-center text-2xl md:text-3xl md:font-bold text-gray-100">
            Crie{' '}
            <span className="text-yellow-400">seu próprio grupo de sinais</span>{' '}
            e faça mais dinheiro 🚀
          </h2>
        )}
      </div>
    </section>
  )
}
