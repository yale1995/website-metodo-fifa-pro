'use client'

import { Logo } from '@/components/Logo'
import { useState } from 'react'
import { QuestionOne } from '@/components/QuestionOne'
import { QuizzInvitation } from '@/components/QuizzInvitation'

export default function PreSellPage() {
  const [step, setStep] = useState(1)

  function renderComponent() {
    switch (step) {
      case 1:
        return <QuizzInvitation onAdvance={handleAdvanceSteps} />

      case 2:
        return <QuestionOne onAdvance={handleAdvanceSteps} />

      default:
        return null
    }
  }

  function handleAdvanceSteps() {
    setStep((state) => state + 1)
  }

  return (
    <div className="flex flex-col gap-3 min-h-screen h-full justify-center bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      {renderComponent()}
    </div>
  )
}
