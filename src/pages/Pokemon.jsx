import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PokemonContext from '../context/pokemon/PokemonContext'

function Pokemon() {
  const { pokeperson, loading, dispatch } = useContext(PokemonContext)
  const params = useParams()

  return <div>Pokemon Page</div>
}

export default Pokemon
