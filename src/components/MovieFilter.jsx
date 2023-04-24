import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

function MovieFilter() {
    const {setFilterBy, setIsFilter} = useContext(MovieContext)

    const handleChangue = (e) => {
        const filterValue = e.target.value
        if(filterValue === "") {
            setFilterBy("")
            return setIsFilter(false)
            
        }
        setIsFilter(true)
        setFilterBy(filterValue)
    }

  return (
    <select className="p-2 rounded-lg mr-2 border border-black border-solid text-black" name="filter" id="filter" onChange={handleChangue}>
        <option value="">--Select filter--</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
    </select>
  )
}

export default MovieFilter