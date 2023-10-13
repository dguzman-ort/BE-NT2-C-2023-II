import { Card } from '@rneui/themed';
import { View, Image, Text } from 'react-native';

export default ({ contact }) => {
  return (
    <View>
      <Card containerStyle={{}} wrapperStyle={{}}>
        <Card.Title>{contact.fullName}</Card.Title>
        <Card.Divider />
        <View
          style={{
            position: "relative",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: "100%", height: 100 }}
            resizeMode="contain"
            source={{
              uri:
                "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
            }}
          />
          <Text>Telefono: { contact.phone }</Text>
          <Text>Edad: { contact.age }</Text>
        </View>
      </Card>
    </View>
  )
}

