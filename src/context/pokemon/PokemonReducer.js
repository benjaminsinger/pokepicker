const PokemonReducer = (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      }
      break
    case 'FILTER_POKEMON':
      return {
        ...state,
        pokemon: action.payload.pokemon,
        filter: action.payload.filter,
        loading: false,
      }
      break
    case 'GET_POKEPERSON':
      return {
        ...state,
        pokeperson: action.payload,
        loading: false,
      }
      break
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
      break
    default:
      return state
      break
  }
}

export default PokemonReducer
