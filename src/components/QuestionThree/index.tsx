import { QuestionsProps } from '../QuestionOne'

export function QuestionThree({ onAdvance }: QuestionsProps) {
  return (
    <div className="mx-auto px-2 flex flex-col items-center">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-green-600 animate-bounce">
          PERGUNTA 03
        </h1>
        <h2 className="text-2xl font-light text-gray-300 py-2">
          Possui experiências com apostas esportivas?
        </h2>

        <div className="flex flex-col gap-4 max-w-sm md:max-w-lg mx-auto py-4">
          <button
            type="button"
            className="bg-green-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            R$ 2.500,00 à R$ 5.000,00
          </button>

          <button
            type="button"
            className="bg-blue-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-blue-500"
            onClick={onAdvance}
          >
            R$ 5.000,00 à R$ 10.000,00
          </button>

          <button
            type="button"
            className="bg-yellow-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-yellow-500"
            onClick={onAdvance}
          >
            Acima de R$ 10.000,00
          </button>
        </div>
      </div>
    </div>
  )
}
