import React from 'react'
import './styles.css'

const Card = (props) => {
    return(
      <div className='card'>
        <button className={props.evaluateClass(props)} onClick={() => props.updateFavorites(props)}>FAV</button>
        <h2 className='card-data'>{props.first}</h2>
        <h4 className='card-data'>{props.second}</h4>
        <h4 className='card-data'>{props.third}</h4>
        <h4 className='card-data'>{props.fourth}</h4>
        {props.fifth && <div className='fifth-data'>
          <h5 className='card-data'>Residents:</h5>
          {!props.fifth.length && <h5 className='card-data'>0</h5>}
          { 
            props.fifth.map(person => {
              return <h5 className='card-data'>{person}, </h5>
            })
          }
        </div>}
      </div>
    )
  }

export default Card