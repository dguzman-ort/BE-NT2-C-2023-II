import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContactFlatList from "../../components/ContactFlatList";
import ContactService from "../../services/contacts";
import { useCallback, useContext, useEffect, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AuthContext, { authData } from '../../services/AuthContext';

export default ({ navigation }) => {

  const [contacts, setContacts] = useState([])
  const { setAuthData } = useContext(AuthContext)


  // const [showForm, setShowForm] = useState(defaultShowForm)

  
  // useEffect(() => {
  //   // ContactService.getContacts()
  //   //   .then(data => {
  //   //     console.log(data)
  //   //     setContacts(data)
  //   //   })
  //   // ContactService.getContactsGroupByLetter()
  //   //   .then(data => setContacts(data))
  // }, [])

  useFocusEffect(
    useCallback(() => {
      console.log("Estoy dentro del componente")
      ContactService.getContacts()
      .then(data => {
        setContacts(data)
      })
    }, [])
  );


    const logout = () => {
      console.log("Me tengo que desloguear")
      setAuthData({})
    }


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
        <Button
          title='Logout'
          onPress={logout}
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