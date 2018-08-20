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
      numOfFaves: 0
    })
  }

  render() {
    return (
      <div className='app'>
        <div className='movie-parent'>
          <MovieText />
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
