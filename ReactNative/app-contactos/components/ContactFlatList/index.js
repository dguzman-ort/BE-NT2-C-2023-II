import { FlatList, TouchableOpacity } from "react-native"
import Contact from "../Contact"


export default ({ contacts, navigation }) => {

  const renderContact = (param) => {

    //console.log(param)

    const { item } = param
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", {id: item.id})}
        // onLongPress={() => console.log("hago click intenso")}
      >
        <Contact contact={item} />
      </TouchableOpacity>
      
    )
  }

  return (
    <FlatList
      data={contacts}
      renderItem={renderContact}
     />
          
  )

}