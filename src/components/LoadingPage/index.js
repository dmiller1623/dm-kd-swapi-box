import React from 'react'
import './styles.css'

const LoadingPage = ({ cardType }) => {
  if(cardType === 'people') {
    return ( 
      <div className='loading-page-people'></div>
    )
  }  
  else if(cardType === 'planets') {
    return (
      <div className='loading-page-planets'></div>
    )
  }
  else if(cardType === 'vehicles') {
    return ( 
       <div className='loading-page-vehicles'></div>
    )
  }  
}

export default LoadingPage