import { useState, useContext, useEffect } from 'react'
import PokemonContext from '../../context/pokemon/PokemonContext'
import Spinner from '../layout/shared/Spinner'
import { filterPokemon } from '../../context/pokemon/PokemonActions'

function PokemonSearch() {
  const [text, setText] = useState('')
  const { dispatch, pokemon, filter } = useContext(PokemonContext)

  useEffect(() => {
    if (filter !== '') setText(filter)
  }, [])

  /* function to update the pokemon available via state in PokemonReducer.js */
  const updateSearchFilter = async e => {
    const txt = e.target.value.trim().toLowerCase().replace(/\s/g, '')

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

  if (pokemon.length === 0 && filter === '') return false

  return (
    <form onSubmit={catchSubmit} className='mx-auto drop-shadow-md'>
      <input
        className='rounded-md p-4 mr-0 border-4 block text-blue-700 border-blue-700 bg-white w-100 flex'
        placeholder='Type To Filter Pokémon'
        value={text}
        onChange={e => updateSearchFilter(e)}
        aria-describedby='filterInstructions'
      />
      {/* <button className='px-8 rounded-r-lg bg-yellow-400  text-blue-700 font-bold p-4'>
        Filter 'em all
      </button> */}
      <p id='filterInstructions' className='invisible'>
        Type to filter Pokémon
      </p>
    </form>
  )
}

export default PokemonSearch
