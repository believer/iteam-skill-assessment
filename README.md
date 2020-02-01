# OMDb API

[![](https://github.com/believer/omdb-app/workflows/Release/badge.svg)](https://github.com/believer/omdb-app/actions?workflow=Release)
[![Maintainability](https://api.codeclimate.com/v1/badges/b52e155d5b3fd5d44767/maintainability)](https://codeclimate.com/github/believer/omdb-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b52e155d5b3fd5d44767/test_coverage)](https://codeclimate.com/github/believer/omdb-app/test_coverage)

This is a test of the [OMDb API](http://www.omdbapi.com/). The app is also deployed live at https://omdb.willcodefor.beer/

## Get started

```sh
git clone https://github.com/believer/omdb-app.git
cd omdb-app
npm install
```

Add an `.env.local` with your API key

```
REACT_APP_OMDB_KEY=<OMDb-KEY-HERE>
```

After the steps above have been completed, run `npm start`. This will start the compiler and open a browser window pointing to the development server.

## Run test

Run tests with Jest. Runs in watch mode in development and single-run mode in CI.

```sh
npm test
```

## Built with

- Create React App (TypeScript)
- Tailwind CSS
- Config setups from [supreme](https://github.com/Iteam1337/supreme) (Prettier, GitHub Actions, Semantic Release)
