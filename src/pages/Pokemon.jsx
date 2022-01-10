import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokemonContext from '../context/pokemon/PokemonContext'
import { fetchSinglePokemon } from '../context/pokemon/PokemonActions'

function Pokemon() {
  const { pokeperson, loading, dispatch } = useContext(PokemonContext)
  const params = useParams()

  useEffect(() => {
    const getPokeman = async () => {
      const pokeMan = await fetchSinglePokemon(params.name)
      console.log('pokeMan', pokeMan)
      dispatch({ type: 'GET_POKEPERSON', payload: pokeMan })
    }
    getPokeman()
  }, [dispatch, params.name])

  return <div>Pokemon Page</div>
}

export default Pokemon
