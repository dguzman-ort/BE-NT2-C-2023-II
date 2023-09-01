const MAYORIA_EDAD = 18

const personas = [
  {
    firstName: 'Emilia',
    lastName: 'Clarke',
    age: 35
  },
  {
    firstName: 'Jon',
    lastName: 'Snow',
    age: 18
  },
  {
    firstName: 'Mario',
    lastName: 'Bros',
    age: 65
  },
  {
    firstName: 'Carlos',
    lastName: 'Perez',
    age: 17
  }
]

const validaMayorEdad = persona => persona.age >= MAYORIA_EDAD
  


export default personas

export { personas, MAYORIA_EDAD , validaMayorEdad }