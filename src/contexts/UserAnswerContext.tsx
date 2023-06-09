'use client'
import { ReactNode, createContext, useState } from 'react'

interface UserAnswerContextProviderProps {
  children: ReactNode
}

type UserAnswerContextType = {
  userAnswer: string
  setUserAnswer: (newState: string) => void
}

const UserAnswerContext = createContext({} as UserAnswerContextType)

export function UserAnswerContextProvider({
  children,
}: UserAnswerContextProviderProps) {
  const [userAnswer, setUserAnswer] = useState('')
  return (
    <UserAnswerContext.Provider value={{ userAnswer, setUserAnswer }}>
      {children}
    </UserAnswerContext.Provider>
  )
}
