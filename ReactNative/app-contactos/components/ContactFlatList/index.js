import { FlatList } from "react-native"
import Contact from "../Contact"


export default ({ contacts }) => {

  const renderContact = (param) => {

    //console.log(param)

    const { item } = param
    return (
      <Contact contact={item} />
    )
  }

  return (
    <FlatList
      data={contacts}
      renderItem={renderContact}
     />
          
  )

}