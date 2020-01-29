import useFetch from 'react-fetch-hook'
import { SearchResults, Movie } from './types'

const API_KEY = process.env.REACT_APP_OMDB_KEY

const createRequest = (params: string) =>
  `https:/www.omdbapi.com/?apikey=${API_KEY}${params}`

export const useSearch = (query: string) => {
  const { data, isLoading, error } = useFetch<SearchResults>(
    createRequest(`&s=${query}`),
    {
      depends: [query],
    }
  )

  if (!data) {
    return { movies: [], isLoading, error }
  }

  return { movies: data.Search, isLoading, error }
}

export const useMovie = (id?: string) => {
  const { data, isLoading, error } = useFetch<Movie>(
    createRequest(`&i=${id}`),
    {
      depends: [id],
    }
  )

  if (!data) {
    return { movie: null, isLoading, error }
  }

  return {
    movie: data,
    isLoading,
    error,
  }
}
