import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper'; 
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

const Register = () => {
   
  const router = useRouter();
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isShowConfirmPassword, setIsShowConfirmPassword] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const register = async () => {
    try{
        setLoading(true);

        if(!fullname){
            throw new Error('Fullname is required');
        }

        if(!email){
            throw new Error('Email is required');
        }

        if(!password){
            throw new Error('Password is required');
        }

        if(!confirmPassword){
            throw new Error('Confirm Password is required');
        }

        if(password !== confirmPassword){
            throw new Error('Password does not match');
        }

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { display_name: fullname }
            }
        });

        if(!error){
            Alert.alert('Success', 'Account created successfully', [{text: 'OK'}]); 
            router.push('/');
        }else{
            throw error;
        }

    }catch(error){
        Alert.alert('Error', error.message, [{text: 'OK'}]);
    }finally{
        setLoading(false);
    }
  }

  return (
    <SafeAreaView style={regStyle.container}>
        <View style={{...regStyle.section, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/logo.png')} style={regStyle.logo} />
            <Text variant='titleLarge'>Boss Job</Text>
        </View>
        <View style={{...regStyle.section}}>
            <TextInput
                value={fullname}
                label={'Full name'}
                onChangeText={text => setFullname(text)}
                placeholder='Full name'
                style={regStyle.textInput}
            />
           <TextInput
                value={email}
                label={'Email'}
                onChangeText={text => setEmail(text)}
                placeholder='Email'
                style={regStyle.textInput}
           />
           <TextInput
                value={password}
                label={'Password'}
                onChangeText={text => setPassword(text)}
                placeholder='Password'
                style={regStyle.textInput}
                secureTextEntry={!isShowPassword} 
                right={<TextInput.Icon onPress={() => setIsShowPassword(!isShowPassword)} icon={isShowPassword ? "eye": "eye-off"} />}
           />
            <TextInput
                value={confirmPassword}
                label={'Confirm Password'}
                onChangeText={text => setConfirmPassword(text)}
                placeholder='ConfirmPassword'
                style={regStyle.textInput}
                secureTextEntry={!isShowConfirmPassword} 
                right={<TextInput.Icon onPress={() => setIsShowConfirmPassword(!isShowConfirmPassword)} icon={isShowConfirmPassword ? "eye": "eye-off"} />}
           />
        </View>
        <View style={{...regStyle.section, marginTop: 60}}>
            <View style={{ margin: 5}}>
                <Button loading={loading} disabled={loading} onPress={() => register()} mode='contained'>Register</Button>
            </View>
            <View style={{ margin: 5}}>
                <Button loading={loading} disabled={loading} onPress={() => router.back()} mode='contained'>Login</Button>
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
        margin: 5,
    }
})