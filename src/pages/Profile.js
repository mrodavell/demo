import { View } from 'react-native'
import { useState } from 'react'

const Profile = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <View style={{ }}>
       
    </View>
  )
}

export default Profile

