import { Betting } from '@/components/Betting'
import { Logo } from '@/components/Logo'
import { SocialValidation } from '@/components/SocialValidation'
import { VideoValidation } from '@/components/VideoValidation'
import { Footer } from '../components/Footer'
import { Fragment } from 'react'
import { FAQ } from '@/components/FAQ'
import { Button } from '@/components/Button'

export default async function Home() {
  const videos = [
    {
      name: 'Ayrton Rafael',
      description:
        'Aluno de Goiânia/GO aplicando o Método FIFA PRO já obteve mais R$9.000 de resultado.',
      path: '/videos/video-1.mp4',
    },

    {
      name: 'Miguel Goulart',
      description:
        'Aluno de Teresina/PI com o Método FIFA PRO já obteve mais R$18.000 de lucro.',
      path: '/videos/video-2.mp4',
    },
  ]
  return (
    <Fragment>
      <div className="md:bg-[url('../assets/background-image.jpg')] bg-cover backdrop-blur-sm">
        <div className="flex flex-col gap-3 min-h-screen bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 pt-4">
          <Logo />
          <div className="max-w-screen-lg flex flex-col flex-1 w-full mx-auto rounded-lg overflow-hidden py-8">
            <h1 className="text-gray-300 max-w-xl mx-auto text-center text-2xl font-bold py-4 px-2">
              ASSISTA AO VÍDEO ABAIXO E DESCUBRA COMO{' '}
              <span className="text-yellow-400">
                CONQUISTAR LUCROS DE ATÉ R$ 40.000 MENSAIS
              </span>
            </h1>
            <iframe
              src="https://scripts.converteai.net/3c0401af-2147-438a-b17c-922a08f21cf2/players/649221f0f6efcf00093c9d86/embed.html"
              id="ifr_649221f0f6efcf00093c9d86"
              className="w-full md:flex-1 h-60"
              referrerPolicy="origin"
            />
            <div className="px-2">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Betting order={1} />
      <SocialValidation />
      {videos.map((video) => (
        <VideoValidation key={video.name} {...video} />
      ))}
      <Betting order={2} />
      <FAQ />
      <Footer />
    </Fragment>
  )
}
