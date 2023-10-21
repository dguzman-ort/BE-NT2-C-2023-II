import { FlatList, SectionList, Text, View, StyleSheet } from "react-native"
import { Divider } from '@rneui/themed';
import Contact from "../Contact"


export default ({ contactsByLetter }) => {

  /**
   * Output esperado:
    * 
    * [
    * 
    *  {
    *    "title": "A",
    *    "data": [{}, {}, {}]
    *  },
    *  {
    *    "title": "F",
    *    "data": [{}, {}, {}]
    *  },
    *  {
    *    "title": "R",
    *    "data": [{}, {}, {}]
    *  }
    * 
    * ]
   */
  const letters = Object.keys(contactsByLetter)
    .sort() // Ordenado alfabeticamente

  console.log(letters.sort())

  const sections = letters.map((letter) => {
    return {
      title: letter,
      data: contactsByLetter[letter]
    }
  })

  console.log(sections)


  const renderContact = (param) => {

    //console.log(param)

    const { item } = param
    return (
      <Contact contact={item} />
    )
  }

  const renderContactHeader = ({ section }) => {
    return (
      // <Text>{section.title}</Text>

      <View style={styles.horizontal}>
        <Text style={styles.horizontalText}>{section.title}</Text>
        <Divider />
      </View>
    )
  }



  return (
    <SectionList
      sections={sections}
      // keyExtractor={}
      renderItem={renderContact}
      renderSectionHeader={renderContactHeader}
    />
  )

}

const styles = StyleSheet.create({
  horizontal: {
    marginBottom: 10,
    backgroundColor: 'grey'
  },
  horizontalText: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
})