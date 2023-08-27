saludo()

//noFunction()
//anotherFunction()

const anios = 25

var cadena = `Hola, tengo ${anios} anios`

function saludo(){
  console.log(cadena)
}

var noFunction = function(){
  console.log(cadena)
}

noFunction()

const anotherFunction = (param) => {
  console.log(cadena)
} 

anotherFunction()