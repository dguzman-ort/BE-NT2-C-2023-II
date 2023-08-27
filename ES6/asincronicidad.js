function imprimirUno(){
  console.log("Uno")
}

function imprimirDos(){
  console.log("Dos")
}

function imprimirTres(){
  console.log("Tres")
}

imprimirUno()
imprimirDos()
imprimirTres()

console.log("****** Empezamos con asincronicidad *****")

let ejemplo = imprimirDos
setTimeout(imprimirUno)
setTimeout(ejemplo, 1000) // expresion de tiempo en milisegundos
setTimeout(imprimirTres)


ejemplo = imprimirTres

setTimeout(ejemplo)


console.log("****** Finalizamos con asincronicidad *****")

console.log("hola mundo")

const interval = setInterval(imprimirUno, 1000)

clearInterval(interval)
/*
setTimeout(() => {
  
}, 1000)
*/



