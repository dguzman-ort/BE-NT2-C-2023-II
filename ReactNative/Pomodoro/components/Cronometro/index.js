import { Text, View } from "react-native"
import CronometroStyle from "./styles"
import defaultTime from "./constants";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../globals/GlobalContext";

import { vibrate } from "../../utils";

const minToSec = min => min * 60
const paddZero = value => value < 10 ? `0${value}`: value
let idInterval


export default () => {
  
  const { isRunning, isWorking, setIsWorking } = useContext(GlobalContext)

  const { DEFAULT_BREAK_MINS, DEFAULT_WORK_MINS} = defaultTime

  const [remainingTime, setRemainingTime] = useState(minToSec(DEFAULT_WORK_MINS))

  const mins = Math.floor(remainingTime / 60)
  const secs = Math.floor(remainingTime % 60)

  useEffect(() => {

    if (Math.floor(remainingTime) === 0){
      console.log("Aqui tengo que cambiar el estado isWorking, y hacer que el cel vibre");
      vibrate()
      setRemainingTime((isWorking) ? minToSec(DEFAULT_BREAK_MINS): minToSec(DEFAULT_WORK_MINS))

      setIsWorking(prev => !prev)

    }

  }, [remainingTime])


  useEffect(() => {
    console.log("Aqui iniciamos o pausamos nuestro cronometro");
    if (isRunning){
      // hay que detenerlo
      clearInterval(idInterval)
    }else{
      idInterval = setInterval(() => {
        setRemainingTime(prev => prev - 1)
      }, 1000);
    }
  }, [isRunning])

  return (
    <View>
      <Text style={CronometroStyle.text}>{paddZero(mins)}: {paddZero(secs)}</Text>
    </View>
  )
}