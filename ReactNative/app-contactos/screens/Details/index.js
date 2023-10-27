import { View, Text } from "react-native"
import Contact from "../../components/Contact"
import { useEffect, useState } from "react"
import ContactService from "../../services/contacts";

export default ({ navigation, route }) => {
  console.log(route)

  const { id } = route.params
  const [contact, setContact] = useState({})

  useEffect(() => {
    ContactService.getContact(id)
    .then(data => setContact(data))
  }, [])


  return (
    <View>
      <Contact contact={contact} />
    </View>
  )
}