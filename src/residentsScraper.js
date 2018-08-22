export const residentsScraper = (planet) => {
  const planetInfo = planet.residents.map(async (resident) => {
    const residentResponse = await fetch(resident)
    const residentInfo = await residentResponse.json()
    return residentInfo.name
  })
  return Promise.all(planetInfo)
}