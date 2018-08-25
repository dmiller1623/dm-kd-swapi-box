import { residentsScraper } from './residentsScraper'

export const peopleScrape = (data) => {
  const peopleData = data.results.map(async (person) => {
    const speciesResponse = await fetch(person.species)
    const speciesInfo = await speciesResponse.json()
    const locationResponse = await fetch(person.homeworld)
    const locationInfo = await locationResponse.json()
    const first = person.name
    const second = `Species: ${speciesInfo.name}`
    const third = `Homeworld: ${locationInfo.name}`
    const fourth = `Pop: ${locationInfo.population}`

    return {first, second, third, fourth}
  })
  return Promise.all(peopleData)
}

export const planetScrape = (data) => {
  const planetData = data.results.map(async (planet) => {
    const fifth = await residentsScraper(planet)
    const first = planet.name
    const second = `Terrain: ${planet.terrain}`
    const third = `Pop: ${planet.population}`
    const fourth = `Climate: ${planet.climate}`

    return {first, second, third, fourth, fifth}
  })
  return Promise.all(planetData)
}

export const vehicleScrape = (data) => {
  const vehicleData = data.results.map(async (vehicle) => {
    const first = vehicle.name
    const second = `Model: ${vehicle.model}`
    const third = `Class: ${vehicle.vehicle_class}`
    const fourth = `Passengers: ${vehicle.passengers}`

    return {first, second, third, fourth}
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