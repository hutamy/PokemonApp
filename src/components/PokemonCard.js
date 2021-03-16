import { useHistory } from "react-router-dom"
import { useEffect, useState } from "react"

export default function PokemonCard ({ pokemon }) {
  const history = useHistory()
  const isMyPokemon = JSON.parse(JSON.parse(localStorage.getItem("pokemon")))
  const [count, setCount] = useState(0)

  useEffect(() => {
    if(isMyPokemon && pokemon) {
      let number = isMyPokemon.filter(el => el.name === pokemon.name)
      if(number !== []) {
        setCount(number.length)
      }
    }
  }, [isMyPokemon, setCount, pokemon])

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0" style={{backgroundColor: `${pokemon.color}`}}>
        <img className="h-48 w-full object-contain" src={pokemon.image} alt=""/>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="block mt-2">
            <p onClick={() => history.push(`${pokemon.name}`, pokemon)} data-testid="pokemon-detail"  className="cursor-pointer text-xl font-semibold uppercase hover:text-indigo-500 text-gray-500 pb-2">
              {pokemon.name}
            </p>
            <div className="inline-flex pb-3">
              <span className="rounded-full items-center py-1 pr-2.5 text-sm font-medium mr-1 pl-2.5" style={{backgroundColor:"#E0E7FF", color:"#4338CA"}}>
                <div className="inline-flex items-center">
                  <p> Owned: {count} </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}