import { View, Text } from 'react-native'
import React from 'react'

const NameTitle = ({toggle}) => {
  return (
    <View>
      <Text style={{ fontSize: 50, textTransform: toggle ? 'uppercase' : 'lowercase'}}>Jomar</Text>
      <Text style={{ fontSize: 30, color: toggle ? 'red' : 'gray', textTransform: 'uppercase'}}>Llevado</Text>
    </View>
  )
}

export default NameTitle