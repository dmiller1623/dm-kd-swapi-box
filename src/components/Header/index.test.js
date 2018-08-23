import React from 'react'
import Header from './index.js'
import { shallow } from 'enzyme'

describe('Header', () => {
  let wrapper 
  let mockHandleDisplay

  beforeEach(() => {
    mockHandleDisplay = jest.fn()
    wrapper = shallow(<Header handleDisplayCards={mockHandleDisplay}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleDisplay cards when the fav button is clicked', () => {
    wrapper.find('.favorites-div').simulate('click')
    expect(mockHandleDisplay).toHaveBeenCalled()
  })
})