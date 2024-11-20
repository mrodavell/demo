import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Settings = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
      <Link href="/">Logout</Link>
    </View>
  )
}

export default Settings