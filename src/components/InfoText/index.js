import { View, Text } from 'react-native'

export default function InfoText(props) {
  return (
    <View>
      <Text style={{ fontSize: 30, color: 'black'}}>Joined</Text>
      <Text style={{ fontSize: 20, color: 'gray'}}>1 year ago</Text>
    </View>
  )
}