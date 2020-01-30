import styled from '@emotion/styled'
import { useDebounce } from '@iteam/hooks'
import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { useSearch } from '../api'
import { LoadingBlock } from '../components/LoadingBlock'
import MovieResult from '../components/MovieResult'
import { SearchContext } from '../context/SearchContext'
import iconSearch from '../images/i_search.svg'

interface SearchInputProps {
  hasQuery: boolean
}

const SearchWrap = styled.div<SearchInputProps>`
  left: 0;
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
  background-size: 24px 24px;
  background-position: 0 center;
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
const Search: React.FC<RouteComponentProps> = () => {
  const { query, setQuery } = React.useContext(SearchContext)
  const debouncedValue = useDebounce(query, 300)
  const { movies, isLoading } = useSearch(debouncedValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.currentTarget.value)

  return (
    <div className="grid grid-template">
      <SearchWrap
        className="bg-gray-100 fixed flex justify-center p-4"
        hasQuery={query.length > 0}
      >
        <SearchInput
          aria-label="Find a movie you love"
          className="font-header border-b-2 border-gray-400 focus:border-teal-400 outline-none"
          hasQuery={query.length > 0}
          onChange={handleChange}
          placeholder="Find a movie you love"
          type="text"
          value={query}
        />
      </SearchWrap>

      <div className="grid-template-center">
        <Results>
          {isLoading &&
            Array.from(Array(12).keys()).map(i => (
              <div className="flex items-center flex-col" key={i}>
                <LoadingBlock height="315px" />
                <LoadingBlock height="19px" mt="15px" width="80%" />
              </div>
            ))}

          {!!query &&
            !isLoading &&
            movies.map(movie => (
              <MovieResult key={movie.imdbID} movie={movie} />
            ))}
        </Results>

        {!!debouncedValue && !isLoading && movies.length === 0 && (
          <div className="text-center text-2xl text-gray-600">
            No search results, try a different movie!
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
