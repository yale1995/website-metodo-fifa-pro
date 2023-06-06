import { QuestionsProps } from '../QuestionOne'

export function QuestionThree({ onAdvance }: QuestionsProps) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-600">PERGUNTA 03</h1>
        <h2 className="text-3xl font-light text-gray-300 py-2">
          Possui experiências com apostas esportivas?
        </h2>

        <div className="flex flex-col gap-4 max-w-xs mx-auto py-4">
          <button
            type="button"
            className="bg-green-600 p-3 rounded-lg text-gray-300 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Sim, ganhei dinheiro!
          </button>

          <button
            type="button"
            className="bg-red-600 p-3 rounded-lg text-gray-300 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Sim, perdi dinheiro!
          </button>

          <button
            type="button"
            className="bg-yellow-600 p-3 rounded-lg text-gray-300 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Não tenho experiência!
          </button>
        </div>
      </div>
    </div>
  )
}
