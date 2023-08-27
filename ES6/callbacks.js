
function obtenerUsuarioById(id, callback){

  // Esto simula que hago una llamada a la BD
  console.log("Aqui procedo a buscar el user segun el ID ", id)
  setTimeout(() => {

    //obtengo esta data
    const userData = {
      firstName: 'Carlos',
      lastName: 'Gonzalez',
      age: 15
    }

    return callback(userData)


  }, 2000)

}



/**
 * Saludausuario 
 * 
 * arg {} Usuario 
 * 
 * 
 * ejemplo:
 * {
 *    firstName,
 *    lastName,
 *    age
 * }
 */
function saludarUsuario(user){
  console.log(`Hola ${user.firstName} ${user.lastName}`)
}

obtenerUsuarioById('10', saludarUsuario)


obtenerUsuarioById(10, console.warn)

const validoMayorEdad = (user) => {
  if (user.age >= 18){
    console.log(`Bienvenido al casino ${user.firstName}`)
  }else{
    console.error("ERROR: no podes entrar al casino")
  }
}

obtenerUsuarioById('', validoMayorEdad)