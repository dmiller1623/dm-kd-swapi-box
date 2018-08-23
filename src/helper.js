import { residentsScraper } from './residentsScraper'

export const peopleScrape = (data) => {
  const peopleData = data.results.map(async (person) => {
    const speciesResponse = await fetch(person.species)
    const speciesInfo = await speciesResponse.json()
    const locationResponse = await fetch(person.homeworld)
    const locationInfo = await locationResponse.json()
    const name = person.name
    const species = speciesInfo.name
    const homeworld = locationInfo.name
    const population = locationInfo.population

    return {name, species, homeworld, population}
  })
  return Promise.all(peopleData)
}

export const planetScrape = (data) => {
  const planetData = data.results.map(async (planet) => {
    const residents = await residentsScraper(planet)
    const name = planet.name
    const terrain = planet.terrain
    const population = planet.population
    const climate = planet.climate

    return {name, terrain, population, residents, climate}
  })
  return Promise.all(planetData)
}

export const vehicleScrape = (data) => {
  const vehicleData = data.results.map(async (vehicle) => {
    const name = vehicle.name
    const model = vehicle.model
    const type = vehicle.vehicle_class
    const passengers = vehicle.passengers
    const favorited = false

    return {name, model, type, passengers}
  })
  return Promise.all(vehicleData)
}

// export const movieScrape = (data) => {
//   const movieData = data.results.find(async (movie) => {
//     console.log(movie)
//     return movie === 3
//   })
//   console.log(movieData)
//   return movieData
// }