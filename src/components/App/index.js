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
      movies: {},
      people: {},
      vehicles: {},
      planets: {}
    })
  }

  componentDidMount = () => {
    const peopleUrl = 'https://swapi.co/api/people/'
    const planetsUrl = 'https://swapi.co/api/planets/'
    const vehiclesUrl = 'https://swapi.co/api/vehicles/'
    const moviesUrl = 'https://swapi.co/api/films/4/'
    

    this.getMovieData(moviesUrl)
    // this.getPeopleData(peopleUrl)
    // console.log(this.state)
    // this.getPlanetData(planetsUrl)
    // this.getVehicleData(vehiclesUrl)
    

    // this.setState( { movies: {title: 'Return of the Jedi', 
    // opening_crawl: 'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space',
    // release_date: '1983-05-25'} })
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

  render() {
    // const { movies, people, vehicles, planets } = this.state
    // console.log(people)
    return (
      <div className='app'>
        <div className='movie-parent'>
          <MovieText movies={this.state.movies}/>
        </div>
        <div className='main-section'>
          <div className='header-parent'>
            <Header numOfFaves={this.state.numOfFaves}/>
          </div>
          <div className='button-parent'>
            <Button />
          </div>
          <div className='card-container-parent'>
            <CardContainer 
            people={this.state.people} 
            vehicles={this.state.vehicles} 
            planets={this.state.planets}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
