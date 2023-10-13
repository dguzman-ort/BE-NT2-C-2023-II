import { ScrollView } from "react-native"
import Contact from "../Contact"


export default ({ contacts }) => {
  return (
    <ScrollView>
      {
        contacts.map((contact, index) => {
          return <Contact key={index} contact={contact} />
        })
      }
    </ScrollView>
          
  )

}