import { Router } from '@reach/router'
import * as React from 'react'
import Search from './pages/Search'
import { SearchProvider } from './context/SearchContext'

const MovieRoute = React.lazy(() => import('./pages/Movie'))

const App = () => {
  return (
    <SearchProvider>
      <React.Suspense fallback="">
        <Router>
          <Search path="/" />
          <MovieRoute path="/movie/:id" />
        </Router>
      </React.Suspense>
    </SearchProvider>
  )
}

export default App
