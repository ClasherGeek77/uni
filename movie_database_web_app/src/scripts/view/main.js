import '../component/cust-navbar.js'
import '../component/movie-list.js'
import DataSource from '../data/data-source.js'

function main () {
  // icon in web
  const feather = require('feather-icons')
  const baseUrl = 'http://api.themoviedb.org/3'
  // search
  const movieListElement = document.querySelector('movie-list')
  const searchElement = document.querySelector('cust-navbar')
  const onButtonSearchClicked = async () => {
    try {
      const responseJson = await DataSource.searchMovie(
        searchElement.value)
      renderAllMovies(responseJson.results)
      renderTitleSearch()
    } catch (message) {
      fallbackResult(message)
    }
  }
  // getmovies
  const getMovie = async () => {
    try {
      const response = await fetch(
                `${baseUrl}/movie/popular?api_key=${TMDB_API_KEY}`
      )
      const responseJson = await response.json()
      if (responseJson.error) {
        showResponseMessage(responseJson.status_message)
      } else {
        renderTitlePop()
        renderAllMovies(responseJson.results)
      }
    } catch (error) {
      showResponseMessage(error)
    }
  }
  const renderAllMovies = (results) => {
    movieListElement.movies = results
  }
  const renderTitlePop = () => {
    const titleElement = document.querySelector('#title-page')
    titleElement.innerHTML = '<h1>Popular Movies</h1>'
  }
  const renderTitleSearch = () => {
    const titleElement = document.querySelector('#title-page')
    titleElement.innerHTML = '<h1>Find Results</h1>'
  }
  const showResponseMessage = (message =
  'Check your internet connection') => {
    alert(message)
  }
  const fallbackResult = message => {
    movieListElement.renderError(message)
  }
  document.addEventListener('DOMContentLoaded', () => {
    getMovie()
  })
  searchElement.clickEvent = onButtonSearchClicked
  feather.replace()
}
export default main
