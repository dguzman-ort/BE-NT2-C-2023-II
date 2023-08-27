const arr = ['Instituto ORT', 42, true, function() {    
  console.log('Hola mundo')
}];


//console.log(arr[3])
//arr[3]()


const x = 17

const explicita = String(x)

console.log("x", x, typeof x)

console.log("explicita", explicita, typeof explicita)

console.log(x == explicita)

console.log(x === explicita)


/**
 * Otro ejemplo
 */

const implicito = x + ""
console.log("****** Valores falsos *******")

const invalido = null


console.log(invalido === undefined)
