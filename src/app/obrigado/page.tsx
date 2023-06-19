import { Logo } from '@/components/Logo'

export default function SuccessfulPayment() {
  return (
    <main className="md:bg-[url('../assets/background-image.jpg')] bg-cover backdrop-blur-sm">
      <div>
        <Logo />

        <div>
          <h1>Pagamento Realizado com sucesso! 🚀</h1>

          <p>
            Parabéns! Você acaba de garantir o conteúdo mais atualizado do
            Brasil sobre apostas esportivas em FIFA. Agora, confira seu email e
            siga corretamente as instruções para ter acesso ao nosso conteúdo.
          </p>
        </div>
      </div>
    </main>
  )
}
