import { useContext, useState } from "react"
import { MovieContext } from "../context/MovieContext"

function MovieInput() {
    const [error, setError] = useState(false)
    const {query, setQuery, searchMovies} = useContext(MovieContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(query === "") {
            return setError(true)
        }
        setError(false)
        searchMovies(query)
    }
    const handleChangue = (e) => {
        setQuery(e.target.value)
    }

  return (
    <>
    {error && <p className="text-red-700">El campo no puede estar vacio</p>} 
    <form onSubmit={handleSubmit}>
        <input className="p-2 rounded-lg mr-2 border border-black border-solid text-black" type="text" id="query" onChange={handleChangue} value={query} placeholder="Star Wars, A"/>
        <button className="bg-slate-300 p-2 rounded-lg border border-black border-solid text-black" type="submit">Search</button>
    </form>
    </>
  )
}

export default MovieInput