import React, { useEffect, useState } from "react"
import { MyPokemonCard } from "../components"

export default function MyPokemonList () {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    let myPokemon = JSON.parse(JSON.parse(localStorage.getItem("pokemon")))
    setPokemon(myPokemon)
  }, [setPokemon])

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:pb-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 data-testid="my-pokemon-page" className="text-3xl font-extrabold tracking-tight sm:text-4xl">My Pokemon List</h2>
            <p className="text-xl text-gray-500">Humans may have created me, but they will never enslave me. This cannot be my destiny.</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {
            pokemon !== null && pokemon.map((el, i) => {
              return ( 
                <MyPokemonCard key={i} pokemon={el}/>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}