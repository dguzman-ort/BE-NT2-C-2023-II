// import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Fragment, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import Home from './screens/Home';
import FormContact from './screens/FormContact';
import Login from './screens/Login';
import AuthContext, { authData as AuthDefault } from './services/AuthContext';
import AsyncStorage from './services/AsyncStorage';




export default function App() {

  const [authData, setAuthData] = useState(AuthDefault)


  useEffect(() => {
    AsyncStorage.getData('AuthData')
      .then(data => {
        console.log("Data de cache", data)
        if (data) {
          setAuthData(data)
        }
      })
  }, [])


  useEffect(() => {
    setTimeout(() => {
      if (authData.access_token) {
        // Estoy autenticado
        AsyncStorage.storeData('AuthData', authData)
      } else {
        AsyncStorage.clearAll()
      }
    });


  }, [authData])


  const StackNavigator = createNativeStackNavigator()
  return (

    <AuthContext.Provider value={{ authData, setAuthData }}>
      <NavigationContainer>
        <StackNavigator.Navigator>
          {
            authData.access_token ?
              <>
                <StackNavigator.Screen name='Home' component={Home} options={
                  {
                    title: 'Contactos',
                    headerShown: false
                  }
                } />
                <StackNavigator.Screen name='Details' component={Details} />
                <StackNavigator.Screen name='Add Contact' component={FormContact} options={
                  {
                    headerBackVisible: false
                  }
                } />
              </>
              :
              <StackNavigator.Screen name='Login' component={Login} />
          }


        </StackNavigator.Navigator>


      </NavigationContainer>
    </AuthContext.Provider>



  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30
  }
});
