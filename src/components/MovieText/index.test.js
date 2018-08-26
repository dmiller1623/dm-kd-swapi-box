import React from 'react'
import MovieText from './index.js'
import { shallow } from 'enzyme'

describe('MovieText', () => {
  it('should match the snaphot', () => {
    let mockMovie = { title: 'blaw', opening_crawl: 'sdklncknd', release_date: 38932}
    let wrapper = shallow(<MovieText movies={mockMovie}/>)
    expect(wrapper).toMatchSnapshot()
  })
})