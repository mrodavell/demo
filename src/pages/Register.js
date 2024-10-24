import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Checkbox, Text } from 'react-native-paper';
import MyButton from '../components/MyButton';

const Register = () => {
   

  return (
    <SafeAreaView style={regStyle.container}>
        <View style={{...regStyle.section, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/logo.png')} style={regStyle.logo} />
        </View>
        <View style={{...regStyle.section}}>
            <TextInput
                label={'Full name'}
                placeholder='Full name'
                style={regStyle.textInput}
            />
           <TextInput
                label={'Email'}
                placeholder='Email'
                style={regStyle.textInput}
           />
           <TextInput
                label={'Password'}
                placeholder='Password'
                style={regStyle.textInput}
                secureTextEntry 
           />
        </View>
        <View style={{...regStyle.section, flex: 2}}>
            <View style={{ margin: 5}}>
                <MyButton text='Register' action={() => console.log("register")} mode='contained' size='small' />
            </View>
            <View style={{ margin: 5}}>
                <MyButton text='Login' action={() => console.log("login")} mode='contained' size='small' />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Register


const regStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    section: {
        flex:1,
        width: '100%',
        padding: 20,
    },
    logo:{
        width: 200,
        height: 200,
    },
    textInput:{
        margin: 10,
    }
})