import React from 'react';
import './styles.css'
import PropTypes from 'prop-types'

const Header = ({ numOfFaves, handleDisplayCards }) => {
  return (
    <div className='header'>
      <div></div>
      <img src='https://fontmeme.com/permalink/180823/038124195840fbb42b03e437645af736.png'></img>
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

// thanks to fontmeme.com for the header font link!