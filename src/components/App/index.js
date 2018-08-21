import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import CardContainer from '../CardContainer'
import Button from '../Button'
import MovieText from '../MovieText';
import { dataScrape } from '../../helper';


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
    const movieUrl = 'https://swapi.co/api/films/'
    

    // this.getData(moviesUrl, 'movies')
    this.getData(peopleUrl, 'people')
    // console.log(this.state)
    // this.getData(planetsUrl, 'planets')
    // this.getData(vehiclesUrl, 'vehicles')
    

    this.setState( { movies: {title: 'Return of the Jedi', 
    opening_crawl: 'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space',
    release_date: '1983-05-25'} })
  }

  getData = (url, dataType) => {
    fetch(url).then(response => response.json())

    .then(data => {
      if (dataType === 'movies') {
       this.setState({ [dataType]: data.results[4]})
       return
      }
      dataScrape(data, dataType)
      .then(completeObject => this.setState({ [dataType]: completeObject }))
    })
    .catch(error => {
    })
  }

  filterDataType = (data, dataType) => {
    console.log(data)
      // console.log(dataType, data)
      // if (dataType === 'movies') {
      //  this.setState({ [dataType]: data.results[4]})
      // } else {
      this.setState({ [dataType]: data })

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
