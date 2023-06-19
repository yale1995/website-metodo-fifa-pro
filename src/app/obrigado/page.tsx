import { Logo } from '@/components/Logo'

export default function SuccessfulPayment() {
  return (
    <main className="md:bg-[url('../assets/background-image.jpg')] bg-cover backdrop-blur-sm">
      <div className="flex flex-col gap-3 min-h-screen bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 pt-4 text-gray-50 md:px-24 px-2 py-10">
        <Logo />

        <div className="max-w-6xl mx-auto md:py-10 px-2 flex-1">
          <h1 className="text-center md:text-4xl font-bold text-2xl py-4">
            Pagamento Realizado com sucesso! 🚀
          </h1>

          <p className="text-sm text-center md:text-base md:text-left">
            Parabéns! Você acaba de garantir o conteúdo mais atualizado do
            Brasil sobre apostas esportivas em FIFA. Agora, confira seu email e
            siga corretamente as instruções para ter acesso ao nosso conteúdo.
          </p>
        </div>
      </div>
    </main>
  )
}
