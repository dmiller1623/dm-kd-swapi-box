import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'
 
const MovieText = ({ movies }) => {
  return(    
      <marquee className='movie-text' direction='up' scrollspeed='20'>
        <p className='crawl-text'>{movies.opening_crawl}</p>
        <h3>{movies.title}</h3>
        <h3>{movies.release_date}</h3>
      </marquee>
  )
}

MovieText.propTypes = {
  movies: PropTypes.object
}

export default MovieText