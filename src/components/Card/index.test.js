import React from 'react'
import Card from './index.js'
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper
  let mockFirst
  let mockSecond
  let mockThird
  let mockFourth
  let mockFifth
  let mockEvaluateClass
  let mockUpdateFavorites
  
  beforeEach(() => {
    mockEvaluateClass = jest.fn()
    mockUpdateFavorites = jest.fn()
    
    wrapper = shallow(<Card 
      first='first' 
      second='second'
      third='third'
      fourth='fourth'
      fifth={[{name: 'name'}]}
      evaluateClass={mockEvaluateClass}
      updateFavorites={mockUpdateFavorites}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke updateFavorites and evaluateClass on click', () => {
    wrapper.find('button').simulate('click')

    expect(mockEvaluateClass).toHaveBeenCalled()        
    expect(mockUpdateFavorites).toHaveBeenCalled()
  })

  it('should render a fifth dataset if the data is coming in', () => {
    expect(wrapper.find('.card-data').length).toEqual(6)
    expect(wrapper.find('.fifth-data').length).toEqual(1)

    wrapper = shallow(<Card 
      first='first' 
      second='second'
      third='third'
      fourth='fourth'
      evaluateClass={mockEvaluateClass}
      updateFavorites={mockUpdateFavorites}
      />)

      expect(wrapper.find('.card-data').length).toEqual(4)
      expect(wrapper.find('.fifth-data').length).toEqual(0)

  })
})