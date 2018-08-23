import React from 'react'
import Button from './index.js'
import { shallow } from 'enzyme'

describe('Button', () => {
  let wrapper
  let mockHandleDisplayCards

  beforeEach(() => {
    mockHandleDisplayCards = jest.fn()
    wrapper = shallow(<Button handleDisplayCards={mockHandleDisplayCards}/>)
  })
  
  it('should match the snapshot', () => {
    let wrapper = shallow(<Button />)
    expect(wrapper).toMatchSnapshot()
  })

  it('on click it should call handleDisplayCards', () => {
    wrapper.find('.people-button').simulate('click')
    expect(mockHandleDisplayCards).toHaveBeenCalled()
  })

  it('on click it should call handleDisplayCards', () => {
    wrapper.find('.planets-button').simulate('click')
    expect(mockHandleDisplayCards).toHaveBeenCalled()
  })

  it('on click it should call handleDisplayCards', () => {
    wrapper.find('.vehicles-button').simulate('click')
    expect(mockHandleDisplayCards).toHaveBeenCalled()
  })
})