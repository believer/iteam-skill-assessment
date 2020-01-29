import styled from '@emotion/styled'
import { Link, RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useMovie } from '../api'
import { Grid, GridColumn } from '../components/Grid'
import { Poster } from '../components/MovieResult'
import { H1, Paragraph } from '../components/Typography'

const Actor = styled.div`
  align-items: center;
  display: flex;
  padding: 5px;
`

const Name = styled.div`
  font-weight: 700;
`

const Small = styled.div`
  color: hsl(210, 12%, 60%);
  font-size: 12px;
  margin-top: 5px;
`

const Meta = styled.div`
  display: flex;

  > *:not(:last-child) {
    margin-right: 20px;
  }
`

const BackLink = styled(Link)`
  color: #24292e;
  display: block;
  margin-bottom: 30px;
  margin-top: 30px;

  @media (min-width: 52em) {
    margin-top: 0;
  }
`

const ActorName = styled.div`
  flex: 1;
`

const PosterWrap = styled.div`
  justify-self: center;
`

const Movie: React.FC<RouteComponentProps<{ id: string }>> = ({ id }) => {
  const { movie } = useMovie(id)

  if (!movie) {
    return null
  }

  return (
    <Grid mb={100}>
      <GridColumn bg="#fff" borderRadius="10px" p={[0, 40]} mt={[0, -200]}>
        <BackLink to="/">Back to search</BackLink>
        <Grid mt={40} gridTemplateColumns={['1fr', '200px 1fr']}>
          <PosterWrap>
            <Poster src={movie.Poster} alt={movie.Title} />
          </PosterWrap>
          <div>
            <H1>{movie.Title}</H1>
            <Meta>
              <Small>{movie.Released}</Small>
              <Small>{movie.Genre}</Small>
            </Meta>
            <Paragraph mb="30px">{movie.Plot}</Paragraph>
            <Grid
              gridRowGap="10px"
              gridTemplateColumns={['1fr', 'repeat(2, 1fr)']}
            >
              {movie.Actors.split(', ').map(actor => (
                <Actor key={actor}>
                  <ActorName>
                    <Name>{actor}</Name>
                  </ActorName>
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
