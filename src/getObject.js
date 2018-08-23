export const getObject = (object) => {
  return {
    homeworld: object.name,
    pop: object.population
  }
}