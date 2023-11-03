import { SafeAreaView, View, Text, StyleSheet, Button, Image, TouchableOpacity } from "react-native"
import { Input } from '@rneui/themed';
import LoginService from "../../services/login";
import { useContext, useState } from "react";
import AuthContext from "../../services/AuthContext";
// import * as Google from "expo-auth-session/providers/google";

export default () => {

  // const [ request, response, propmtAsync ] = Google.useAuthRequest({
  //   iosClientId: '636561634042-ne36sa61a9gc24k30qclco0udurt6178.apps.googleusercontent.com'
  // })

  const [formData, setFormData] = useState({})

  const { setAuthData } = useContext(AuthContext)

  const Login = () => {
    //Peticion al back /POST

    LoginService.login(formData)
    .then(authData => {
      console.log({authData})
      setAuthData(authData)
    })

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Text>Nombre Completo</Text> */}
        <Input
          value={formData.email}
          onChangeText={(text) => {
            setFormData({ ...formData, email: text })
          }}
          placeholder={'Email'}
          keyboardType={'email-address'}
        />
        <Input
          value={formData.password}
          onChangeText={(text) => {
            setFormData({ ...formData, password: text })
          }}
          placeholder={'Password'}
          secureTextEntry={true}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title="Login"
          onPress={Login}
        />
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          
        >
          <Image

            source={require('../../assets/btn_google_signin_light_normal_web.png')}
          />
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center'
  }
})