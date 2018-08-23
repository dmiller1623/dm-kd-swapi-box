import React from 'react'
import './styles.css'
import Card from '../Card'
import PropTypes from 'prop-types'

const CardContainer = ({ people, vehicles, planets, cardType, favorites, updateFavorites, evaluateClass }) => {
  const peopleData = people.map((person, index) => {
    return <Card 
      {...person}
      key={index}
      updateFavorites={updateFavorites}
      favorites={favorites}
      evaluateClass={evaluateClass}
      />
    })
    
  const planetData = planets.map((planet, index) => {
    return <Card 
      {...planet}
      key={index}
      updateFavorites={updateFavorites}
      favorites={favorites}
      evaluateClass={evaluateClass}
    />
  })
    
  const vehiclesData = vehicles.map((vehicle, index) => {
    return <Card
      {...vehicle}
      favorited={vehicle.favorited}
      key={index}
      updateFavorites={updateFavorites}
      favorites={favorites}
      evaluateClass={evaluateClass}
    />
  })
    
  const favoritesData = favorites.map((favorite, index) => {
    return <Card
      {...favorite}
      key={index}
      favorites={favorites}
      updateFavorites={updateFavorites}
      evaluateClass={evaluateClass}
    />
  }) 
  
  return (
    <div className='card-container'>
      {cardType === 'people' && peopleData}
      {cardType === 'planets' && planetData}
      {cardType === 'vehicles' && vehiclesData}
      {cardType === 'favorites' && 
        (favorites.length ? favoritesData : 
        <div className='favorites-text'>
          No Favorites Selected
        </div>)}
    </div>
  )
}

CardContainer.propTypes = {
  people: PropTypes.array,
  vehicles: PropTypes.array,
  planets: PropTypes.array,
  cardType: PropTypes.string,
  favorites: PropTypes.array,
  updateFavorites: PropTypes.func,
  evaluateClass: PropTypes.func,
}

export default CardContainer