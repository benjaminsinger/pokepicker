import axios from 'axios'

/* API URL stored in our .env file - NO KEY required in this case */
const API_URL = process.env.REACT_APP_API_URL

/* Axios Instance - allows us to store request params
Rather than re-writing for every native JS fetch request */
const apiRequestObject = axios.create({
  baseUrl: API_URL,
})

/* NOTE: BS
 * In a production env - it may be more efficient to cache a local version of the
 * API content depending on what is required.
 */

export const fetchAllPokemonDataToLocalDB = async () => {
  const response = await apiRequestObject.get(`/pokemon?limit=151`)
  const { results } = await response.data
  console.log('results, ', results[0])
  /* my db.json server location */
  const apiComplete = await apiRequestObject.post(
    `http://localhost:5000/pokemon/${JSON.stringify(results[0].name)}`
  )

  console.log(apiComplete)
  // const apiComplete = await apiRequestObject.post(
  // `http://localhost:5000/pokemon/${JSON.stringify(results)}`
  // )
  // return apiComplete
}

export const fetchPokemonData = async url => {
  const response = await apiRequestObject.get(url)
  console.log(response.data)
  // return response.data
}

/* Fetch All Pokemon from API */
export const fetchPokemon = async () => {
  const response = await apiRequestObject.get(`/pokemon?limit=151`)
  const { results } = await response.data

  // const fullData = async () => results.map(
  //   el => (el = await fetchPokemonData(el.url))
  // )
  // console.log('fullData in fetchPokemon action', fullData)
  return results
}

/* Fetch Single Pokemon Info for Pokemon Page Route */
export const fetchSinglePokemon = async name => {
  const [pokemon, description] = await Promise.all([
    apiRequestObject.get(`/pokemon/${name}`),
    apiRequestObject.get(`/pokemon-species/${name}`),
  ])
  return { ...pokemon.data, ...description.data }
}

/* TO DO - Filter by type */
// export const filterByType = async type => {
//   const response = await apiRequestObject.get(`/pokemon/${type}`)
// }

/* NOTE: BS
 * Here - for every input onChange event in PokemonSearch.jsx
 * a request is being made directly to the API
 * */
export const filterPokemon = async text => {
  // incoming text made api-safe at the component end
  const APISafeText = text.toLowerCase().trim()
  const response = await apiRequestObject.get(`/pokemon?limit=151`)
  // console.log('response from filterPokemon func in actions')
  const filteredPokemon = await response.data.results.filter(p =>
    p.name.includes(APISafeText)
  )
  // console.log(filteredPokemon, text)
  return {
    pokemon: filteredPokemon,
    filter: text,
  }
}

/* getHabitat emoji for Pokemon.jsx */
export const getHabitat = habitat => {
  switch (habitat) {
    case 'sea':
    case 'waters-edge':
      return '🌊'
      break
    case 'mountain':
      return '🗻'
      break
    case 'forest':
    case 'grassland':
      return '🌲'
      break
    case 'cave':
      return '🚇'
      break
    case 'urban':
      return '🏡'
      break
    case 'rough-terrain':
      return '🌋'
      break
    case 'rare':
      return '💍'
      break
    default:
      return ''
      break
  }
}
