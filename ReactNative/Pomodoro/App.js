import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Cronometro from './components/Cronometro';
import { useEffect, useState } from 'react';
import GlobalContext, { defaultValue } from './components/globals/GlobalContext';

export default function App() {

  const [isRunning, setisRunning] = useState(defaultValue)
  const [isWorking, setIsWorking] = useState(true)

  const [shouldReset, setShouldReset] = useState(false)



  const reset = () => {
    setisRunning(defaultValue)
    setShouldReset(true)
  }

  useEffect(() => {
    if (isRunning){
      setShouldReset(false)
    }
  }, [isRunning])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={[styles.title, styles.center]}> Tiempo de { isWorking ? 'Trabajando' : 'Descanso' }</Text>
      
      
      <GlobalContext.Provider value={{
        isRunning,
        isWorking,
        shouldReset,
        setIsWorking
      }}>
        <Cronometro />
      </GlobalContext.Provider>
      


      <View style={styles.buttonContainer}>
        <Button
          title={ isRunning ? 'Iniciar' : 'Pausar'}
          onPress={() => setisRunning(!isRunning)}
        />
        <Button
          title='Reiniciar'
          onPress={reset}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignSelf: 'center'
  },
  title:{
    fontSize: 25
  }, 
  buttonContainer: {
    padding: 15,
    flexDirection: 'row'
  }
});
