import React from 'react'
import MovieResult, { Poster } from '../MovieResult'
import { render } from '@testing-library/react'
import { searchMovieBuilder } from '../../__fixtures__/movie-data'

test('it renders movies with missing poster', () => {
  const movie = searchMovieBuilder({
    Poster: 'N/A',
  })

  const { getByText, queryByAltText } = render(<MovieResult movie={movie} />)

  expect(getByText(movie.Title)).toBeInTheDocument()
  expect(queryByAltText(movie.Title)).not.toBeInTheDocument()
})

test('it renders poster without hover state', () => {
  const { container } = render(
    <Poster alt="test" hover={false} src="test.jpg" />
  )

  expect(container).toMatchSnapshot()
})
