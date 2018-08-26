import { peopleScrape, vehicleScrape, movieScrape } from './helper.js';

describe('peopleScrape, and vehicleScrape', () => {
  let mockData;

  it('planetScrape should return the right species and homeworld', async () => {
    mockData = { results: [{ species: "https://swapi.co/api/species/2/" }, { homeworld:'https://swapi.co/api/planets/8/'}]};
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true, 
        json: () => Promise.resolve({ name: 'human', population: 1 })
      }));
    const expected = [{
      "first": undefined, 
      "fourth": "Pop: 1", 
      "second": "Species: human", 
      "third": "Homeworld: human"
    }, 
    {
      "first": undefined, 
      "fourth": "Pop: 1", 
      "second": "Species: human", 
      "third": "Homeworld: human"
    }];

    const results = await peopleScrape(mockData);
    expect(results).toEqual(expected);
  });

  it('should return an error if the fetch fails', async () => {
    mockData = { results: [{ species: "https://swapi.co/api/species/2/" }, { homeworld:'https://swapi.co/api/planets/8/'}]};
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: true, 
        json: () => Promise.resolve({ name: 'human', population: 1 })
      }));
    const expected = new Error('failed');
    
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('failed')));

    await expect(peopleScrape(mockData)).rejects.toEqual(expected);
  });

  it('vehicleScrape should return the right vehicle data', async () => {
    const expected = [{"first": "Alderann", "fourth": "Passengers: 5", "second": "Model: diggerCrawler", "third": "Class: wheeled"}];
    mockData = { results: [{name: 'Alderann', model: 'diggerCrawler', vehicle_class: 'wheeled', passengers: 5 }] };
    const results = await vehicleScrape(mockData);
    
    expect(results).toEqual(expected);
  });

  it('movieScraper should return a random number', () => {
    const results = movieScrape();
    expect(results).toBeLessThan(7);
    expect(results).toBeGreaterThan(-1);
  });

});