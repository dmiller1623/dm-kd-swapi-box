import React, { Component } from 'react'
import './styles.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    // console.log(this.props)
    return(
      <div className='card'>
        <button className={this.props.evaluateClass(this.props)} onClick={() => this.props.updateFavorites(this.props)}>FAV</button>
        <h4 className='card-data'>{this.props.first}</h4>
        <h4 className='card-data'>{this.props.second}</h4>
        <h4 className='card-data'>{this.props.third}</h4>
        <h4 className='card-data'>{this.props.fourth}</h4>
        { this.props.fifth && 
            this.props.fifth.map(person => {
              return <h2 className='card-data'>{person}</h2>
            })
        }
      </div>
    )
  }
}

export default Card