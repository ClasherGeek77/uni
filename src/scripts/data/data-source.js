class DataSource {
  static searchMovie (keyword) {
    return fetch(
            `http://api.themoviedb.org/3/search/movie?api_key=REDACTED_TMDB_KEY&query=${keyword}&page=1`
    ).then(response => {
      return response.json()
    }).then(responseJson => {
      if (responseJson.results) {
        return Promise.resolve(responseJson)
      } else {
        return Promise.reject(`${keyword} is not found`)
      }
    })
  }
}
export default DataSource
