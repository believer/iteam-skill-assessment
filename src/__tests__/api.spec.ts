import { useSearch, useMovie } from '../api'
import useFetch from 'react-fetch-hook'
import { searchMovieBuilder, movieBuilder } from '../__fixtures__/movie-data'

jest.mock('react-fetch-hook')

afterEach(jest.clearAllMocks)

describe('#useSearch', () => {
  test('handles null data', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    })

    const result = useSearch('inception')

    expect(result).toMatchSnapshot()
  })

  test('search and return data', () => {
    const movieOne = searchMovieBuilder()
    const movieTwo = searchMovieBuilder()
    ;(useFetch as jest.Mock).mockReturnValue({
      data: {
        Search: [movieOne, movieTwo],
      },
      isLoading: false,
      error: null,
    })

    const result = useSearch('inception')

    expect((useFetch as jest.Mock).mock.calls[0][0]).toMatchSnapshot()
    expect(result).toEqual({
      error: null,
      isLoading: false,
      movies: [movieOne, movieTwo],
    })
  })
})

describe('#useMovie', () => {
  test('handles null data', () => {
    ;(useFetch as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    })

    const result = useMovie('1')

    expect(result).toMatchSnapshot()
  })

  test('search and return data', () => {
    const movie = movieBuilder()
    ;(useFetch as jest.Mock).mockReturnValueOnce({
      data: movie,
      isLoading: false,
      error: null,
    })

    const result = useMovie('1')

    expect((useFetch as jest.Mock).mock.calls[0][0]).toMatchSnapshot()
    expect(result).toEqual({
      movie,
      isLoading: false,
      error: null,
    })
  })
})
