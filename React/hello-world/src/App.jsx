import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'

function App() {

  const [name, setName] = useState("NT2")
  let nombre = "Mi nombre"

  const cambiarNombre = () => {
    console.log("aqui pido el nombre")
    const nuevoNombre = prompt("Cual es tu nombre?")
    
    // Este ejemplo es para verificar que en efecto NO se renderiza de vuelta si cambio una variable comun
    console.log(`Vamos a cambiar ${nombre} por ${nuevoNombre}`)
    nombre = nuevoNombre
    console.log(nombre)


    // Ahora... Si procedo a cambiar EL ESTADO del componente ahí SI que se renderiza!
    setName(nuevoNombre)
    

  }
  
  return (
    <>
      <div>
        <Saludo name={nombre} />
        <h1 className={'read-the-docs'}>Este es mi componente principal</h1>
        <Saludo name={name} />
        <Saludo />
        <Saludo name={name} cualquiera={''} ctrl={''} />
      </div>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </>
      
        
  )
}

export default App
