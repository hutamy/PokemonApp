const initialState = {
  pokemon: []
}

export default function PokemonReducer (state = initialState, action) {
  switch (action.type) {
    case 'SET_POKEMON':
      return { ...state, pokemon: action.payload }
    default:
      return state;
  }
}
