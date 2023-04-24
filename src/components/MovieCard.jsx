function MovieCard({movie}) {
  const {Title, Year, imdbID, Type, Poster} = movie
return (
  <li className="inline-block h-96 w-96 mx-3">
      <img className="object-contain w-full h-full" src={Poster} alt="Movie Poster" />
      <h2 className="font-bold">{Title}</h2>
      <p><span className="font-bold">Type:</span> {Type}</p>
      <p><span className="font-bold">Year:</span> {Year}</p>
  </li>
)
}

export default MovieCard
