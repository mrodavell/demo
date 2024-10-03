import { View, Image } from 'react-native'
import Profile from '../../pages/Profile'

const Avatar = ({width = 250, height = 250, toggle}) => {
  return (
    <View>
      <Image 
        source={require('../../assets/avatar.webp')}
        style={{ width: toggle ? width - 100 : width, height: toggle ? height - 100: height }}
      />
    </View>
  )
}

export default Avatar