'use client'

import { Logo } from '@/components/Logo'
import { CSSProperties, useState } from 'react'
import { useRouter } from 'next/navigation'

import { QuizzInvitation } from '@/components/QuizzInvitation'

import { QuestionOne } from '@/components/QuestionOne'
import { QuestionTwo } from '@/components/QuestionTwo'
import { QuestionThree } from '@/components/QuestionThree'
import { LoadingBar } from '@/components/LoadingBar'

import ClipLoader from 'react-spinners/ClipLoader'

export default function PreSellPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'green',
    marginTop: '24px',
  }

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
    }, 3000)
  }

  const allProgress = {
    2: 10,
    3: 33,
    4: 66,
    5: 100,
  } as const

  const progressBar = allProgress[step as keyof typeof allProgress]

  return (
    <div className="flex flex-col gap-3 min-h-screen bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      {step > 1 && <LoadingBar progress={progressBar} />}
      {step === 5 && (
        <ClipLoader cssOverride={override} color="#fff" size={78} />
      )}
      {renderComponent()}
    </div>
  )
}
