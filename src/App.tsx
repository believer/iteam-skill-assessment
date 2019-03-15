import { css, Global } from '@emotion/core'
import { Router } from '@reach/router'
import * as React from 'react'
import Movie from './Movie'
import Search from './Search'
import { SearchProvider } from './SearchContext'

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

const App = () => {
  return (
    <SearchProvider>
      <Global styles={styles} />
      <Router>
        <Search path="/" />
        <Movie path="/movie/:id" />
      </Router>
    </SearchProvider>
  )
}

export default App
