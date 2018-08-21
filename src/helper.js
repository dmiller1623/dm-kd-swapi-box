export const dataScrape = (data, type) => {
  // console.log('type', type)
  // console.log('data', data)
  const scrapedData = []
  if (type === 'people') {
    const scrapedPeople = data.results.map(person => {
      // console.log(getData(person.species))
      let personObject = {}
        personObject['name'] = person.name
        return fetch(person.species) 
        .then(response => response.json())
        .then(speciesData => ({...personObject, species: speciesData.name }))
        console.log(personObject)
    
        return personObject 
      })
      console.log(scrapedPeople)
      return Promise.all(scrapedPeople)
    // const fetchedData = fetch('https://swapi.co/api/planets/1/').then(response => response.json())
    // const homeworld = fetchedData
    // const species = 'fake species'
    // const population = 'fake pop'

    // scrapedData.push({'name': 'name'}, {'homeworld': fetchedData}, 'species', 'population')
  // } else if (type[0] === 'vehicles') {
  //   scrapedData.push({'name': 'name'})
  }
  // console.log('scrapedData', scrapedData)
}