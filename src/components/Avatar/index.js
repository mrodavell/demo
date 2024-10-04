import { View, Image } from 'react-native'

const Avatar = (props) => {
  return (
    <View>
       <Image
          source={require('../../assets/avatar.png')}
          style={{ 
            backgroundColor: props.toggle ? 'red' : 'white',
            borderRadius:75,
            width: props.toggle ? props.width : 100,
            height: props.toggle ? props.height  : 100
          }}
       />
    </View>
  )
}

export default Avatar