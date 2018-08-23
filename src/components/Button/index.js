import React from 'react';
import './styles.css'
import PropTypes from 'prop-types'

const Button = ({ handleDisplayCards  }) => {
  return (
    <div className='button-container'>
      <div className='button people-button' onClick={(e) => handleDisplayCards(e)}>people</div>
      <div className='button planets-button'  onClick={(e) => handleDisplayCards(e)}>planets</div>
      <div className='button vehicles-button'  onClick={(e) => handleDisplayCards(e)}>vehicles</div>
    </div>
  )
}

Button.propTypes = {
  handleDisplayCards: PropTypes.func
}

export default Button;