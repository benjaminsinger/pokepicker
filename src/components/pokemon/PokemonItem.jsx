import { Link } from 'react-router-dom'

function PokemonItem({ poke }) {
  const { name } = poke
  return (
    <Link
      className='text-base-content transition-colors rounded-lg bg-blue-600 my-1 mx-1 text-white hover:text-blue-700 focus:text-blue-700 font-bold border-b-blue-800 border-b-2 hover:bg-yellow-400 hover:border-b-yellow-600 focus:bg-yellow-400 inline-block min-w-max'
      aria-label={`link to ${name} pokemon detail page`}
      to={`/pokemon/${name}`}
    >
      <span className=' flex text-center space-x-1 text-xs px-4 py-1 '>
        {name}
      </span>
    </Link>
  )
}

export default PokemonItem
