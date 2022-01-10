import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokemonContext from '../context/pokemon/PokemonContext'
import { fetchSinglePokemon } from '../context/pokemon/PokemonActions'
import Spinner from '../components/layout/shared/Spinner'

function Pokemon() {
  const { pokeperson, loading, dispatch } = useContext(PokemonContext)
  const params = useParams()
  /* destructure consts from object */
  const { name, sprites, names, flavor_text_entries: desc, color } = pokeperson

  useEffect(() => {
    // reset pokemon state
    dispatch({ type: 'GET_POKEMON', payload: [] })
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
            className='relative right-10 -mt-20 -mb-5 md:absolute duration-500 transition-opacity lg:opacity-100 drop-shadow-2xl'
            src={sprites && sprites.other.home.front_default}
            style={{ maxWidth: '650px', height: 'auto' }}
            alt='PokéPicker App Icon'
          />
          <div className='max-w-xl'>
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
        className=' py-10 md:py-20  bg-blue-500 overflow-hidden'
      >
        <div className='container relative mx-auto z-10'>
          <h3>Heading</h3>
          <p className='lorem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia voluptatibus ea velit? Eveniet molestias qui facere amet
            voluptatem fuga, vero, cum, quasi pariatur rerum sapiente at
            possimus accusamus obcaecati!
          </p>
          <h3>Heading</h3>
          <p className='lorem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia voluptatibus ea velit? Eveniet molestias qui facere amet
            voluptatem fuga, vero, cum, quasi pariatur rerum sapiente at
            possimus accusamus obcaecati!
          </p>
          <h3>Heading</h3>
          <p className='lorem'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia voluptatibus ea velit? Eveniet molestias qui facere amet
            voluptatem fuga, vero, cum, quasi pariatur rerum sapiente at
            possimus accusamus obcaecati!
          </p>
        </div>
        <span
          className='text-8xl font-bold relative block transform w-100 break-all md:break-normal inline-block text-white'
          aria-hidden='true'
        >
          {names && names.map(n => `${n.name}`).join(' ')}
        </span>
      </div>
    </>
  )
}

export default Pokemon
