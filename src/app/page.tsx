import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <div className="flex flex-col gap-3 min-h-screen bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      <div className="max-w-screen-md w-full mx-auto rounded-lg overflow-hidden">
        <h1 className="text-gray-300 text-center text-2xl font-bold py-8">
          ASSISTA AO VÍDEO ABAIXO E DESCUBRA COMO{' '}
          <span className="text-yellow-300">
            CONQUISTAR LUCROS DE ATÉ R$ 40.000 MENSAIS
          </span>
        </h1>
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/XgferMHVaEA?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-96"
        />
      </div>
    </div>
  )
}
