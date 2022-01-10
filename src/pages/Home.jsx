import PokemonSearch from '../components/pokemon/PokemonSearch'
import PokemonList from '../components/pokemon/PokemonList'

function Home() {
  return (
    <>
      <div className='bg-brown overflow-hidden relative py-7 md:py-10 lg:py-14 px-4 mb-5 md:mb10 bg-blue-500'>
        <div className='container mx-auto'>
          <div
            className=''
            aria-hidden='true'
            style={{
              fontSize: `25em`,
              position: `absolute`,
              color: `#3778e3`,
              fontWeight: `bold`,
              transform: `rotate(351deg)`,
              top: `-0.65em`,
              left: `-0.35em`,
            }}
          >
            PokéPicker
          </div>
          <h1 className='text-4xl drop-shadow-xl md:text-5xl font-bold mb-2 text-white'>
            Welcome to PokéPicker
          </h1>
          <p className='text-2xl mb-1 max-w-screen-md drop-shadow-xl font-bold md:text-3xl text-yellow-400'>
            Filter by name, type and more! Or select a Pokémon from the list to
            find out more about it.
          </p>
        </div>
      </div>
      <div className='container mx-auto'>
        <button className='mb-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
          Catch 'em all!
        </button>
        <PokemonSearch />
        <PokemonList />
      </div>
    </>
  )
}

export default Home
