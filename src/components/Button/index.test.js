import React from 'react'
import Button from './index.js'
import { shallow } from 'enzyme'

describe('Button', () => {
  let wrapper
  let mockHandleDisplayCards
  let mockEvaluateButtonClass

  beforeEach(() => {
    mockHandleDisplayCards = jest.fn()
    mockEvaluateButtonClass = jest.fn()
    wrapper = shallow(<Button handleDisplayCards={mockHandleDisplayCards} evaluateButtonClass={mockEvaluateButtonClass}/>)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('on click it should call handleDisplayCards', () => {
    wrapper.find('#people').simulate('click')
    expect(mockHandleDisplayCards).toHaveBeenCalled()
  })

  it('on click it should call handleDisplayCards', () => {
    wrapper.find('#planets').simulate('click')
    expect(mockHandleDisplayCards).toHaveBeenCalled()
  })

  it('on click it should call handleDisplayCards', () => {
    wrapper.find('#vehicles').simulate('click')
    expect(mockHandleDisplayCards).toHaveBeenCalled()
  })
})