import * as React from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { useMovie } from './api'
import { Grid, GridColumn } from './Grid'
import { H1, Paragraph } from './Typography'
import styled from '@emotion/styled'
import { Poster } from './MovieResult'
import { LoadingBlock } from './LoadingBlock'

interface BackdropProps {
  src: string
}

const Backdrop = styled.div<BackdropProps>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  height: 300px;
  grid-column: -1/1;

  @media (min-width: 52em) {
    height: 500px;
  }
`

const Actor = styled.div`
  align-items: center;
  display: flex;
  padding: 5px;
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  margin-right: 15px;
  object-fit: cover;
  width: 50px;
`

const Name = styled.div`
  font-weight: 700;
`

const Role = styled.div`
  color: hsl(210, 12%, 60%);
  font-size: 12px;
  margin-top: 5px;
`

const BackLink = styled(Link)`
  color: #24292e;
  display: block;
  margin-bottom: 30px;
  margin-top: 30px;
`

const Movie: React.FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  const { movie } = useMovie(id)

  if (Object.keys(movie).length === 0) {
    return null
  }

  return (
    <Grid mb={100}>
      {movie.backdrop && <Backdrop src={movie.backdrop} />}
      <GridColumn>
        <BackLink to="/">Back to search</BackLink>
        <Grid mt={40} gridTemplateColumns={['1fr', '200px 1fr']}>
          <div>
            <Poster src={movie.poster} alt={movie.title} />
          </div>
          <div>
            <H1>{movie.title}</H1>
            <Paragraph mb="30px">{movie.overview}</Paragraph>
            <Grid
              gridRowGap="10px"
              gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            >
              {movie.cast.slice(0, 15).map(actor => (
                <Actor key={actor.id}>
                  {!actor.image && (
                    <LoadingBlock
                      borderRadius="50%"
                      height="50px"
                      mr="15px"
                      width="50px"
                    />
                  )}
                  {actor.image && <Avatar src={actor.image} alt="" />}
                  <div>
                    <Name>{actor.name}</Name>
                    <Role>{actor.character}</Role>
                  </div>
                </Actor>
              ))}
            </Grid>
          </div>
        </Grid>
      </GridColumn>
    </Grid>
  )
}

export default Movie
