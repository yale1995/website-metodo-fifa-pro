'use client'

import { Logo } from '@/components/Logo'
import { useState } from 'react'

import { QuizzInvitation } from '@/components/QuizzInvitation'

import { QuestionOne } from '@/components/QuestionOne'
import { QuestionTwo } from '@/components/QuestionTwo'
import { QuestionThree } from '@/components/QuestionThree'

export default function PreSellPage() {
  const [step, setStep] = useState(1)

  function renderComponent() {
    switch (step) {
      case 1:
        return <QuizzInvitation onAdvance={handleAdvanceSteps} />
      case 2:
        return <QuestionOne onAdvance={handleAdvanceSteps} />
      case 3:
        return <QuestionTwo onAdvance={handleAdvanceSteps} />
      case 4:
        return <QuestionThree onAdvance={handleAdvanceSteps} />

      default:
        return null
    }
  }

  function handleAdvanceSteps() {
    setStep((state) => state + 1)
  }

  return (
    <div className="flex flex-col gap-3 min-h-screen justify-center bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      {renderComponent()}
    </div>
  )
}
