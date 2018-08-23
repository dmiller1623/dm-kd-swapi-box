import React from 'react'
import LoadingPage from './index.js'
import { shallow } from 'enzyme'

describe('LoadingPage', () => {
  it('should match the snaphot', () => {
    let wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
  })
})