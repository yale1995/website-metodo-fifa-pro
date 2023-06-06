import { LoadingBar } from '../LoadingBar'
import { QuestionsProps } from '../QuestionOne'

export function QuestionTwo({ onAdvance }: QuestionsProps) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <LoadingBar progress={66} />
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-600">PERGUNTA 02</h1>
        <h2 className="text-3xl font-light text-gray-300 py-2">
          Alguma vez já pensou em abrir seu próprio grupo de sinais?
        </h2>

        <div className="flex flex-col gap-4 max-w-xs mx-auto py-4">
          <button
            type="button"
            className="bg-green-600 p-3 rounded-lg text-gray-300 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Sim, tenho vontade!
          </button>

          <button
            type="button"
            className="bg-red-600 p-3 rounded-lg text-gray-300 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Não, nunca pensei sobre!
          </button>

          <button
            type="button"
            className="bg-yellow-600 p-3 rounded-lg text-gray-300 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Não sei o que é isso!
          </button>
        </div>
      </div>
    </div>
  )
}
