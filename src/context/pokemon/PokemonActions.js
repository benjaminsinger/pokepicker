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

const fetchPokemonData = async url => {
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
  const response = await apiRequestObject.get(`/pokemon/${name}`)
  return response.data
}

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

export const searchPokemon = async text => {}
