export const LoadingBar = ({ progress }: any) => {
  return (
    <div className="relative w-full h-10 bg-gray-200 rounded overflow-hidden md:w-96 mt-10">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-300 to-yellow-500"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-20"></div>
    </div>
  )
}
