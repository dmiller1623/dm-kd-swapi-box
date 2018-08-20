import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import CardContainer from '../CardContainer'
import Button from '../Button'
import MovieText from '../MovieText'

class App extends Component {
  constructor () {
    super()
    this.state = ({
      numOfFaves: 0,
      movies: {}
  
    })
  }

  componentDidMount = () => {
    // const url = 'https://swapi.co/api/films/'
    // fetch(url).then(response => response.json())
    // .then(data => {
    //   console.log(data.results[4])
    //   this.setState({ movies: data.results[4] })
    // })
    // .catch(error => {
    // })
    this.setState( { movies: {title: 'Return of the Jedi', 
    opening_crawl: 'Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space',
    release_date: '1983-05-25'
  } })
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
