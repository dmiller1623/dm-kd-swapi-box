import React from 'react'
import './styles.css'
import PropTypes from 'prop-types'

const Card = (props) => {
  return(
    <div className='card'>
      <h2 className='card-data first-data'>{props.first}
      <div className='button-spacing'>
        <button className={props.evaluateClass(props)} onClick={() => props.updateFavorites(props)}>FAV</button>
      </div>
      </h2>
      <h4 className='card-data'>{props.second}</h4>
      <h4 className='card-data'>{props.third}</h4>
      <h4 className='card-data'>{props.fourth}</h4>
      {props.fifth && <div className='fifth-data'>
        <h5 className='card-data'>Residents:</h5>
        {!props.fifth.length && <h5 className='card-data spacing'>0</h5>}
        { 
          props.fifth.map((person, i) => {
            return <h5 key={i} className='card-data spacing'>{person}</h5>
          })
        }
      </div>}

    </div>
  )
}

Card.propTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
  fourth: PropTypes.string,
  fifth: PropTypes.array
}

export default Card