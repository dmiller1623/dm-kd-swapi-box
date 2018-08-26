import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.js';
import { shallow, mount } from 'enzyme'
import { spy } from 'sinon'

describe('App', () => {
  let wrapper
  let mockPersonObject
  let mockPlanetObject
  let mockVehicleObject
  beforeEach(() => {
    mockPlanetObject = {name:"Alderaan",rotation_period:"24",orbital_period:"364",diameter:"12500",climate:"temperate",gravity:"1 standard",terrain:"grasslands, mountains",surface_water:"40",population:"2000000000",residents:["https://swapi.co/api/people/5/","https://swapi.co/api/people/68/","https://swapi.co/api/people/81/"],films:["https://swapi.co/api/films/6/","https://swapi.co/api/films/1/"],created:"2014-12-10T11:35:48.479000Z",edited:"2014-12-20T20:58:18.420000Z",url:"https://swapi.co/api/planets/2/"}
    mockPersonObject = {name:"Luke Skywalker",height:"172",mass:"77",hair_color:"blond",skin_color:"fair",eye_color:"blue",birth_year:"19BBY",gender:"male",homeworld:"https://swapi.co/api/planets/1/",films:["https://swapi.co/api/films/2/","https://swapi.co/api/films/6/","https://swapi.co/api/films/3/","https://swapi.co/api/films/1/","https://swapi.co/api/films/7/"],species:["https://swapi.co/api/species/1/"],vehicles:["https://swapi.co/api/vehicles/14/","https://swapi.co/api/vehicles/30/"],starships:["https://swapi.co/api/starships/12/","https://swapi.co/api/starships/22/"],created:"2014-12-09T13:50:51.644000Z",edited:"2014-12-20T21:17:56.891000Z",url:"https://swapi.co/api/people/1/"}
    mockVehicleObject = {name:"Sand Crawler",model:"Digger Crawler",manufacturer:"Corellia Mining Corporation",cost_in_credits:"150000",length:"36.8",max_atmosphering_speed:"30","crew":"46",passengers:"30",cargo_capacity:"50000",consumables:"2 months",vehicle_class:"wheeled",pilots:[],films:["https://swapi.co/api/films/5/","https://swapi.co/api/films/1/"],created:"2014-12-10T15:36:25.724000Z",edited:"2014-12-22T18:21:15.523587Z","url":"https://swapi.co/api/vehicles/4/"}
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
      movies: {},
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

  it('movieData return the right data and setState', async () => {
    const url = 'https://swapi.co/api/people/'
    wrapper.instance().getMovieData(url)
    expect(wrapper.state('movies')).toEqual({})
  })

  it('getPeopleData should return the right data and setState', async () => {
    const url = 'https://swapi.co/api/people/'
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({ results: [mockPersonObject] })
    }))
    await wrapper.instance().getPeopleData(url)
    expect(wrapper.state('people')[0].first).toEqual('Luke Skywalker')
    expect(wrapper.state('people')).toHaveLength(1)

  })

  it('getPlanetData should return the right data ans setState', async () => {
    const url = 'https://swapi.co/api/planets/'
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({ results: [mockPlanetObject] })
    }))
    await wrapper.instance().getPlanetData(url)
    expect(wrapper.state('planets')[0].first).toEqual('Alderaan')
    expect(wrapper.state('planets')).toHaveLength(1)
  }) 

  it('vehcile data should return the right data and setState', async () => {
    const expected = [{"first": "Sand Crawler", "fourth": "Passengers: 30", "second": "Model: Digger Crawler", "third": "Class: wheeled"}]
    const url = 'https://swapi.co/api/vehicles/'
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({ results: [mockVehicleObject] })
    }))
    await wrapper.instance().getVehicleData(url)
    expect(wrapper.state('vehicles')).toEqual(expected)
    expect(wrapper.state('vehicles')).toHaveLength(1)
  })

  it('update favorites should add a card to the array and add 1 to the count' , () => {
    const mockData = { first: 'Luke Skywalker', second: 'human', third: 'tatooine', fourth: 200}
    wrapper.setState({ favorites: []})
    wrapper.instance().updateFavorites(mockData)
    expect(wrapper.state('numOfFaves')).toEqual(1)
    expect(wrapper.state('favorites')).toEqual([mockData])
  })

  it('update favorites should remove a card if that card already is in the array and subtract 1 from the count', () => {
    const mockCard = { first: 'Luke Skywalker', second: 'human', third: 'tatooine', fourth: 200}
    wrapper.instance().updateFavorites(mockCard)
    expect(wrapper.state('numOfFaves')).toEqual(1)
    wrapper.instance().updateFavorites(mockCard)
    expect(wrapper.state('favorites')).toHaveLength(0)
    expect(wrapper.state('numOfFaves')).toEqual(0)
  })

  

})
