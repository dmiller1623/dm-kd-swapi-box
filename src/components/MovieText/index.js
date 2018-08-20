import React from 'react'
 
const MovieText = ({ movies }) => {
  return(
    <div >
      <p>{movies.opening_crawl}</p>
      <h3>{movies.title}</h3>
      <h3>{movies.release_date}</h3>
    </div>
  )
}

export default MovieText