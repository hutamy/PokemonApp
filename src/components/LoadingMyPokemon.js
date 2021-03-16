import { useEffect } from "react"

export default function LoadingMyPokemon({ loading, setLoading }) {

  useEffect(() => {
    setTimeout(function(){ 
      setLoading(false)
    }, 3000)  
  }, [setLoading])

  if(!loading) return <div></div>
  if(loading)

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>          
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <div className="mt-3 pb-10 text-center sm:mt-5">
              <div className="flex justify-center">
                <img src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/amaura-2.gif" alt=""/> 
              </div>  
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Releasing your pokemon
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Please wait a moment!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}