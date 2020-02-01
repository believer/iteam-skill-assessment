export enum MovieType {
  Game = 'game',
  Movie = 'movie',
  Series = 'movie',
}

export interface SearchMovie {
  Poster: string
  Title: string
  Type: MovieType
  Year: string
  imdbID: string
}

export interface SearchResults {
  Search: SearchMovie[]
}

export interface Rating {
  Source: string
  Value: string
}

export interface Movie {
  Actors: string
  Awards: string
  BoxOffice: string
  Country: string
  DVD: string
  Director: string
  Genre: string
  Language: string
  Metascore: string
  Plot: string
  Poster: string
  Production: string
  Rated: string
  Ratings: Rating[]
  Released: string
  Response: string
  Runtime: string
  Title: string
  Type: MovieType
  Website: string
  Writer: string
  Year: string
  imdbID: string
  imdbRating: string
  imdbVotes: string
}

export type MovieResponse = Movie & { Error: string }
