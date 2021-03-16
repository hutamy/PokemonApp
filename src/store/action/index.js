export const ADD_POKEMON = (pokemon) => {
  return (dispatch) => {
    const myPokemon = JSON.parse(JSON.parse(localStorage.getItem("pokemon")))
    let newPokemon = []
    if(!myPokemon) {
      pokemon.id = 1
      newPokemon.push(pokemon)
    }
    else if(myPokemon.length > 0) {
      pokemon.id = myPokemon[myPokemon.length-1].id + 1
      newPokemon = myPokemon.concat(pokemon)
    }
    dispatch({
      type: "SET_POKEMON",
      payload: newPokemon
    })
  }
}

export const REMOVE_POKEMON = (id) => {
  return (dispatch) => {
    const myPokemon = JSON.parse(JSON.parse(localStorage.getItem("pokemon")))
    const newPokemon = myPokemon.filter(el => el.id !== id)
    dispatch ({
      type: "SET_POKEMON",
      payload: newPokemon
    })
  }
}

export const EDIT_POKEMON = (id, name) => {
  return (dispatch) => {
    const myPokemon = JSON.parse(JSON.parse(localStorage.getItem("pokemon")))
    const newPokemon = myPokemon.map(el => {
      if(typeof id !== "number") {
        if(el.name === id) {
          el.NEW_NAME = name
        }
      }
      else if(el.id === id) {
        el.NEW_NAME = name
      }
      return el
    })
    dispatch({
      type: "SET_POKEMON",
      payload: newPokemon
    })
  }
}

export const RESET_POKEMON = (pokemons) => {
  return (dispatch) => {
    dispatch({
      type: "SET_POKEMON",
      payload: pokemons
    })
  }
}