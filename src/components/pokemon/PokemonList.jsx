/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from 'react'
import PokemonContext from '../../context/pokemon/PokemonContext'
import { fetchPokemon } from '../../context/pokemon/PokemonActions'
import PokemonItem from './PokemonItem'
import Spinner from '../layout/shared/Spinner'

function PokemonList() {
  const { pokemon, loading, dispatch } = useContext(PokemonContext)

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getPokemen = async () => {
      const pokeFolk = await fetchPokemon()
      dispatch({ type: 'GET_POKEMON', payload: pokeFolk.pokemon_species })
    }
    getPokemen()
  }, [])

  if (loading === true) {
    return <Spinner />
  }

  return (
    <div>
      <div className='pokemon-list flex flex-wrap my-8 content-between justify-start'>
        {pokemon && pokemon.map((p, i) => <PokemonItem key={i} poke={p} />)}
      </div>
    </div>
  )
}

export default PokemonList
