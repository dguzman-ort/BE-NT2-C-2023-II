

import { useContext, useState } from "react"
import { Button, SafeAreaView, Text, View } from "react-native"
import { Input } from '@rneui/themed';
import GlobalContext from '../../services/GlobalContext';

import ContactService from "../../services/contacts";

export default FormContact = ({ navigation }) => {

  const [contact, setContact] = useState({})
  const [formError, setFormError] = useState({})

  const saveContact = () => {
    if (!contact.fullName){
      setFormError({...formError, fullName: true})      
      return
    }

    //let regex = /[2-9]{1}\d{2}\./i; // pending... 
    if (!contact.age){
      setFormError({...formError, age: true})      
      return
    }
    if (!contact.phone){
      setFormError({...formError, phone: true})      
      return
    }

    ContactService.saveContact(contact)
    .then(res => {
      if (res){
        //setShowForm(false)
        navigation.navigate('Home')
        // navigation.goBack()
      }
    })

    

    //Aqui tenemos que volver al listado original
  }

  return (
    <SafeAreaView>
      {/* <View style={{alignItems: 'center', marginBottom: 25}}>
        <Text style={{ fontSize: 25 }}>Formulario de Contacto</Text>
      </View> */}
      <View>
        {/* <Text>Nombre Completo</Text> */}
        <Input
          value={contact.fullName}
          onChangeText={(text) => {
            setContact({...contact, fullName: text})
            setFormError({...formError, fullName: false})
          }}
          errorMessage={formError.fullName ? 'Por favor, ingrese nombre valido' : ''}
          placeholder={'Nombre Completo'}
         />

        <Input
          value={contact.age}
          onChangeText={(text) => {
            setContact({...contact, age: text})
            setFormError({...formError, age: false})
          }}
          keyboardType={'phone-pad'}          
          errorMessage={formError.age ? 'Por favor, ingrese nombre valido' : ''}
          placeholder={'Telefono'}
         />
         
         <Input
          value={contact.phone}
          onChangeText={(text) => {
            setContact({...contact, phone: text})
            setFormError({...formError, phone: false})
          }}
          keyboardType={'number-pad'}          
          errorMessage={formError.phone ? 'Por favor, ingrese nombre valido' : ''}
          placeholder={'Edad'}
         />

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center'} }>
        <Button
          title="Guardar"
          onPress={saveContact}
         />
         <Button
          title="Cancelar"
          onPress={() => navigation.goBack()}
         />
      </View>
    </SafeAreaView>
  )
}