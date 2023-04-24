import MovieFilter from "./components/MovieFilter"
import MovieInput from "./components/MovieInput"
import MovieList from "./components/MovieList"
import MovieSort from "./components/MovieSort"

function App() {

  return (
    <div className="flex flex-col items-center space-y-3 h-screen bg-slate-800 text-white">
      <h1 className="text-6xl text-center text-white">Movie Searcher</h1>
      <MovieInput/>
      <div className="flex justify-center items-center space-x-3">
        
        <MovieSort/>
        <MovieFilter/>
      </div>
      <MovieList/>
    </div>
  )
}

export default App
