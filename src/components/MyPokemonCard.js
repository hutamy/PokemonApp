import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { REMOVE_POKEMON } from "../store/action"
import { LoadingMyPokemon } from "../components"
import { useState } from "react"

export default function MyPokemonCard ({ pokemon }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  async function releasePokemon (id) {
    setLoading(true)
    await setTimeout(function(){ 
      dispatch(REMOVE_POKEMON(id))
      history.push(`/?message=Successfully release pokemon ${pokemon.NEW_NAME ? pokemon.NEW_NAME : pokemon.name}`)
    }, 4000)
  }

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0" style={{backgroundColor: `${pokemon.color}`}}>
        <img className="h-48 w-full object-contain" src={pokemon.image} alt=""/>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="block mt-2">
            <p onClick={() => history.push(`/my-pokemon-list/${pokemon.NEW_NAME ? pokemon.NEW_NAME : pokemon.name}`, pokemon)} className="cursor-pointer text-xl font-semibold uppercase hover:text-indigo-500 text-gray-500 pb-2">
              {pokemon.NEW_NAME ? pokemon.NEW_NAME : pokemon.name}
            </p>
            <div className="inline-flex pb-3">
              <span onClick={() => releasePokemon(pokemon.id)} className="cursor-pointer rounded-full items-center py-1 pr-2.5 text-sm font-medium mr-1 pl-2.5" style={{backgroundColor: "#FDE68A", color: "#B45309"}}>
                <div className="inline-flex items-center">
                  <p> Released Pokemon </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <LoadingMyPokemon loading={loading} setLoading={setLoading}/>
    </div>
  )
}