import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <div className="flex flex-col gap-3 min-h-screen justify-center bg-indigo-950 md:bg-indigo-950/75 backdrop-brightness-75 px-2 py-4">
      <Logo />
      <div className="max-w-screen-md w-full mx-auto rounded-lg overflow-hidden my-10">
        <iframe
          allowFullScreen
          src="https://www.youtube.com/embed/HZFz1id31u0?autoplay=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-96"
        />
      </div>
    </div>
  )
}
