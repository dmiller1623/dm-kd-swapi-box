import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({ name: 'human', population: 1 })
    }))
    wrapper = shallow(<App />)
    // const url = 'https://swapi.co/api/people/'
    // wrapper.instance().getMovieData(url)
  })
  
  it('should start off with a default state', () => {
    const expected = {
      numOfFaves: 0,
      movies: [],
      people: [],
      vehicles: [],
      planets: [],
      cardType: 'welcome',
      favorites: [],
      isLoading: false
    }
    expect(wrapper.state()).toEqual(expected)
    
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('movieData return the right data', async () => {
    const url = 'https://swapi.co/api/people/'
    wrapper.instance().getMovieData(url)
    expect(wrapper.state('movies')).toEqual(['hello'])
  })

  it('update favorites should add a card to the array and add 1 to the count' , () => {
    const mockData = { first: 'Luke Skywalker', second: 'human', third: 'tatooine', fourth: 200}
    wrapper.setState({ favorites: []})
    wrapper.instance().updateFavorites(mockData)
    expect(wrapper.state('numOfFaves')).toEqual(1)
    expect(wrapper.state('favorites')).toEqual([mockData])
  })

  it('update favorites should remove a card if that card already is in the array and subtract 1 from the count', () => {
    const mockData = [{ first: 'Luke Skywalker', second: 'human', third: 'tatooine', fourth: 200}]
    const mockCard = { first: 'Luke Skywalker', second: 'human', third: 'tatooine', fourth: 200}
    wrapper.instance().updateFavorites(mockCard)
    expect(wrapper.state('numOfFaves')).toEqual(1)
    wrapper.instance().updateFavorites(mockCard)
    expect(wrapper.state('favorites')).toHaveLength(0)
    expect(wrapper.state('numOfFaves')).toEqual(0)
  })

})
