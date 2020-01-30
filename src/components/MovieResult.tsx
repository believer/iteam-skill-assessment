import styled from '@emotion/styled'
import { Link } from '@reach/router'
import * as React from 'react'
import { LoadingBlock } from './LoadingBlock'
import { SearchMovie } from '../types'

interface MovieResultProps {
  movie: SearchMovie
}

const Wrap = styled.div`
  border-radius: 5px;
`

export const Poster = styled.img`
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
    <Wrap>
      <Link to={`/movie/${movie.imdbID}`}>
        {!hasPoster && <LoadingBlock height="310px" />}
        {hasPoster && <Poster src={movie.Poster} />}
        <Title>{movie.Title}</Title>
      </Link>
    </Wrap>
  )
}

export default MovieResult
