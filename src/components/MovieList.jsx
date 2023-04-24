import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"
import MovieCard from "./MovieCard"

function MovieList() {
    const {movies, filteredMovies, isFilter} = useContext(MovieContext)
  return (
    <div>
        
        <ul className="grid-auto-columns: auto;">
            {isFilter ? filteredMovies?.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID}/>
            )): movies?.map(movie => (
              <MovieCard movie={movie} key={movie.imdbID}/>
              )) }
            
        </ul>
      
    </div>
  )
}

export default MovieList