import PERSONAS, { validaMayorEdad } from './personas'

/**
 * CONSIGNA:realizar una funcion que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar al casino
 * Edad minima 18
 * 
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */






console.log(PERSONAS)

const personasHabilitadas = PERSONAS.filter(validaMayorEdad)

console.log("Personas habilidas: ", personasHabilitadas, PERSONAS)