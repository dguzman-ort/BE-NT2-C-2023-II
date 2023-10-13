import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContactService from "./services/contacts";
import { useEffect, useState } from 'react';
import Contact from './components/Contact';
import ContactScrollView from './components/ContactScrollView';


export default function App() {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log("Aqui lo levanto la primera vez...")
    ContactService.getContacts()
    .then( data => setContacts(data))
  }, [])
  
  

  return (
    <SafeAreaView>      
      <View>

        <ContactScrollView contacts={contacts} />

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
