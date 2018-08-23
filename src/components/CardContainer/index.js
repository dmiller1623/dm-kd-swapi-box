import React from 'react'
import './styles.css'
import Card from '../Card'
import { dataScrape } from '../../helper';


const CardContainer = ({ people, vehicles, planets, cardType, favorites, updateFavorites, evaluateClass }) => {
  // console.log(people)
  const peopleData = people.map((person, index) => {
    return <Card 
    // {...person}
      first={person.name}
      second={person.species}
      third={person.homeworld}
      fourth={person.population}
      key={index}
      updateFavorites={updateFavorites}
      favorites={favorites}
      evaluateClass={evaluateClass}
      />
    })
    
    const planetData = planets.map((planet, index) => {
      return <Card 
      first={planet.name}
      second={planet.terrain}
      third={planet.population}
      fourth={planet.climate}
      fifth={planet.residents}
      key={index}
      updateFavorites={updateFavorites}
      favorites={favorites}
      evaluateClass={evaluateClass}

      />
    })
    
    const vehiclesData = vehicles.map((vehicle, index) => {
      return <Card
      first={vehicle.name} 
      second={vehicle.model}
      third={vehicle.type}
      fourth={vehicle.passengers}
      favorited={vehicle.favorited}
      key={index}
      updateFavorites={updateFavorites}
      favorites={favorites}
      evaluateClass={evaluateClass}

      />
    })
    
    const favoritesData = favorites.map((favorite, index) => {
      return <Card
      first={favorite.first}
      second={favorite.second}
      third={favorite.third}
      fourth={favorite.fourth}
      fifth={favorite.fifth}
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
      {cardType === 'favorites' && favoritesData}
    </div>
  )
}

export default CardContainer