# movie_database_web_app

## what it is

a single-page movie catalog (2020, front-end web course submission). it shows the popular movies from The Movie Database (TMDB) on load and has a search box for movie titles. the interface is built from custom elements (`<cust-navbar>`, `<movie-list>`, `<movie-item>`) and Bootstrap 4.

stack: JavaScript (ES modules, Web Components), Webpack 4, Babel, Bootstrap 4, Feather icons, jQuery, TMDB web API.

## what you need

- Node.js and npm, https://nodejs.org/ . Node 17 or newer needs one extra environment variable (below) because Webpack 4 uses an old hash algorithm.
- internet access: the movie data comes live from `api.themoviedb.org`.
- a free TMDB API key from https://www.themoviedb.org/settings/api (needs a free account).

## quick start

```bash
cd movie_database_web_app
npm install
export TMDB_API_KEY=your-tmdb-key
export NODE_OPTIONS=--openssl-legacy-provider   # only on Node 17 or newer
npm run build
```

you should see Webpack print its bundle report and a `dist/` folder appear with `index.html` and `bundle.js` (verified on Node 22: `npm install` added 990 packages, the build finished with only a bundle-size warning).

for development with live reload, run `npm run start-dev` (webpack-dev-server, it opens the browser, default http://localhost:8080). the dev server was not started here.

the page should list the popular movies as cards and filter by title when you type in the `Search Movies` box and press the search button. it needs your own free TMDB API key (see "build it" above: set `TMDB_API_KEY` before building).

## how to read the code

| file | what it does |
| --- | --- |
| `src/index.js` | entry point: imports Bootstrap, icons, styles and the main view |
| `src/scripts/view/main.js` | loads popular movies, wires the search button, renders results |
| `src/scripts/data/data-source.js` | `DataSource.searchMovie(keyword)`, the fetch call to TMDB |
| `src/scripts/component/*.js` | the custom elements; `book-*` files are unused leftovers from a sibling exercise |
| `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js` | shared, development and production Webpack configs |

## things to know

- the TMDB API key is read from the `TMDB_API_KEY` environment variable at build time (Webpack `DefinePlugin`) and is baked into `bundle.js`, so anyone who can open the built page can read it. the requests use plain `http://`. for real work put the key behind a server-side proxy.
- the dependencies are from 2020 (Webpack 4, css-loader 3). `npm install` works but prints deprecation warnings.

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| `ERR_OSSL_EVP_UNSUPPORTED` / `digital envelope routines::unsupported` | Webpack 4 with Node 17+ | `export NODE_OPTIONS=--openssl-legacy-provider`, or use Node 16 |
| page loads but no movies | no internet, or TMDB rejected the request (the key may be revoked someday) | check the browser console network tab; use your own key from https://www.themoviedb.org/settings/api |
| mixed-content errors when hosting on https | requests use `http://` | change them to `https://api.themoviedb.org` |
| `app-ico` errors on `npm run favicons` | the script needs `src/logo.svg`, which is not in the repo | ignore that script |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . for a server-side take on a similar search app, see `node_express_ejs_googlebooks_api` in the same repo.
