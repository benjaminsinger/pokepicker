import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokemonContext from '../context/pokemon/PokemonContext'
import { fetchSinglePokemon } from '../context/pokemon/PokemonActions'
import Spinner from '../components/layout/shared/Spinner'

function Pokemon() {
  const { pokeperson, loading, dispatch } = useContext(PokemonContext)
  const params = useParams()

  const { name, abilities, stats, height, forms, base_experience, sprites } =
    pokeperson

  useEffect(() => {
    const getPokeman = async () => {
      const pokeman = await fetchSinglePokemon(params.name)
      console.log('pokeman', pokeman)
      dispatch({ type: 'GET_POKEPERSON', payload: pokeman })
    }
    getPokeman()
  }, [dispatch, params.name])

  if (loading === true) {
    return <Spinner />
  }

  return (
    <div className='hero overflow-hidden relative py-10 lg:py-14 px-5 bg-blue-500'>
      <div className='container mx-auto'>
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
          {name}
          <br />
          PokéPicker
        </div>
        <div className='max-w-xl'>
          <h1 className='text-5xl drop-shadow-xl md:text-8xl font-bold mb-2 text-white'>
            {name} {'\u2728'}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Pokemon
