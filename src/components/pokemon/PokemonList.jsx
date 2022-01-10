/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react'
import PokemonContext from '../../context/pokemon/PokemonContext'
import PokemonItem from './PokemonItem'
import Spinner from '../layout/shared/Spinner'

function PokemonList() {
  const { pokemon, loading } = useContext(PokemonContext)

  if (loading === true || pokemon.length === 0) {
    return (
      <>
        <h2 className='font-bold text-3xl text-gray-900'>
          Hit Catch 'em All! to get started
        </h2>
        <Spinner />
      </>
    )
  }

  return (
    <div>
      <div className='pokemon-list flex px-5 flex-wrap mt-8 justify-center'>
        {pokemon && pokemon.map((p, i) => <PokemonItem key={i} poke={p} />)}
      </div>
    </div>
  )
}

export default PokemonList
