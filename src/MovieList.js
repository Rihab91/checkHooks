import React from 'react'
import MovieCard from './MovieCard'
const MovieList=({movies}) => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly'}}>
      {/*on a mapper sur movies   */}
 {movies.map((movie,i) => <MovieCard movie={movie}/>)}
    </div>
  )
}

export default MovieList;