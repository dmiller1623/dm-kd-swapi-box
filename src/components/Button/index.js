import React from 'react';
import './styles.css'

const Button = ({ handleDisplayCards  }) => {
  return (
    <div className='button-container'>
      <div className='button people-button' onClick={(e) => handleDisplayCards(e)}>people</div>
      <div className='button planets-button'  onClick={(e) => handleDisplayCards(e)}>planets</div>
      <div className='button vehicles-button'  onClick={(e) => handleDisplayCards(e)}>vehicles</div>
    </div>
  )
}

export default Button;