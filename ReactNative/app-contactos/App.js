// import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Fragment, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details';
import Home from './screens/Home';
import FormContact from './screens/FormContact';




export default function App() {

  const StackNavigator = createNativeStackNavigator()
  return (
    
    <NavigationContainer>
      <StackNavigator.Navigator>
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
      </StackNavigator.Navigator>
      
      
    </NavigationContainer>
    

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
