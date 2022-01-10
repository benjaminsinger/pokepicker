import { useReducer, useContext } from 'react'
import PokemonSearch from '../components/pokemon/PokemonSearch'
import PokemonList from '../components/pokemon/PokemonList'
import { fetchPokemon } from '../context/pokemon/PokemonActions'
import PokemonContext from '../context/pokemon/PokemonContext'

function Home() {
  const { dispatch, pokemon } = useContext(PokemonContext)

  const catchEmAll = async () => {
    console.log('getting em all')
    const response = await fetchPokemon()
    dispatch({ type: 'GET_POKEMON', payload: response })
  }

  return (
    <>
      <div className='overflow-hidden relative py-10 lg:py-14 px-5 bg-blue-500'>
        <div
          className='select-none'
          aria-hidden='true'
          style={{
            fontSize: `25em`,
            position: `absolute`,
            color: `#3778e3`,
            fontWeight: `bold`,
            transform: `rotate(351deg)`,
            top: `-0.5em`,
            left: `-0.15em`,
            lineHeight: `.8`,
          }}
        >
          PokéPicker
          <br />
          Application
        </div>
        <div className='container relative mx-auto'>
          <img
            className='absolute -right-50 -bottom-60 opacity-0 duration-500 transition-opacity lg:right-0 lg:opacity-100'
            src='/pika.png'
            style={{ maxWidth: '650px', height: 'auto' }}
            alt='PokéPicker App Icon'
          />
          <div className='max-w-xl'>
            <h1 className='text-5xl drop-shadow-xl md:text-5xl font-bold mb-2 text-white'>
              Welcome to PokéPicker {'\u2728'}
            </h1>
            <p className='text-2xl mb-1 leading-tight max-w-screen-md drop-shadow-xl font-bold md:text-3xl text-yellow-400'>
              Filter by name, type and more! Or select a Pokémon from the list
              below to find out more about it.
            </p>
          </div>
          <button
            onClick={catchEmAll}
            className='relative transition-colors mt-5 md:text-1xl bg-yellow-400 hover:bg-yellow-400 text-blue-700 font-bold py-3 px-4 border-b-4 border-yellow-600 hover:border-yellow-500 rounded'
          >
            Catch 'em All!
          </button>
        </div>
      </div>
      <div id='app-block' className='bg-gray-50'>
        <div className='container mx-auto py-10 md:py-20 text-center flex flex-col flex-1'>
          <PokemonSearch />
          <PokemonList />
        </div>
      </div>
    </>
  )
}

export default Home
