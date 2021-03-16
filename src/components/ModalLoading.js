import { useEffect } from "react"

export default function ModalLoading({ loading, catched, setLoading, setCatched }) {

  useEffect(() => {
    if(catched !== null) {
      setTimeout(function(){ 
        setCatched(null)
        setLoading(false)
      }, 3000)
    }
  }, [catched, setCatched, setLoading])

  if(!loading) return <div></div>
  if(loading || catched !== null)

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
              { loading && catched === null && <img src="https://i.pinimg.com/originals/40/f6/03/40f603b3e8b1fe98702ddbd62c08ebaa.gif" alt=""/> }
              { catched === true && <img src="https://i.imgur.com/c4xFd4q.gif" alt=""/>}
              { catched === false && <img src="https://i.pinimg.com/originals/66/89/dc/6689dc331be27e66349ce9a4d15ddff3.gif" alt=""/> }        
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                { loading && catched === null && "Try to catch your pokemon" }
                { catched === true && "Congratulations!" }
                { catched === false && "Missed!" }
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  { loading&& catched === null && "Please wait a moment!" }
                  { catched === true && "Successfully catch your pokemon" }
                  { catched === false && "Pokemon run away" }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}