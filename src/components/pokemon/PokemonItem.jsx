function PokemonItem({ poke }) {
  const { name, url } = poke
  return (
    <span className='flex items-center space-x-1 text-xs px-4 py-1 bg-blue-600 my-1 mx-1 text-white font-bold border-b-blue-800 border-b-2 rounded-md'>
      {name}
    </span>
  )
}

export default PokemonItem
