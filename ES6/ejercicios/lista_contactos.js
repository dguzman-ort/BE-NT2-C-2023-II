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
 * CONSIGNA: Dada una lista de contactos, crear una funcion que agrupe los 
 * contactos segun la primera letra de su nombre (nombre completo). 
 * Esta seria la estructura esperada:
 * 
 * {
 * 
 *    C: [{}, {}, ..., {} ],
 *    E: [{}, {}, ..., {}]
 *    L: [{fullName: "Landa, Gabriel", age: 48, phone: "22-121-941"}, ..., {}]
 * 
 * }
 * 
 */

const agrupados = CONTACTOS.reduce((grupo, contacto) => {
  // Empieza el show
  //console.log(contacto, contacto.fullName[0])

  const letra = contacto.fullName[0]

  if (!(letra in grupo)){
    grupo[letra] = []
  }

  grupo[letra].push(contacto)
  return grupo

}, {})

//console.log(agrupados)

const agrupadosV2 = CONTACTOS.reduce((grupo, contacto) => {
  
  //console.log(contacto, contacto.fullName[0])

  const letra = contacto.fullName[0]

  // Operador split para genera y/o modificar objetos iterables
  return {
    ...grupo,
    // Para cada iteración confirmo un nuevo contacto segun la primera letra.

    //[...(grupo[letra])] => Hago un spreed del array supuestamente existente en grupo[letra] 
    // Si no existe algo en grupo[letra], es decir NO hay array aun, se lo creo
    // utilizando el operador || []. 
    [letra]: [...(grupo[letra] || [] ), contacto]
  }

}, {})

console.log(agrupadosV2)








/**
 * CONSIGNA FINAL: Con el objeto contactos agrupados por la primera letra
 *  devolver un array agrupados por titulo (primera letra) y ordenado 
 * alfabeticamente
 * 
 * Output esperado:
 * 
 * [
 * 
 *  {
 *    "title": "A",
 *    "data": [{}, {}, {}]
 *  },
 *  {
 *    "title": "F",
 *    "data": [{}, {}, {}]
 *  },
 *  {
 *    "title": "R",
 *    "data": [{}, {}, {}]
 *  }
 * 
 * ]
 */