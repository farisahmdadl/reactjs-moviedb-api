import './App.css';
import { getMovieList, searchMovie } from "./api"
import { useEffect, useState } from 'react';

const App = () => {
const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  const search = async(query) => {
    if (query.length > 3) {
      const  querySearch  = await searchMovie(query)
      setPopularMovies(querySearch.results)
    }
  }

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <br></br><br></br>
          <div className="movie-title">{movie.title}</div>
          <img className="movie-img" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}/>
          <div className="movie-date">Release: {movie.release_date}</div>
          <div className="movie-rating">Rating: {movie.vote_average}</div>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <input 
        className='movie-search' 
        placeholder='Search...'
        onChange={({ target }) => search(target.value)} 
        />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
