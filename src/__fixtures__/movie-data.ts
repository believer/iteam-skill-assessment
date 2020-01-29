import { build, fake } from 'test-data-bot'
import { SearchMovie, MovieType, Movie } from '../types'

type PartialMovie = Pick<
  Movie,
  'Actors' | 'Poster' | 'Title' | 'Type' | 'Year' | 'imdbID'
>

export const searchMovieBuilder = build<SearchMovie>('Movie').fields({
  Poster: fake(f => f.internet.url()),
  Title: fake(f => f.lorem.words()),
  Type: MovieType.Movie,
  Year: fake(f =>
    f.date
      .past()
      .getFullYear()
      .toString()
  ),
  imdbID: fake(f => f.random.alphaNumeric()),
})

export const movieBuilder = build<PartialMovie>('Movie').fields({
  Actors: 'test, test2, test3',
  Poster: fake(f => f.internet.url()),
  Title: fake(f => f.lorem.words()),
  Type: MovieType.Movie,
  Year: fake(f =>
    f.date
      .past()
      .getFullYear()
      .toString()
  ),
  imdbID: fake(f => f.random.alphaNumeric()),
})
