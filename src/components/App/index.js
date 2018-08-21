import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import CardContainer from '../CardContainer'
import Button from '../Button'
import MovieText from '../MovieText';
// import { peopleData, planetData } from '../../helper';


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
    const movies = 'movies'
    const people = 'people'
    const planets = 'planets'
    const vehicles = 'vehicles'
    const peopleUrl = 'https://swapi.co/api/people/'
    const planetsUrl = 'https://swapi.co/api/planets/'
    const vehiclesUrl = 'https://swapi.co/api/vehicles/'
    const movieUrl = 'https://swapi.co/api/films/'
    

    // this.fetch(movies, movieUrl)
    // this.fetch(people, peopleUrl)
    // this.fetch(planets, planetsUrl)
    // this.fetch(vehicles, vehiclesUrl)

    this.setState( { movies: {title: 'Return of the Jedi', 
    opening_crawl: 'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space',
    release_date: '1983-05-25'} })
  }

  fetch = (dataType, url) => {
    fetch(url).then(response => response.json())
    .then(data => {
      console.log(dataType, data)
      if (dataType === 'movies') {
        this.setState({ [dataType]: data.results[4]})
      } else {
      this.setState({ [dataType]: data })
      }
    })
    .catch(error => {
    })
  }

  render() {
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
            <CardContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
