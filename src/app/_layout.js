import React, { useEffect } from 'react'
import { Alert, AppState } from 'react-native'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { supabase } from '../lib/supabase'
import { useRouter } from 'expo-router';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

const RootLayout = () => {

  const router = useRouter();

  const checkSession = async () => {
    try{
      const {data, error} = await supabase.auth.getUser();
       
      if(data && !error){
        router.replace('dashboard')
      }else{
        throw error;
      }

    }catch(error){
      Alert.alert('Error', error.message, [{text: 'OK'}]);
    }
  }


  useEffect(() => {
    checkSession();
  },[])

  return (
    <PaperProvider>
        <SafeAreaProvider>
          <Stack
            screenOptions={{        
              animation: 'none',
            }}
          >
            <Stack.Screen name="index" options={{
              headerShown: false
            }} />
            <Stack.Screen name="register" options={{ title: 'Registration'}} />
            <Stack.Screen name="recover" options={{ title: 'Forgot Password?'}} />
            <Stack.Screen name="dashboard" 
              options={{ 
                title: 'Dashboard', 
                headerShown: false
              }} 
            />
          </Stack>
        </SafeAreaProvider>       
    </PaperProvider>
   
  )
}

export default RootLayout