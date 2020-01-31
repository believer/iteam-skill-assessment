import { render } from '@testing-library/react'
import React from 'react'
import { useMovie } from '../../api'
import { movieBuilder } from '../../__fixtures__/movie-data'
import Movie from '../Movie'

jest.mock('../../api')

test('renders loading state', () => {
  ;(useMovie as jest.Mock).mockReturnValue({
    movie: null,
    isLoading: true,
    error: null,
  })

  const { container } = render(<Movie id="1" />)

  expect(container).toMatchSnapshot()
})

test('renders error state', () => {
  ;(useMovie as jest.Mock).mockReturnValue({
    movie: null,
    isLoading: false,
    error: 'Incorrect IMDb ID',
  })

  const { container } = render(<Movie id="1" />)

  expect(container).toMatchSnapshot()
})

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
