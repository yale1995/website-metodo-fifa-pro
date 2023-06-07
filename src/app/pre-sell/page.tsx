'use client'

import { Logo } from '@/components/Logo'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { QuizzInvitation } from '@/components/QuizzInvitation'

import { QuestionOne } from '@/components/QuestionOne'
import { QuestionTwo } from '@/components/QuestionTwo'
import { QuestionThree } from '@/components/QuestionThree'
import { LoadingBar } from '@/components/LoadingBar'

export default function PreSellPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()

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

  if (step === 5) {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  const allProgress = {
    2: 0,
    3: 33,
    4: 66,
    5: 100,
  } as const

  const progressBar = allProgress[step as keyof typeof allProgress]

  return (
    <div className="flex flex-col gap-3 min-h-screen justify-center bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      {step > 1 && <LoadingBar progress={progressBar} />}
      {renderComponent()}
    </div>
  )
}
