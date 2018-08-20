import React, { Component } from 'react';
import './styles.css';
import Header from '../Header';
import Button from '../Button';

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
        <div className='header-parent'>
          <Header numOfFaves={this.state.numOfFaves}/>
        </div>
        <div className='button-parent'>
          <Button />
        </div>

      </div>
    );
  }
}

export default App;
