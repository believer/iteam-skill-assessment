import { useSearch, useMovie } from '../api'
import { useFetch } from 'react-fetch-hook'

jest.mock('react-fetch-hook', () => ({
  useFetch: jest.fn(),
}))

afterEach(jest.clearAllMocks)

describe('#useSearch', () => {
  test('handles null data', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    })

    const result = useSearch('inception')

    expect(result).toMatchSnapshot()
  })

  test('search and return data', () => {
    useFetch.mockReturnValue({
      data: {
        results: [
          {
            title: 'test',
            poster_path: '/poster.jpg',
            backdrop_path: '/backdrop.jpg',
          },
          {
            title: 'test',
            poster_path: null,
            backdrop_path: null,
          },
        ],
      },
      isLoading: false,
      error: null,
    })

    const result = useSearch('inception')

    expect(useFetch.mock.calls[0][0]).toMatchSnapshot()
    expect(result).toMatchSnapshot()
  })
})

describe('#useMovie', () => {
  test('handles null data', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
    })

    const result = useMovie('1')

    expect(result).toMatchSnapshot()
  })

  test('search and return data', () => {
    useFetch
      .mockReturnValueOnce({
        data: {
          title: 'test',
          poster_path: '/poster.jpg',
          backdrop_path: '/backdrop.jpg',
        },
        isLoading: false,
        error: null,
      })
      .mockReturnValueOnce({
        data: {
          cast: [{ name: 'one', profile_path: '/profile.jpg' }],
          crew: [{ name: 'two' }],
        },
        isLoading: false,
        error: null,
      })

    const result = useMovie('1')

    expect(useFetch.mock.calls[0][0]).toMatchSnapshot()
    expect(result).toMatchSnapshot()
  })
})
