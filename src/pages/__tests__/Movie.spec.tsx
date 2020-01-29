import * as React from 'react'
import Movie from '../Movie'
import { render } from '@testing-library/react'
import { useMovie } from '../../api'
import { movieBuilder } from '../../__fixtures__/movie-data'

jest.mock('../../api')

test('renders empty movie', () => {
  ;(useMovie as jest.Mock).mockReturnValue({
    movie: null,
    isLoading: false,
    error: null,
  })

  const { queryByText } = render(<Movie id="1" />)

  expect(useMovie).toHaveBeenCalledWith('1')

  // Tests movie title
  expect(queryByText(/batman/i)).not.toBeInTheDocument()
})

test('renders movie information', () => {
  const movie = movieBuilder()
  ;(useMovie as jest.Mock).mockReturnValue({
    movie,
    isLoading: false,
    error: null,
  })

  const { getByText } = render(<Movie id="1" />)

  expect(useMovie).toHaveBeenCalledWith('1')

  // Tests movie title
  expect(getByText(movie.Title)).toBeInTheDocument()

  // Tests cast
  expect(getByText(movie.Actors.split(', ')[0])).toBeInTheDocument()
})
