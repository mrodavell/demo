import { View, Button } from 'react-native'
import { useState } from 'react'
import Avatar from '../components/Avatar'
import NameTitle from '../components/NameTitle'
import AntDesign from '@expo/vector-icons/AntDesign';

const Profile = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <View>
       <Avatar toggle={toggle} />
       <NameTitle toggle={toggle} />
       <View style={{ width: 200, alignItem: 'center'}}>
        <Button title="Toggle" onPress={handleToggle} />
        <AntDesign name="stepforward" size={24} color="black" />
       </View>
    </View>
  )
}

export default Profile