import styled from '@emotion/styled'
import { Link } from '@reach/router'
import * as React from 'react'
import { LoadingBlock } from './LoadingBlock'
import { SearchMovie } from '../types'

interface MovieResultProps {
  movie: SearchMovie
}

export const Poster: React.FC<React.HTMLProps<HTMLImageElement>> = ({
  src,
  alt,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded shadow-lg object-fill md:h-80 w-full md:w-auto"
    />
  )
}
styled.img`
  border-radius: 5px;
  box-shadow: 0 10px 15px hsla(0, 0%, 0%, 0.15),
    0 15px 25px hsla(0, 0%, 0%, 0.3);
  object-fit: fill;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 52em) {
    height: 310px;
  }
`

const Title = styled.div`
  color: #24292e;
  font-weight: 700;
  margin-top: 15px;
  text-align: center;
`

const MovieResult: React.FC<MovieResultProps> = ({ movie }) => {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A'

  return (
    <div className="rounded">
      <Link to={`/movie/${movie.imdbID}`}>
        {!hasPoster && <LoadingBlock height="310px" />}
        {hasPoster && <Poster src={movie.Poster} />}
        <Title>{movie.Title}</Title>
      </Link>
    </div>
  )
}

export default MovieResult
