import PokemonSearch from '../components/pokemon/PokemonSearch'
import PokemonList from '../components/pokemon/PokemonList'

function Home() {
  return (
    <>
      <button className='mb-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
        Catch 'em all!
      </button>
      <PokemonSearch />
      <PokemonList />
    </>
  )
}

export default Home
