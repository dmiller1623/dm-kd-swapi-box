import React from 'react'
import CardContainer from './index.js'
import { shallow } from 'enzyme'
import Card from '../Card'

describe('CardContainer', () => {
  let people
  let vehicles
  let planets
  let cardType 
  let favorites
  let mockUpdateFavorites
  let mockEvaluateClass 
  let wrapper 
  beforeEach(() => {
    people = []
    vehicles = []
    planets = []
    cardType = "people"
    favorites = []
    mockUpdateFavorites = jest.fn()
    mockEvaluateClass = jest.fn()
    wrapper = shallow(
    <CardContainer 
    people={people}
    vehicles={vehicles}
    planets={planets}
    cardType={cardType}
    favorites={favorites}
    updateFavorites={mockUpdateFavorites}
    evaluateClass={mockEvaluateClass}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the exact amount of cards nn the people array', () =>{
    people = [ {first: 'first', second: 'second', third: 'third', fourth: 'fourth'} ]
    wrapper = shallow(
      <CardContainer 
      people={people}
      vehicles={vehicles}
      planets={planets}
      cardType={cardType}
      favorites={favorites}
      updateFavorites={mockUpdateFavorites}
      evaluateClass={mockEvaluateClass}
      />)
      expect(wrapper.find(Card).length).toEqual(1)
  })

  it('should render the exact amount of cards in the planets array', () => {
    cardType = 'planets'
    planets = [ {first: 'first', second: 'second', third: 'third', fourth: 'fourth'} ]
    wrapper = shallow(
      <CardContainer 
      people={people}
      vehicles={vehicles}
      planets={planets}
      cardType={cardType}
      favorites={favorites}
      updateFavorites={mockUpdateFavorites}
      evaluateClass={mockEvaluateClass}
      />)
      expect(wrapper.find(Card).length).toEqual(1)
   })  
   
   it('should render the exact amount of cards in the vehicles array', () => {
    cardType = 'vehicles'
    vehicles = [ {first: 'first', second: 'second', third: 'third', fourth: 'fourth'} ]
    wrapper = shallow(
      <CardContainer 
      people={people}
      vehicles={vehicles}
      planets={planets}
      cardType={cardType}
      favorites={favorites}
      updateFavorites={mockUpdateFavorites}
      evaluateClass={mockEvaluateClass}
      />)
      expect(wrapper.find(Card).length).toEqual(1)
   }) 

   it('should render the exact amount of cards in the favorites array', () => {
    cardType = 'favorites'
    favorites = [ {first: 'first', second: 'second', third: 'third', fourth: 'fourth'} ]
    wrapper = shallow(
      <CardContainer 
      people={people}
      vehicles={vehicles}
      planets={planets}
      cardType={cardType}
      favorites={favorites}
      updateFavorites={mockUpdateFavorites}
      evaluateClass={mockEvaluateClass}
      />)
      expect(wrapper.find(Card).length).toEqual(1)
   }) 

   it('should render a second with a message if favorites is empty', () => {
     cardType = 'favorites'
     favorites = []
     wrapper = shallow(
      <CardContainer 
      people={people}
      vehicles={vehicles}
      planets={planets}
      cardType={cardType}
      favorites={favorites}
      updateFavorites={mockUpdateFavorites}
      evaluateClass={mockEvaluateClass}
      />)

      expect(wrapper.find('div').length).toEqual(2)
   })
})