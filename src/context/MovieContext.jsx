import {createContext, useEffect, useState} from 'react'

export const MovieContext = createContext()

export function MovieContextProvider(props) {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
    const [sortBy, setSortBy] = useState("year")
    const [isFilter, setIsFilter] = useState(false)
    const [filterBy, setFilterBy] = useState("")
    const [filteredMovies, setFilteredMovies] = useState([])
    const searchMovies = (queryMovie) => {
        if(queryMovie === "") {
            return
        }
        if(sortBy === "year") {
            fetch(`http://www.omdbapi.com/?apikey=49c5490e&s=${queryMovie}`)
            .then(response => response.json())
            .then((data) => setMovies(data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)) || []))
            .catch((error) => console.log(error));
        }
        if(sortBy === "title") {
            fetch(`http://www.omdbapi.com/?apikey=49c5490e&s=${queryMovie}`)
            .then((res) => res.json())
            .then((data) => setMovies(data.Search.sort((a,b) => a.Title.localeCompare(b.Title)) || []))
            .catch((error) => console.log(error));
        }
    }

    useEffect(() => {
        if(filterBy !== "") {
            return setFilteredMovies(movies.filter((movie) => {
                return movie.Type === filterBy
            }))
        }
        setFilteredMovies([])
    },[filterBy,movies])

  return (
    <MovieContext.Provider value={{
        setQuery,
        query,
        searchMovies,
        movies,
        setSortBy,
        setFilterBy,
        setIsFilter,
        filteredMovies,
        isFilter,
    }}>
        {props.children}
    </MovieContext.Provider>
  )
}

