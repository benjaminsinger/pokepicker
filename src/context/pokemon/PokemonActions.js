import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const apiRequestObject = axios.create({
  baseUrl: API_URL,
})

export const fetchPokemon = async () => {}

export const filterPokemon = async filterType => {}

export const searchPokemon = async text => {}
