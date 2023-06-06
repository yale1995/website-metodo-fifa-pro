import { LoadingBar } from '../LoadingBar'

export function QuestionTwo({ onAdvance }: any) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <LoadingBar progress={30} />
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-600">PERGUNTA 01</h1>
        <h2 className="text-3xl font-light text-gray-300 py-2">
          Você possui renda igual ou superior a R$ 5000?
        </h2>

        <div className="flex flex-col gap-4 max-w-xs mx-auto py-4">
          <button
            type="button"
            className="bg-green-600 p-3 rounded-lg text-green-50 text-2xl font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            SIM
          </button>

          <button
            type="button"
            className="bg-red-600 p-3 rounded-lg text-green-50 text-2xl font-bold hover:bg-red-500"
            onClick={onAdvance}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  )
}
