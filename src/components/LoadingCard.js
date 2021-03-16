export default function LoadingCard () {
  return (
    <div className="w-full">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <div className="h-48 bg-gray-400 w-full object-cover object-center"/>
        <div className="p-6">
          <div className="flex justify-center">
            <p className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"/>
          </div>
          <div className="flex justify-center">
            <p className="bg-gray-400 animate-pulse h-4 w-1/3 mb-2"/>
          </div>
        </div>
      </div>
    </div>
  )
}