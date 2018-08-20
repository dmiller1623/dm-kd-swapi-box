import React from 'react'
import './styles.css'
 
const MovieText = ({ movies }) => {
  return(    
      <marquee direction='up' scrollspeed='20'>
        <p>{movies.opening_crawl}</p>
        <h3>{movies.title}</h3>
        <h3>{movies.release_date}</h3>
      </marquee>
  )
}

export default MovieText