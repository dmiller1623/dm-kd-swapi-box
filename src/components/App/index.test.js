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
})
