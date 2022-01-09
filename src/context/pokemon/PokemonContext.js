import { useReducer, createContext } from 'react'
import PokemonReducer from './PokemonReducer'

const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const initialState = { pokemon: [], pokeperson: {}, loading: true }
  const [state, dispatch] = useReducer(PokemonReducer, initialState)
  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContext
