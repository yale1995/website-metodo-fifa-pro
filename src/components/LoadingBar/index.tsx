interface LoadingBarProps {
  progress: number
}

export const LoadingBar = ({ progress }: LoadingBarProps) => {
  return (
    <div className="relative mx-auto w-full h-10 bg-gray-200 rounded overflow-hidden md:max-w-lg my-14">
      <div
        className="absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-700"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30" />
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20" />
    </div>
  )
}
