import { act, fireEvent, render, wait } from '@testing-library/react'
import * as React from 'react'
import { useSearch } from '../../api'
import { SearchProvider } from '../../context/SearchContext'
import Search from '../Search'

jest.mock('../../api')

test('renders and displays search results', async () => {
  jest.useFakeTimers()
  ;(useSearch as jest.Mock).mockReturnValue({
    movies: [{ imdbID: 1, Title: 'Batman' }],
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

  expect(useSearch).toHaveBeenCalledWith('batman')

  expect(getByText(/batman/i)).toBeInTheDocument()
})
