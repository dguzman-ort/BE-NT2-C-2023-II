import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Button from './components/Button'
import GlobalContext, { defaultValue } from "./components/globals/context";

function App() {

  const [iniciado, setIniciado] = useState(defaultValue)

  // const [nombre, setNombre] = useState("Daniel")


  // useEffect(() => {
  //   // Aqui puedo mandar a buscar por ejemplo algo a una API de terceros (Backend)
  //   console.log("MOUNT: Este callback se invoca al momento de `MONTAR` mi componente")

  //   return () => {
  //     // Aqui puedo por ejemplo desuscribirme de una conexión websocket o aplicar un clearInterval
  //     console.log("UNMOUNT: Este callback se invoca al momento de `DESMONTAR` mi componente")
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log("UPDATE: Aqui detecto el cambio del contador: ", count)
  // }, [count])

  // useEffect(() => {
  //   console.log("UPDATE: Aqui detecto el cambio del nombre: ", nombre)
  // }, [nombre])

  // useEffect(() => {
  //   console.log("UPDATE: Aqui detecto el cambio del nombre o el contador: ", nombre, count)
  // }, [count, nombre])



  return (
    <GlobalContext.Provider  value={{ iniciado, setIniciado }}>
      <Counter />
      <div className="card">
        {/* <button onClick={() => setIniciado(!iniciado)}>
          {iniciado ? 'Detener' : 'Iniciar'}
        </button> */}
        <Button />
        {/* <button onClick={() => setCount(0)}>
          Reset
        </button> */}
      </div>
      <p className="read-the-docs">

      </p>
    </GlobalContext.Provider>
  )
}

export default App
