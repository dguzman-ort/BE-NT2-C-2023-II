const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

const peticion = fetch(url)

console.log(peticion)


peticion.then(() => {// 1
  console.log("Se ejecuto correctamente la peticion")
})

peticion
.then(res => {// 2
  return res.json()
})
.then(data => {// 4
  console.log(data)
})



peticion.catch(() => {
  console.error("No se ejecuto la peticion")
})

peticion.finally(() => {// 3
  console.log("El finally se ejecuta no importando si la promesa se cumple o no")
})

console.log("Holaaaaa!!! Aqui sigo con mi ejecucion de codigo")


