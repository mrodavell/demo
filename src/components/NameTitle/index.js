import { View, Text } from 'react-native'
import React from 'react'
import Typography from '../common/Typography'

const NameTitle = (props) => {
  return (
    <View>
      <Typography text={"Jomar"} color="black" size={60} />
      <Text style={{ fontSize: 40, color: 'gray'}}>Llevado</Text>
    </View>
  )
}

export default NameTitle