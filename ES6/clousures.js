console.log("Clousure functions")

function helloFunction(){
  const message = "Hello world"
  const age = 18

  function getMessage(){
    return message
  }
  function getAge(){
    return age
  }

  /*
  return {
    getMessage: getMessage,
    getAge: getAge
  }*/

  return {
    getMessage,
    getAge
  }
}

console.log(typeof message)

const clousure = helloFunction()

console.log(typeof clousure, clousure)

console.log(clousure.getMessage())


console.log(helloFunction().getAge())