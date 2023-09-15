import { useContext } from "react"
import GlobalContext from "../globals/context";


export default () => {

  const { iniciado, setIniciado} = useContext(GlobalContext)
  
  
  return (
    <button onClick={() => setIniciado(!iniciado)}>
      {iniciado ? 'Detener' : 'Iniciar'}
    </button>
  )
}