import { View, Text } from 'react-native'
import React from 'react'

const Typography = (props) => {
  return (
    <View>
      <Text 
        style={{...props.style, color: props.color, fontSize: props.size}}>
            {props.text}
       </Text>
    </View>
  )
}

export default Typography