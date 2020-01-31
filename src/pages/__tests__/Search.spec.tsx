import { act, fireEvent, render, wait } from '@testing-library/react'
import React from 'react'
import { useSearch } from '../../api'
import { SearchProvider } from '../../context/SearchContext'
import Search from '../Search'
import { searchMovieBuilder } from '../../__fixtures__/movie-data'

jest.mock('../../api')

test('renders no search results', async () => {
  jest.useFakeTimers()
  ;(useSearch as jest.Mock).mockReturnValue({
    movies: [],
    isLoading: false,
    error: null,
  })

  const { getByText, getByPlaceholderText } = render(
    <SearchProvider>
      <Search />
    </SearchProvider>
  )

  // Tests search
  fireEvent.change(getByPlaceholderText(/find a movie you love/i), {
    target: { value: 'batman' },
  })

  await wait()

  act(() => {
    jest.runAllTimers()
  })

  expect(getByText(/no search results/i)).toBeInTheDocument()
})

test('renders loading state', async () => {
  jest.useFakeTimers()
  ;(useSearch as jest.Mock).mockReturnValue({
    movies: [],
    isLoading: true,
    error: null,
  })

  const { container, getByPlaceholderText } = render(
    <SearchProvider>
      <Search />
    </SearchProvider>
  )

  // Tests search
  fireEvent.change(getByPlaceholderText(/find a movie you love/i), {
    target: { value: 'batman' },
  })

  await wait()

  act(() => {
    jest.runAllTimers()
  })

  expect(container).toMatchSnapshot()
})

test('renders and displays search results', async () => {
  const movie = searchMovieBuilder()

  jest.useFakeTimers()
  ;(useSearch as jest.Mock).mockReturnValue({
    movies: [movie],
    isLoading: false,
    error: null,
  })

  const { getByText, getByPlaceholderText, getByAltText } = render(
    <SearchProvider>
      <Search />
    </SearchProvider>
  )

  // Tests search
  fireEvent.change(getByPlaceholderText(/find a movie you love/i), {
    target: { value: 'batman' },
  })

  await wait()

  act(() => {
    jest.runAllTimers()
  })

  expect(useSearch).toHaveBeenCalledWith('batman')

  expect(getByText(movie.Title)).toBeInTheDocument()
  expect(getByAltText(movie.Title)).toBeInTheDocument()
})
