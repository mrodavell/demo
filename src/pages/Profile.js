import { View, Button, StyleSheet, Text } from 'react-native'
import Avatar from '../components/Avatar'
import NameTitle from '../components/NameTitle'
import InfoText from '../components/InfoText'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import styles from '../styles/styles.js';

const Profile = () => {
    console.log(styles);
  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
  }

  return (
    <View 
        style={{ 
            backgroundColor: '#dde', 
            flexGrow: 1, 
            height: '100%',
             padding: 10
        }}
    >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 20, marginBottom: 10}}>
            <Avatar width={40} height={40} />
            <FontAwesome name="bell" size={24} color="black" style={{ marginRight: 20}} />
        </View>
        <View style={{ flexDirection:'row', height: 200, justifyContent: 'space-between' }}>
            <View>
                <Avatar toggle={toggle} width={200} height={200} />
                <NameTitle />
            </View>
            <View style={{ marginTop: 20, marginRight: 50}}>
                <InfoText />
            </View>
        </View>
        <View style={{ marginTop: 20}}>
            <Button title="Toggle" onPress={handleChange} />
        </View>
        <View styles={profileStyles.bgRed}>
        <Text>Sample</Text>
        </View>
    </View>
  )
}

export default Profile

const profileStyles = StyleSheet.create(styles)