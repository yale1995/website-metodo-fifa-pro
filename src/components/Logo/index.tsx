interface LogoProps {
  isFooter?: boolean
}

export function Logo({ isFooter = false }: LogoProps) {
  if (isFooter) {
    return (
      <p className="text-2xl text-center text-gray-300">
        MÉTODO
        <br />
        <span className="font-bold text-3xl">FIFA</span>
        <span className="text-green-600 font-bold text-3xl">PRO</span>
      </p>
    )
  }
  return (
    <p className="text-4xl text-center text-gray-300">
      MÉTODO
      <br />
      <span className="font-bold text-5xl">FIFA</span>
      <span className="text-green-600 font-bold text-5xl">PRO</span>
    </p>
  )
}
