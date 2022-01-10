import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PokemonContext from '../context/pokemon/PokemonContext'
import {
  fetchSinglePokemon,
  getHabitat,
} from '../context/pokemon/PokemonActions'
import Spinner from '../components/layout/shared/Spinner'

function Pokemon() {
  const { pokeperson, loading, dispatch } = useContext(PokemonContext)
  const params = useParams()
  /* destructure consts from object */
  const {
    name,
    sprites,
    names,
    flavor_text_entries: desc,
    color,
    habitat,
    types,
    evolves_from_species: evolvesFrom,
  } = pokeperson

  useEffect(() => {
    const getPokeman = async () => {
      const pokeman = await fetchSinglePokemon(params.name)
      // console.log('pokeman', pokeman)
      dispatch({ type: 'GET_POKEPERSON', payload: pokeman })
    }
    getPokeman()
  }, [dispatch, params.name])

  if (loading === true) {
    return <Spinner />
  }

  return (
    <>
      <div className=' relative py-10 lg:py-14 px-5 bg-blue-500'>
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
        <div className='container relative mx-auto'>
          <img
            className='relative right-10 -mt-20 md:-right-40 lg:right-0 xl:right-80 md:absolute duration-500 transition-opacity lg:opacity-100 drop-shadow-2xl'
            src={sprites && sprites.other.home.front_default}
            style={{ maxWidth: '650px', height: 'auto' }}
            alt='PokéPicker App Icon'
          />
          <div className='max-w-xl md:pt-20'>
            <h1 className='text-5xl drop-shadow-xl md:text-7xl font-bold mb-2 text-white'>
              <span className='capitalize'>{name}</span> {'\u2728'}
            </h1>
            <p className='text-2xl mb-1 leading-tight max-w-screen-md drop-shadow-xl md:mt-4 font-bold md:text-4xl text-yellow-400'>
              {desc && desc.find(d => d.language.name === 'en').flavor_text}
            </p>
          </div>
        </div>
      </div>
      <div
        id='app-block'
        className=' pb-10 md:pb-20  bg-blue-500 overflow-hidden px-5 md:pt-20'
      >
        <div className='container relative mx-auto z-10'>
          <p className='text-5xl md:text-8xl text-white font-bold'>
            <span className='mb-3 block'>
              {types &&
                `Type: ${types.map(type => type.type.name).join(' + ')}`}
            </span>
            <span className='mb-3 block text-white'>
              {habitat &&
                `Habitat: ${habitat.name} ${getHabitat(habitat.name)} `}
            </span>
            <span className='block text-yellow-400'>
              {evolvesFrom && `Evolves from: ${evolvesFrom.name}`}{' '}
              {evolvesFrom && (
                <Link
                  class='hover:text-yellow-100 transition-colors'
                  to={`/pokemon/${evolvesFrom.name}`}
                >
                  ↗️
                </Link>
              )}
            </span>
          </p>
        </div>
        <span
          className='container mx-auto text-5xl md:text-8xl font-bold relative block transform break-all md:break-normal mt-10 text-blue-600 text-white'
          aria-hidden='true'
        >
          {names && names.map(n => `${n.name}`).join(' ')}
        </span>
      </div>
    </>
  )
}

export default Pokemon
