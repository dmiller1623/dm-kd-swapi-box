import React from 'react'
import { residentsScraper } from './residentsScraper.js'
import { shallow } from 'enzyme'

describe('residentScraper', () => {
  let mockData
  beforeEach(() => {
    mockData = {residents : ["https://swapi.co/api/people/5/"]}
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({name: 'luke'})
    }))
  })

  it('residentScraper return an array of residents if status is ok', async  () => {
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({name: 'luke'})
    }))
    const results = await residentsScraper(mockData)

    expect(results).toEqual(['luke'])
  })

  it('should return an error message if status is not ok', async () => {
    const expected = new Error('failed')
    
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('failed')))

    await expect(residentsScraper(mockData)).rejects.toEqual(expected)
  })
})