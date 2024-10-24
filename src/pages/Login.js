import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Checkbox, Text } from 'react-native-paper';
import MyButton from '../components/MyButton';

const Login = () => {
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [checked, setChecked] = React.useState(false);
    const [isShowPassword, setIsShowPassword] = React.useState(false);

  return (
    <SafeAreaView style={loginStyle.container}>
        <View style={{...loginStyle.section, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/logo.png')} style={loginStyle.logo} />
        </View>
        <View style={{...loginStyle.section}}>
           <TextInput
                value={email}
                onChangeText={text => setEmail(text)}
                label={'Email'}
                placeholder='Email'
                style={loginStyle.textInput}
           />
           <TextInput
                value={password}
                onChangeText={text => setPassword(text)}
                label={'Password'}
                placeholder='Password'
                style={loginStyle.textInput}
                secureTextEntry={!isShowPassword}
                right={<TextInput.Icon onPress={() => setIsShowPassword(!isShowPassword)} icon={isShowPassword ? "eye": "eye-off"} />}
           />
        </View>
        <View style={{...loginStyle.section, flex: 0, flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
            <Text variant='bodyLarge'>Remember Me</Text>
        </View>
        <View style={{...loginStyle.section, flex: 2}}>
            <View style={{ margin: 5}}>
                <MyButton text='Login' action={() => console.log("login")} mode='contained' size='small' />
            </View>
            <View style={{ margin: 5}}>
                <MyButton text='Register' action={() => console.log("register")} mode='contained' size='small' />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login


const loginStyle = StyleSheet.create({
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