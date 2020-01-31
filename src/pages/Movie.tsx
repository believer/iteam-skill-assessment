import { Link, RouteComponentProps } from '@reach/router'
import React from 'react'
import { useMovie } from '../api'
import { LoadingBlock } from '../components/LoadingBlock'
import { Poster } from '../components/MovieResult'
import { H1, H2, Paragraph } from '../components/Typography'
import { Table, TableBody, TableRow, TableCell } from '../components/Table'

const Movie: React.FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  const { isLoading, movie, error } = useMovie(id)

  if (error) {
    return (
      <div className="h-screen flex items-center flex-col justify-center">
        <div className="text-red-600 text-xl mb-2">{error}</div>
        <Link className="text-gray-700" to="/">
          Back to search
        </Link>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="grid grid-template my-10">
        <div className="grid-template-center">
          <div className="grid grid-gap-12 grid-template-movie mt-8">
            <LoadingBlock className="w-full h-80" />
            <div>
              <LoadingBlock className="w-2/12 h-8" />
              <LoadingBlock className="w-6/12 h-5 mt-2" />
              <LoadingBlock className="w-9/12 h-5 mt-5" />
              <LoadingBlock className="w-9/12 h-5 mt-2" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!movie) {
    return null
  }

  const meta = [
    {
      title: 'Director',
      value: movie.Director,
    },
    {
      title: 'Writer',
      value: movie.Writer,
    },
    {
      title: 'Released',
      value: movie.Released,
    },
    {
      title: 'Production',
      value: movie.Production,
    },
    {
      title: 'Rating',
      value: movie.Rated,
    },
    {
      title: 'Countries',
      value: movie.Country,
    },
    {
      title: 'Languages',
      value: movie.Language,
    },
    {
      title: 'Box Office',
      value: movie.BoxOffice,
    },
  ] as const

  return (
    <div className="grid grid-template my-10">
      <div className="grid-template-center">
        <Link className="text-gray-700 block mb-8" to="/">
          Back to search
        </Link>
        <div className="grid grid-gap-12 grid-template-movie">
          <div className="justify-self-center">
            <Poster hover={false} src={movie.Poster} alt={movie.Title} />
          </div>
          <div>
            <H1>{movie.Title}</H1>
            <div className="flex mb-4 mt-2">
              <div className="text-xs text-gray-500 mr-4">{movie.Year}</div>
              <div className="text-xs text-gray-500 mr-4">{movie.Runtime}</div>
              <div className="text-xs text-gray-500">{movie.Genre}</div>
            </div>
            <Paragraph className="mb-8">{movie.Plot}</Paragraph>
            <div className="mt-4">
              <H2>Cast</H2>
              <div className="mt-4 border-b border-gray-400 pb-8">
                <div className="grid grid-template-2 grid-gap-2">
                  {movie.Actors.split(', ').map(actor => (
                    <span className="font-bold" key={actor}>
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Table>
                <TableBody>
                  {meta.map(({ title, value }) => (
                    <TableRow key={title}>
                      <TableCell className="font-bold mr-2 align-top p-2">
                        {title}
                      </TableCell>
                      <TableCell className="p-2">{value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
