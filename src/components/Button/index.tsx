'use client'

import { useState, useEffect } from 'react'

export function Button() {
  const [showComponent, setShowComponent] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true)
    }, 1000 * 60 * 15 + 30)
  }, [])

  if (!showComponent) {
    return null // Return null if showComponent is false
  }

  return (
    <button
      className="p-2 md:p-4 bg-green-600 rounded-2xl font-bold text-gray-300 text-2xl block mx-auto mt-16 animate-bounce"
      onClick={() =>
        window.open('https://ev.braip.com/checkout/pla6g1zl/che6od0g')
      }
    >
      QUERO ALCANÇAR LUCROS MENSAIS CONSISTENTES!
    </button>
  )
}
