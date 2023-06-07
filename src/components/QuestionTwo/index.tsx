import { QuestionsProps } from '../QuestionOne'

export function QuestionTwo({ onAdvance }: QuestionsProps) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-green-600 animate-bounce">
          PERGUNTA 02
        </h1>
        <h2 className="text-2xl font-light text-gray-300 py-2">
          Qual o seu nível de conhecimento nesse mercado?
        </h2>

        <div className="flex flex-col gap-4 max-w-xs mx-auto py-4">
          <button
            type="button"
            className="bg-green-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Completo iniciante (sem experiência e banca baixa)
          </button>

          <button
            type="button"
            className="bg-red-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Já tive algum lucro com apostas esportivas mas sem constância
          </button>

          <button
            type="button"
            className="bg-yellow-600 p-3 rounded-lg text-gray-300 text-lg font-bold hover:bg-green-500"
            onClick={onAdvance}
          >
            Já opero com certa lucratividade mas quero evoluir para o próximo
            nível!
          </button>
        </div>
      </div>
    </div>
  )
}
