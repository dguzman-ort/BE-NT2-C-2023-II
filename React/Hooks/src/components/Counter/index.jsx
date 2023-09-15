import { useContext, useState, useEffect } from "react"
import GlobalContext from "../globals/context";

let idInterval

export default () => {
  const [count, setCount] = useState(0)

  const { iniciado } = useContext(GlobalContext)

  useEffect(() => {
    console.log("Cambio mi estado de iniciado", iniciado)
    if(iniciado){
      idInterval = setInterval(() => {
        
        setCount((prev) => {
          console.log("Actualizo count", prev)
          return prev + 1
        })
      }, 1000);
      console.log("idInterval", idInterval)
    }else{
      console.log("idInterval", idInterval)
      clearInterval(idInterval)
    }
  }, [iniciado])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}