import { useState, useContext } from 'react'
import PokemonContext from '../../context/pokemon/PokemonContext'
import Spinner from '../layout/shared/Spinner'
import { filterPokemon } from '../../context/pokemon/PokemonActions'

function PokemonSearch() {
  const [text, setText] = useState('')
  const { pokemon, dispatch } = useContext(PokemonContext)

  const updateSearchFilter = async e => {
    console.log('etv', e.target.value, 'text', text)
    setText(e.target.value)
    const filteredPokemon = await filterPokemon(e.target.value)
    console.log('filteredPokemon', filteredPokemon)
    dispatch({ type: 'FILTER_POKEMON', payload: filteredPokemon })
  }

  const catchSubmit = e => {
    e.preventDefault()
    console.log('caught submit attempt')
  }

  return (
    <form onSubmit={catchSubmit} className='mx-auto'>
      <input
        className='rounded-l-lg p-4 mr-0 text-gray-800 border-gray-200 bg-white'
        placeholder='filter by name'
        value={text}
        onChange={e => updateSearchFilter(e)}
      />
      <button className='px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4'>
        Find 'em
      </button>
    </form>
  )
}

export default PokemonSearch
