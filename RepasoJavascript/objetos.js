function saludo(nombre){
  //console.log("Hola " + nombre)
  console.log(`Hola ${nombre}`)
}

console.log(typeof saludo)

const o = new Object()

o.firstName = "Carlos"
o.lastName = "Tevez"
o.isteaching = false
o.age = 45
o.friends = ["Ignacio", "Gabriel", "Luis"]
o.sayHello = saludo
o.sayHelloToAll = function() {
  console.log(this.friends)

  for (let i = 0; i < this.friends.length; i++){
    console.log(`Hola ${this.friends[i]}`)
  }


}

console.log(o)

o.firstName = "Andreas"

console.log(o.firstName)

//o.sayHello(o.friends[2])

delete o.age

//console.log(o)

o.sayHelloToAll()

/**
 * 
 * JSON
 * Javascript Object Notation
 * 
 */

let cadena_objeto = JSON.stringify(o)
console.log(cadena_objeto, typeof cadena_objeto)

cadena_objeto = JSON.parse(cadena_objeto)

console.log(cadena_objeto)



console.log("********************")

const o2 = {}

console.log(o2)

o2["firstName"] = "Ana"
o2["lastName"] = "Lopez"
o2["age"] = 25

console.log(o2, o2["firstName"], o2.firstName)



const o3 = {
  firstName: "Daniel",
  lastName: "Guzman",
  age: 32,
  phone: 111111,
  address: {
    street: "Borges",
    number: 12123
  },
  academicLevel: [
    {
      title: "Bs Computer Engineer",
      year: 2013
    },
    {
      title: "Msc. Computer Science",
      year: 2019
    }
  ]
}

console.log(o3.address)

