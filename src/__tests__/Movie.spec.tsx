import * as React from 'react'
import Movie from '../Movie'
import { render } from 'react-testing-library'
import { useMovie } from '../api'

jest.mock('../api', () => ({
  useMovie: jest.fn(),
}))

test('renders movie information', () => {
  ;(useMovie as jest.Mock).mockReturnValue({
    movie: {
      cast: [
        {
          id: 1,
          name: 'Christian Bale',
          character: 'Bruce Wayne',
        },
      ],
      crew: [],
      title: 'Batman',
    },
    isLoading: false,
    error: null,
  })

  const { getByText } = render(<Movie id="1" />)

  expect(useMovie).toHaveBeenCalledWith('1')

  // Tests movie title
  expect(getByText(/batman/i)).toBeInTheDocument()

  // Tests cast
  expect(getByText(/christian bale/i)).toBeInTheDocument()
  expect(getByText(/bruce wayne/i)).toBeInTheDocument()
})
