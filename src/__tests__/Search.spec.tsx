import * as React from 'react'
import Search from '../Search'
import { render, fireEvent, act, wait } from 'react-testing-library'
import { useSearch } from '../api'
import { SearchProvider } from '../SearchContext'

jest.mock('../api', () => ({
  useSearch: jest.fn(),
}))

test('renders and displays search results', async () => {
  jest.useFakeTimers()
  ;(useSearch as jest.Mock).mockReturnValue({
    movies: [{ id: 1, title: 'Batman' }],
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
