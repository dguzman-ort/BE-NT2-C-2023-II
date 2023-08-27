const saludar = (function(){
  var mensaje = "Hola mundo"

  function saludando(){
    console.log(`Mensaje dentro del clousure ${mensaje}`)
  }

  console.log("Inicializando funcion...")

  return saludando
})()

console.log(typeof saludar)

saludar()



/**
 * Caso de uso mas real
 */

const counter = (function(){

  initCounter()

  let number = 0

  function initCounter(){
    console.log("Definicion de contador")
  }

  function get(){
    return number
  }

  function inc(){
    number++
  }

  function dec() {
    number--
  }

  const showNumber = () => {
    console.log(number)
  }

  const sum = (num) => {
    number = number + num
  }

  return {
    sum,
    inc,
    dec,
    get,
    showNumber
  }

})()

console.log(counter, typeof counter)

counter.showNumber()
counter.inc()
counter.inc()
counter.inc()
counter.inc()

counter.showNumber()



const array = [1, 5, 7, 9]

array.forEach(elem => {
  console.log(elem)
})
