import { View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import { Button } from 'react-native-paper'

const Register = () => {

  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
       <Link style={{ color: 'white', fontSize: 20}} href="/">Go to index</Link>
       <Button mode='contained' onPress={() => router.back()}>Back</Button>
    </View>
  )
}

export default Register