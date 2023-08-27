if (true){
  var ambito = "Esta variable esta disponible en el codigo y/o funcion hasta que se ejecute completamente"

  console.log(ambito)
}

console.log(ambito, typeof ambito)


if (true){
  let blockscoped = "Esta variable solo estara disponible dentro de este bloque de codigo"

  console.log(blockscoped)

  const anotherBlockScoped = "Esta es una constante y tambien solo estara disponible dentro de este bloque de control"
}

console.log(typeof blockscoped)

console.log(typeof anotherBlockScoped)