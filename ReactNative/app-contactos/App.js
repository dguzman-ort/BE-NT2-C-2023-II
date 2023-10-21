import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ContactService from "./services/contacts";
import { Fragment, useEffect, useState } from 'react';
import Contact from './components/Contact';
import ContactScrollView from './components/ContactScrollView';
import ContactFlatList from './components/ContactFlatList';
import ContactSectionList from './components/ContactSectionList';
import FormContact from './components/FormContact';
import GlobalContext, { defaultShowForm } from './services/GlobalContext';


export default function App() {

  const [contacts, setContacts] = useState([])
  const [showForm, setShowForm] = useState(defaultShowForm)

  useEffect(() => {
    console.log("Aqui lo levanto la primera vez...")
    ContactService.getContacts()
      .then(data => setContacts(data))

    // ContactService.getContactsGroupByLetter()
    //   .then(data => setContacts(data))
  }, [])


  console.log(showForm)
  return (
    <GlobalContext.Provider value={{ setShowForm }} >
      <SafeAreaView>
        {
          showForm ?
            <FormContact />
            :
            <>
              <View style={styles.titleContainer}>
                <Text style={styles.title}> Listado de Contacto</Text>
              </View>
              <View>
                <Button
                  title='Agregar Contacto'
                  onPress={() => setShowForm(true)}
                />
              </View>
              <View>

                {/* Ejemplo con ScrollView */}
                {/* <ContactScrollView contacts={contacts} /> */}

                {/* Ejemplo performante con FlatList */}
                <ContactFlatList contacts={contacts} />

                {/* Ejemplo con Section List (ojo que cambia el formato de la data necesitada) */}
                {/* <ContactSectionList contactsByLetter={contacts} /> */}
                <StatusBar style="auto" />
              </View>
            </>

        }

      </SafeAreaView>
    </GlobalContext.Provider>

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
