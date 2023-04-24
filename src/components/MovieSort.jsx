import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

function MovieSort() {
  const {setSortBy, searchMovies, query} = useContext(MovieContext)
  const handleChangue = (e) => {
    setSortBy(e.target.value)
    searchMovies(query)
  }
  return (
    <select className="p-2 rounded-lg mr-2 border border-black border-solid text-black" name="sortby" id="sortby" onChange={handleChangue}>
      <option value="year">Year</option>
      <option value="title">Title</option>
    </select>
  )
}

export default MovieSort