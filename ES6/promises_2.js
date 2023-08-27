(async function (){

  console.log("Vamos a ejcutar este codigo en lo que empiece mi componente")

  const url = 'https://pokeapi.co/api/v2/pokemon'

  const buscarPokemon = (name) => {
    return new Promise((completado, rechazado) => {

      //busqueda de pokemon... 
      fetch(`${url}/${name}`)
      .then(res => {
        if (res.ok){
          return completado(res.json())
        }else{
          throw new Error('No se encuentra nada')
        }
      })
      .catch(error => {
        return rechazado(error.message)
      })

    })
  }



  /**
  const pokemon = buscarPokemon('pikachu')

  console.log(pokemon)

  pokemon.then(data => console.log(data))

  pokemon.catch(error => console.error(error))
  */

  try{
    const pokemon = await buscarPokemon('poiuytrfcgvhbjnkjnhg')
    console.log(pokemon)
  }catch(error){
    console.error(error)
  }
  



})()