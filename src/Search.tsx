import styled from '@emotion/styled'
import { useDebounce } from '@iteam/hooks'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useSearch } from './api'
import iconSearch from './images/i_search.svg'
import MovieResult from './MovieResult'
import { Grid, GridColumn } from './Grid'
import { SearchContext } from './SearchContext'
import { LoadingBlock } from './LoadingBlock'

interface SearchInputProps {
  hasQuery: boolean
}

const SearchWrap = styled.div<SearchInputProps>`
  background-color: hsla(0, 0%, 90%, 0.8);
  display: flex;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: fixed;
  right: 0;
  transform: translateY(${({ hasQuery }) => (hasQuery ? '0' : '-50%')});
  transition: 200ms ease-in-out;
  transition-property: transform, top, border-color;
  top: ${({ hasQuery }) => (hasQuery ? '0' : '50%')};
  z-index: 1;
`

const SearchInput = styled.input<SearchInputProps>`
  background-color: transparent;
  background-image: url(${iconSearch});
  background-repeat: no-repeat;
  background-size: 24px; 24px;
  background-position: 0 center;
  border: 0;
  border-bottom: 2px solid #009eb5;
  font-family: 'Fjalla One', sans-serif;
  font-size: 32px;
  padding: 10px;
  padding-left: 40px;
  width: 80vw;

  @media (min-width: 52em) {
    width: 400px;
  }
`

const Results = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 140px;

  @media (min-width: 52em) {
    grid-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 200px;
  }
`

const Loading = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Search: React.FC<RouteComponentProps> = () => {
  const { query, setQuery } = React.useContext(SearchContext)
  const debouncedValue = useDebounce(query, 300)
  const { movies, isLoading } = useSearch(debouncedValue)

  const handleChange = e => setQuery(e.currentTarget.value)

  return (
    <Grid mb={[40, 100]}>
      <SearchWrap hasQuery={query.length > 0}>
        <SearchInput
          aria-label="Find a movie you love"
          hasQuery={query.length > 0}
          onChange={handleChange}
          placeholder="Find a movie you love"
          type="text"
          value={query}
        />
      </SearchWrap>

      <GridColumn>
        <Results>
          {isLoading &&
            Array.from(Array(12).keys()).map(i => (
              <Loading key={i}>
                <LoadingBlock height="315px" />
                <LoadingBlock height="19px" mt="15px" width="80%" />
              </Loading>
            ))}

          {movies.map(movie => (
            <MovieResult key={movie.id} movie={movie} />
          ))}
        </Results>
      </GridColumn>
    </Grid>
  )
}

export default Search
