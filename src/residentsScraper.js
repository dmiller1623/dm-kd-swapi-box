export const residentsScraper = (planet) => {
  const planetInfo = planet.residents.map(async (resident) => {
    try {
      const residentResponse = await fetch(resident)
      const residentInfo = await residentResponse.json()
      return residentInfo.name
    } catch(error) {
        throw new Error(error.message)
      }
  })
  return Promise.all(planetInfo)
}