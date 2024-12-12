import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';
import { userStore } from '../zustand/user';

const Login = () => {

    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(''); 
    const [isShowPassword, setIsShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { setUser } = userStore();

    const login = async () => {
        try{ 
            setLoading(true);

            if(!email){
                throw new Error('Email is required');
            }

            if(!password){
                throw new Error('Password is required');
            }
            
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });
 
          

            if(!error){

                const userData = {
                    userid: data.user.id,
                    name: data.user.user_metadata.display_name,
                    email: data.user.email,
                }    
                
                setUser(userData);

                router.replace('dashboard');
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
    <SafeAreaView style={loginStyle.container}>
        <View style={{...loginStyle.section, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../assets/logo.png')} style={loginStyle.logo} />
            <Text variant='displayMedium' style={{ marginVertical: 5}}>BossJob</Text>
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
        <View style={{...loginStyle.section}}>
            <View style={{ margin: 5 }}>
                <Button loading={loading} disabled={loading} onPress={() => login()} mode='contained'>Login</Button>
            </View>
            <View style={{ margin: 5 }}>
                <Button loading={loading} disabled={loading} onPress={() => router.push('register')} mode='contained'>Register</Button>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'center', alignItems:'center', width: '100%'}}>
                <Button onPress={() => router.push('recover')} mode='text' style={{ width: '100%'}}>
                    Forgot Password?
                </Button>
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