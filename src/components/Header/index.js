import React from 'react';
import './styles.css'

const Header = ({ numOfFaves, handleDisplayCards }) => {
  return (
    <div className='header'>
      <div></div>
      <h1>SWAPI-Box</h1>
      <div className='favorites-button'>
        <p className='favorites-div' onClick={(e) => handleDisplayCards(e)}>View Favorites</p>
        <div>{numOfFaves}</div>
        
      </div>
    </div>
  )
}

export default Header;