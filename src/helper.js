export const dataScrape = (type, data) => {
  const scrapedData = []
  if (type[0] === 'people') {
    const fetchedData = fetch('https://swapi.co/api/planets/1/').then(response => response.json())
    const homeworld = fetchedData
    // const species = 'fake species'
    // const population = 'fake pop'

    scrapedData.push({'name': 'name'}, {'homeworld': fetchedData}, 'species', 'population')
  } else if (type[0] === 'vehicles') {
    scrapedData.push({'name': 'name'})
  }
  console.log('scrapedData', scrapedData)
}