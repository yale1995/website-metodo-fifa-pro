'use client'

import { Logo } from '@/components/Logo'
import { QuizzInvitation } from '../../components/QuizzInvitation/QuizzInvitation'
import { useState } from 'react'

export default function PreSellPage() {
  const [step] = useState(1)

  function renderComponent() {
    switch (step) {
      case 1:
        return <QuizzInvitation />
    }
  }

  return (
    <div className="flex flex-col gap-3 min-h-screen h-full justify-center bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      {renderComponent()}
    </div>
  )
}
