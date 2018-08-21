import { getData } from './fetch'

export const dataScrape = (data, type) => {

  // const scrapedData = []
  if (type === 'people') {
    const fullData = data.results.map(person => {
      let personObject = {}
      let species = getData(person.species)
      .then(species => ({...personObject, name: person.name, species: species.name }))

      let location = getData(person.homeworld)
      .then(location => ({...personObject, homeworld: location.name, population: location.population }))  
      console.log(personObject)
      return personObject
    })


    // const location = data.results.map(person => {
    //   return getData(person.homeworld)
    //   .then(location => ({ homeworld: location.name, population: location.population}))
    // })
    // scrapedData.push(...species, ...location)
    // const answer = scrapedData.reduce((acc, data) => {
    //   if (!acc[data.name]) {
    //     acc[data.name] = {}
    //   }
    //   acc[data.name] += {name: data.name, species: data.species, homeworld: data.homeworld, population: data.population}
    //   return acc
    // }, [])
    return Promise.all(fullData)
  }
}
// let personObject = {}
//   // return personObject['name'] = person.name