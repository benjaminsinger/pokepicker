import { useState, useContext } from 'react'
import PokemonContext from '../../context/pokemon/PokemonContext'
import Spinner from '../layout/shared/Spinner'
import { filterPokemon } from '../../context/pokemon/PokemonActions'

function PokemonSearch() {
  const [text, setText] = useState('')
  const { dispatch } = useContext(PokemonContext)

  /* function to update the pokemon available via state in PokemonReducer.js */
  const updateSearchFilter = async e => {
    const txt = e.target.value.toLowerCase()

    // set local State
    setText(txt)

    /* filterPokemon function from PokemonActions */
    const filteredPokemon = await filterPokemon(txt)

    console.log('filteredPokemon', filteredPokemon)

    /* dispatch to reducer to update pokemon state */
    dispatch({ type: 'FILTER_POKEMON', payload: filteredPokemon })
  }

  /* Potentially for two approaches here:
   * –– submit search values on submit event, or as I've done, filter available pokemon state with onChange event
   *
   */
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
