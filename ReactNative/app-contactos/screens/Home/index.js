import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContactFlatList from "../../components/ContactFlatList";
import ContactService from "../../services/contacts";
import { useEffect, useState } from 'react';

export default ({ navigation }) => {

  const [contacts, setContacts] = useState([])
  // const [showForm, setShowForm] = useState(defaultShowForm)

  
  useEffect(() => {
    ContactService.getContacts()
      .then(data => {
        console.log(data)
        setContacts(data)
      })

    // ContactService.getContactsGroupByLetter()
    //   .then(data => setContacts(data))
  }, [])


  return (
    <SafeAreaView>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}> Listado de Contacto</Text>
      </View> */}
      <View>
        <Button
          title='Agregar Contacto'
          onPress={() => navigation.navigate('Add Contact')}
        />
      </View>
      <ContactFlatList contacts={contacts} navigation={navigation} />

      <StatusBar style='auto' />
    </SafeAreaView>

  )
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