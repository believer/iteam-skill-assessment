import { css, Global } from '@emotion/core'
import { Router } from '@reach/router'
import * as React from 'react'
import Search from './pages/Search'
import { SearchProvider } from './context/SearchContext'

const styles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    color: #24292e;
    font-family: 'Noto Sans', serif;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
  }
`

const MovieRoute = React.lazy(() => import('./pages/Movie'))

const App = () => {
  return (
    <SearchProvider>
      <React.Suspense fallback="">
        <Global styles={styles} />
        <Router>
          <Search path="/" />
          <MovieRoute path="/movie/:id" />
        </Router>
      </React.Suspense>
    </SearchProvider>
  )
}

export default App
