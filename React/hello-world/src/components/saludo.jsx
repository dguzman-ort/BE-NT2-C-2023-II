function Saludo({ name }) {
  const nombre = "NT2"
  return (
    
      <div>
        {
          name ? 
          <p>Hola {name}, es un placer saludarte!</p>
          :
          <p>Hola incognito!!!</p>
        }
      </div>
        
  )
}

export default Saludo
