import React from 'react';
import './styles.css'

const Button = () => {
  return (
    <div className='button-container'>
      <div className='button people-button'>people</div>
      <div className='button planets-button'>planets</div>
      <div className='button vehicles-button'>vehicles</div>
    </div>
  )
}

export default Button;