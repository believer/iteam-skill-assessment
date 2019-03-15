import { useFetch } from 'react-fetch-hook'

const API_KEY = process.env.REACT_APP_API_KEY
const IMAGE_BASE = 'https://image.tmdb.org/t/p'

const addPosters = movie => ({
  ...movie,
  poster: movie.poster_path ? `${IMAGE_BASE}/w300${movie.poster_path}` : null,
  backdrop: movie.backdrop_path
    ? `${IMAGE_BASE}/w1280${movie.backdrop_path}`
    : null,
})

const addProfilePicture = person => ({
  ...person,
  image: person.profile_path
    ? `${IMAGE_BASE}/w185${person.profile_path}`
    : null,
})

const createRequest = (route, params = '') => {
  return `https://api.themoviedb.org/3${route}?api_key=${API_KEY}${params}`
}

export const useSearch = query => {
  const { data, isLoading, error } = useFetch(
    createRequest(`/search/movie`, `&query=${query}`),
    {
      preventCallFetch: query.length === 0,
    }
  )

  if (!data) {
    return { movies: [], isLoading, error }
  }

  return { movies: data.results.map(addPosters), isLoading, error }
}

export const useMovie = id => {
  const { data: movie } = useFetch(createRequest(`/movie/${id}`))
  const { data: credits, isLoading, error } = useFetch(
    createRequest(`/movie/${id}/credits`)
  )

  if (!movie || !credits) {
    return { movie: {}, isLoading, error }
  }

  const crew = {
    cast: credits.cast.map(addProfilePicture),
    crew: credits.crew.map(addProfilePicture),
  }

  return {
    movie: {
      ...addPosters(movie),
      ...crew,
    },
    isLoading,
    error,
  }
}
