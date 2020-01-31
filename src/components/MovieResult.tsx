import { Link } from '@reach/router'
import React from 'react'
import { LoadingBlock } from './LoadingBlock'
import { SearchMovie } from '../types'
import classNames from 'classnames'

interface MovieResultProps {
  movie: SearchMovie
}

export const Poster: React.FC<React.HTMLProps<HTMLImageElement> & {
  hover?: boolean
}> = ({ src, alt, hover = true }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={classNames(
        'rounded shadow-lg object-fill md:h-80 w-full md:w-auto transition-transform transition-fast transition-ease-in-out',
        { 'hover:transform-up-2': hover }
      )}
    />
  )
}

const MovieResult: React.FC<MovieResultProps> = ({ movie }) => {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  return (
    <div className="rounded">
      <Link to={`/movie/${movie.imdbID}`}>
        {!hasPoster && <LoadingBlock className="h-80 w-full" />}
        {hasPoster && <Poster src={movie.Poster} />}
        <div className="text-center mt-4 font-bold text-gray-800">
          {movie.Title}
        </div>
      </Link>
    </div>
  )
}

export default MovieResult
