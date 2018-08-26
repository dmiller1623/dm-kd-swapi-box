import React from 'react'
import MovieText from './index.js'
import { shallow } from 'enzyme'

describe('MovieText', () => {
  it('should match the snaphot', () => {
    let wrapper = shallow(<MovieText />)
    expect(wrapper).toMatchSnapshot()
  })
})