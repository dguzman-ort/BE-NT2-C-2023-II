import CONTACTOS from './contactos'

/** ESTRUCTURA DE DATOS
 * 
 * {
 *  firstName,
 *  lastName,
 *  age,
 *  phone
 * }
 * 
 */

console.log(CONTACTOS)

/**
 * Ejemplo de Array.Reduce sumando edades de mi lista de contactos
 */
const sumandoEdades = CONTACTOS.reduce((prev, contacto) => {
  console.log(prev, contacto)
  return prev + contacto.age
}, 0)

console.log(sumandoEdades)