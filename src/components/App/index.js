import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import CardContainer from '../CardContainer'
import Button from '../Button'
import MovieText from '../MovieText';
import { peopleScrape, planetScrape, vehicleScrape, movieScrape } from '../../helper';


class App extends Component {
  constructor () {
    super()
    this.state = ({
      numOfFaves: 0,
      movies: [],
      people: [],
      vehicles: [],
      planets: [], 
      cardType: 'null',
      favorites: []
      // displayFavorites: false
    })
  }

  componentDidMount = () => {
    const peopleUrl = 'https://swapi.co/api/people/'
    const planetsUrl = 'https://swapi.co/api/planets/'
    const vehiclesUrl = 'https://swapi.co/api/vehicles/'
    const moviesUrl = 'https://swapi.co/api/films/4/'
    
    // this.getMovieData(moviesUrl)
    this.getPeopleData(peopleUrl)
    // console.log(this.state)
    this.getPlanetData(planetsUrl)
    this.getVehicleData(vehiclesUrl)
  }

  getMovieData = async (url) => {
    const response = await fetch(url)
    const movies = await response.json()
    // const movies = await movieScrape(info)
    this.setState({ movies })
  }

  getPeopleData = async (url) => {
    const response = await fetch(url)
    const info = await response.json()
    const people = await peopleScrape(info)
    this.setState({ people })
  }

  getPlanetData = async (url) => {
    const response = await fetch(url)
    const info = await response.json()
    const planets = await planetScrape(info)
    this.setState({ planets })
  }

  getVehicleData = async (url) => {
    const response = await fetch(url)
    const info = await response.json()
    const vehicles = await vehicleScrape(info)
    this.setState({ vehicles })
  }

  handleDisplayCards = (event) => {
    if(event.target.className === 'button people-button') {
      this.setState({ cardType: 'people' })

    } else if(event.target.className === 'button planets-button') {
      this.setState({ cardType: 'planets' })
      
    } else if(event.target.className === 'button vehicles-button') {
      this.setState({ cardType: 'vehicles' })
      
    } else if(event.target.className === 'favorites-div') {
      console.log('hey')
      this.setState({ cardType: 'favorites'})
    }
  }

  updateFavorites = (card) => {
    let favorites
    let favoriteNames = this.state.favorites.map(favorite => favorite.first)

    if(favoriteNames.includes(card.first)) {
      this.state.numOfFaves-- 
      favorites = this.state.favorites.filter(favorite => favorite.first !== card.first)
      this.setState({ favorites })
    } else{ 
      this.state.numOfFaves++
      let newFavorite = {...card, id:Date.now()}
      favorites = [...this.state.favorites, newFavorite]
    }
    this.setState({ favorites })
  }



   render() {
    return (
      <div className='app'>
        <div className='movie-parent'>
          <MovieText movies={this.state.movies}/>
        </div>
        <div className='main-section'>
          <div className='header-parent'>
            <Header 
            numOfFaves={this.state.numOfFaves}
            handleDisplayCards={this.handleDisplayCards}
            />
          </div>
          <div className='button-parent'>
            <Button handleDisplayCards={this.handleDisplayCards}/>
          </div>
          <div className='card-container-parent'>
            <CardContainer 
            people={this.state.people} 
            vehicles={this.state.vehicles} 
            planets={this.state.planets}
            cardType={this.state.cardType}
            updateFavorites={this.updateFavorites}
            favorites={this.state.favorites}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
