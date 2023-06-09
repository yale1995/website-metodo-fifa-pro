import { QuestionsProps } from '../QuestionOne'
import { useContext } from 'react'
import { UserAnswerContext } from '@/contexts/UserAnswerContext'

export function Aprove({ onAdvance }: QuestionsProps) {
  const { userAnswer } = useContext(UserAnswerContext)
  return (
    <div className="mx-auto flex-1 flex flex-col justify-center items-center">
      <div className="text-center py-10">
        <h1 className="text-xl font-normal text-gray-300 md:max-w-2xl">
          DE ACORDO COM AS SUAS RESPOSTAS CONCLUÍMOS QUE{' '}
          <span className="text-yellow-300">{userAnswer}</span>
        </h1>
        <h2 className="text-3xl font-bold text-gray-300 py-10 animate-bounce">
          DECIDIMOS TE AJUDAR
        </h2>

        <div className="flex flex-col gap-10 max-w-sm md:max-w-lg mx-auto text-gray-300">
          <h3 className="text-xl font-bold">
            GOSTARIA DE CONHECER O MÉTODO{' '}
            <span className="text-yellow-300">FIFA PRO?</span>
          </h3>

          <p className="font-normal">
            ANTES DISSO, VOCÊ PRECISSA ASSISTIR UM VÍDEO RÁPIDO DE 5 MINUTOS E
            ENTER COMO TUDO VAI FUNCIONAR
          </p>

          <button
            type="button"
            className="bg-green-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            SIM! EU QUERO!
          </button>
        </div>
      </div>
    </div>
  )
}
