import { Link } from 'react-router-dom'

function PokemonItem({ poke }) {
  const { name } = poke
  return (
    <Link
      className='text-base-content text-opacity-40 rounded-lg hover:bg-yellow-400 focus:bg-yellow-400 inline-block min-w-max'
      aria-label={`link to ${name} pokemon detail page`}
      to={`/pokemon/${name}`}
    >
      <span className='flex text-center space-x-1 text-xs px-4 py-1 bg-blue-600 my-1 mx-1 text-white font-bold border-b-blue-800 border-b-2 rounded-md'>
        {name}
      </span>
    </Link>
  )
}

export default PokemonItem
