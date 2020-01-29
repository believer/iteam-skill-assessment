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
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`

const Title = styled.div`
  color: #24292e;
  font-weight: 700;
  margin-top: 15px;
  text-align: center;
`

const MovieResult: React.FC<MovieResultProps> = ({ movie }) => {
  return (
    <Wrap>
      <Link to={`/movie/${movie.imdbID}`}>
        {!movie.Poster && <LoadingBlock height="315px" />}
        {movie.Poster && <Poster src={movie.Poster} />}
        <Title>{movie.Title}</Title>
      </Link>
    </Wrap>
  )
}

export default MovieResult
