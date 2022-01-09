import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const apiRequestObject = axios.create({
  baseUrl: API_URL,
})

export const fetchPokemon = async () => {
  const response = await apiRequestObject.get(`/generation/1`)
  return response.data
}

export const fetchSinglePokemon = async id => {
  const response = await apiRequestObject.get(`/pokemon/${id}`)
  return response.data
}

export const filterPokemon = (pokes, text) => {
  const filteredPokemon = pokes.filter(p => p.name.includes(text))
  console.log(filteredPokemon, text)
  return {
    pokemon: filteredPokemon,
    filter: text,
  }
}

export const searchPokemon = async text => {}
