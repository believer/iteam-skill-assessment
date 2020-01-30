import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useMovie } from '../api'
import { Poster } from '../components/MovieResult'
import { H1, H2, Paragraph } from '../components/Typography'
import { LoadingBlock } from '../components/LoadingBlock'

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
            <LoadingBlock width="200px" height="310px" />
            <div>
              <LoadingBlock width="200px" height="40px" />
              <LoadingBlock width="400px" height="20px" mt="10px" />
              <LoadingBlock width="600px" height="20px" mt="20px" />
              <LoadingBlock width="600px" height="20px" mt="8px" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!movie) {
    return null
  }

  return (
    <div className="grid grid-template my-10">
      <div className="grid-template-center">
        <Link className="text-gray-700 block mb-8" to="/">
          Back to search
        </Link>
        <div className="grid grid-gap-12 grid-template-movie">
          <div className="justify-self-center">
            <Poster src={movie.Poster} alt={movie.Title} />
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
              <table className="w-full">
                <tbody>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Director</td>
                    <td className="p-2">{movie.Director}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Writer</td>
                    <td className="p-2">{movie.Writer}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Released</td>
                    <td className="p-2">{movie.Released}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Production</td>
                    <td className="p-2">{movie.Production}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Rating</td>
                    <td className="p-2">{movie.Rated}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Countries</td>
                    <td className="p-2">{movie.Country}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Languages</td>
                    <td className="p-2">{movie.Language}</td>
                  </tr>
                  <tr className="even:bg-gray-100">
                    <td className="font-bold mr-2 align-top p-2">Box office</td>
                    <td className="p-2">{movie.BoxOffice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
