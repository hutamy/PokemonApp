import React, { useEffect, useState } from "react"
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from "../api/queries"
import { PokemonCard, LoadingCard } from "../components"

export default function PokemonList () {
  const {data, loading, error} = useQuery(GET_POKEMONS)
  const [pokemons, setPokemons] = useState([])
  const [color] = useState(["#FFD454", "#95D6C6", "#B10A85", "#0B81B5", "#4BA77C", "#EFAF8D", "#72709E", "#D8953D"])

  useEffect(() => {
    if(data) {
      if(data.pokemons) {
        if(data.pokemons.results) {
          let allPokemons = JSON.parse(JSON.stringify(data.pokemons.results)) 
          allPokemons.map(el => {
            let bgColor = color[Math.ceil(Math.random() * color.length-1)]
            el.color = bgColor
            return el
          })
          setPokemons(allPokemons)
        }
      }
    } 
  }, [data, setPokemons, color])

  if(error) return <p>Error</p>

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:pb-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Pokemon List</h2>
            <p className="text-xl text-gray-500">Humans may have created me, but they will never enslave me. This cannot be my destiny.</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {
            loading && Array.from(Array(8).keys()).map(index => {
              return (
                <LoadingCard key={index}/>
              )
            })
          }
          {
            pokemons.map((el, i) => {
              return ( 
                <PokemonCard key={i} pokemon={el}/>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}