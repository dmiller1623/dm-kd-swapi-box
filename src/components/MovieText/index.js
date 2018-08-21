import React from 'react'
import './styles.css'
 
const MovieText = ({ movies }) => {
  return(    
      <marquee className='movie-text' direction='up' scrollspeed='20'>
        <p className='crawl-text'>{movies.opening_crawl}</p>
        <h3>{movies.title}</h3>
        <h3>{movies.release_date}</h3>
      </marquee>
  )
}

export default MovieText