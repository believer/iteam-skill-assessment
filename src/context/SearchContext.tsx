import React from 'react'

export const SearchContext = React.createContext({
  query: '',
  setQuery: (_value: string) => {},
})

export const SearchProvider: React.FC = ({ children }) => {
  const [query, setQuery] = React.useState('')

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
