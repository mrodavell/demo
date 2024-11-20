import { View, StyleSheet } from "react-native"
import { Avatar, Text, TextInput, Button } from "react-native-paper";
import styles from '../styles/styles'; 
import { useState } from "react";  
import { useRouter } from "expo-router";

const Register = () => {

  const router = useRouter();
  const [togglePassword, setTogglePassword] = useState(false);
  
  return (
     <View style={registrationStyle.container}> 
        <View style={{...registrationStyle.section, marginTop: 20}}>
            <TextInput 
                textContentType="name"
                label="First Name"
                mode="outlined"
                placeholder="First Name"
                style={registrationStyle.input}
                left={<TextInput.Icon icon="account" size={18} />}
            />
             <TextInput 
                textContentType="name"
                label="Last Name"
                mode="outlined"
                placeholder="First Name"
                style={registrationStyle.input}
                left={<TextInput.Icon icon="account" size={18} />}
            />
            <TextInput 
                textContentType="emailAddress"
                label="Email"
                mode="outlined"
                placeholder="Email"
                style={registrationStyle.input}
                left={<TextInput.Icon icon="email" size={18} />}
            />
              <TextInput 
                label="Password"
                mode="outlined"
                placeholder="Password"
                style={registrationStyle.input}
                left={<TextInput.Icon icon="key" size={18} />}
                right={
                    <TextInput.Icon 
                        onPress={() => setTogglePassword(!togglePassword)}
                        icon={togglePassword ? "eye" : "eye-off"}
                        size={18} 
                    />
                }
                secureTextEntry={!togglePassword}
            />
        </View>
        <View style={{...registrationStyle.section, marginTop: 20}}>
            <Button onPress={() => console.log("login")} mode="contained" style={registrationStyle.button}>
                Register
            </Button>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
                <Text>Do you have an account?</Text>
            </View>  
            <Button onPress={() => router.push('/')} mode="contained-tonal" style={registrationStyle.button}>
               Login Here
            </Button>            
        </View>
    </View>       
  )
}

export default Register

const registrationStyle = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
        justifyContent: 'start',
        alignItems: 'center', 
        marginHorizontal: 20
    },
    section:{  
        width: '100%',
    },
    input: {
        margin: 5
    }
})