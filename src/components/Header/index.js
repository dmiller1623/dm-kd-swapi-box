import React from 'react';
import './styles.css'
import PropTypes from 'prop-types'

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

Header.propTypes = {
  numOfFaves: PropTypes.number,
  handleDisplayCards: PropTypes.func
}

export default Header;