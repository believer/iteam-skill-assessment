import styled from '@emotion/styled'
import { useDebounce } from '@iteam/hooks'
import { RouteComponentProps } from '@reach/router'
import React from 'react'
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
  transition-property: transform, top;
  top: ${({ hasQuery }) => (hasQuery ? '0' : '50%')};
`

const SearchInput = styled.input<SearchInputProps>`
  background-image: url(${iconSearch});
  background-size: 24px 24px;
  background-position: 0 center;
  transition-property: border-color;
  width: 80vw;

  @media (min-width: 52em) {
    width: 400px;
  }
`

const Results = styled.div`
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 52em) {
    grid-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
  }
`
const Search: React.FC<RouteComponentProps> = () => {
  const { query, setQuery } = React.useContext(SearchContext)
  const debouncedValue = useDebounce(query, 300)
  const { movies, isLoading } = useSearch(debouncedValue)
  const hasQuery = query.length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.currentTarget.value)

  return (
    <div className="grid grid-template">
      <SearchWrap
        className="bg-gray-100 fixed flex justify-center p-4 z-10 transition-fast transition-ease-in-out"
        hasQuery={hasQuery}
      >
        <SearchInput
          aria-label="Find a movie you love"
          className="font-header border-b-2 border-gray-400 focus:border-teal-400 outline-none p-3 pl-12 text-3xl bg-transparent bg-no-repeat transition-fast transition-ease-in-out"
          hasQuery={hasQuery}
          onChange={handleChange}
          placeholder="Find a movie you love"
          type="text"
          value={query}
        />
      </SearchWrap>

      <div className="grid-template-center">
        <Results className="grid mt-32 md:mt-48">
          {isLoading &&
            Array.from(Array(12).keys()).map(i => (
              <div className="flex items-center flex-col" key={i}>
                <LoadingBlock className="h-80" />
                <LoadingBlock className="h-5 mt-4 w-4/5" />
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
