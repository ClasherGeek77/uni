# node_express_ejs_googlebooks_api

## what it is

a small book-browsing website (December 2020, course final exam project). the home page lists 30 novels from the Google Books API with paging, there is a search box, and each book has a detail page. pages are rendered on the server.

stack: Node.js, Express 4, EJS templates with express-ejs-layouts, node-fetch, nodemon. a `Procfile` (`web: nodemon`) was used for deployment on Heroku; the old Heroku URL now returns 404.

| route | what it does |
| --- | --- |
| `GET /` | first 30 results for the query "Novel" |
| `GET /page/:num` | paging of the home list |
| `POST /search/:searchTerm` and `GET /search/:searchTerm/page/:num` | search results and paging |
| `GET /detail/:Id` | one book |

## what you need

- Node.js and npm, https://nodejs.org/ (written against 2020-era Node; it installed and started on Node 22).
- internet access to https://www.googleapis.com/books/v1/ . no API key is used, so the app depends on the anonymous quota of that API (see "if it breaks").

## quick start

```bash
cd node_express_ejs_googlebooks_api
npm install
node index.js
```

open http://localhost:3000/ . for auto-restart while editing use `npm run dev` (nodemon). there is no `npm start` script in `package.json`, so `npm start` does not work.

you should see `Server runs at port 3000...` in the terminal (the message is hard-coded; the real port comes from the `PORT` environment variable, default 3000), then a grid of novel covers in the browser.

verified here: `npm install` added 195 packages and the server started. the book list itself could not be confirmed on 2026-11-18 because Google answered the anonymous request with `429 Quota exceeded` (see below).

## how to read the code

| file | what it does |
| --- | --- |
| `index.js` | Express setup, layout, static folders, route mounting. commented-out blocks are unused session, auth and todo experiments |
| `routes/index.js` | home page and paging, builds the book HTML |
| `routes/search.js` | search and its paging |
| `routes/detail.js` | single-book page |
| `views/layouts/cust-nav.ejs` | shared page frame and navigation bar |
| `views/pages/*.ejs` | page templates |

## if it breaks

| symptom | cause | fix |
| --- | --- | --- |
| server exits with `UnhandledPromiseRejection ... "Novel is not found"` right after `Masuk index` | Google Books returned an error (for example `429 Quota exceeded` for anonymous callers) and the code rejects a promise nobody catches; Node 15+ stops the process on that | retry later; use an API key (https://developers.google.com/books/docs/v1/using#APIKey) by appending `&key=...` to the five `fetch` URLs in `routes/`; add a `.catch` around the fetch chains |
| `Cannot find module` | dependencies not installed | `npm install` in this folder |
| `EADDRINUSE` | port 3000 is taken | `PORT=3001 node index.js` and open that port (the log line will still say 3000) |
| Heroku link in old notes is dead | the free Heroku tier ended | run it locally |

## next

index of the other course projects: https://github.com/ClasherGeek77/uni . same idea with a client-side render: `movie_database_web_app`.
