import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <PaperProvider>
        <SafeAreaProvider> 
                <Stack
                    screenOptions={{
                        headerShown: true,
                        headerTitleAlign: 'center', 
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#6650A4',
                        },
                    }}
                    initialRouteName='index'
                >
                    <Stack.Screen name="index" 
                        options={{
                            headerShown: false
                        }} 
                    />
                    <Stack.Screen name='register'
                        options={{
                            headerTitle: 'Register',
                            headerShown: true
                        }}
                    />
                    <Stack.Screen name='forgot'
                        options={{
                            headerTitle: 'Password Recovery', 
                            headerShown: true,
                            presentation: 'modal'
                        }}
                    />
                    <Stack.Screen name='dashboard'
                        options={{ 
                            headerShown: false
                        }}
                    /> 
                </Stack>         
        </SafeAreaProvider>
    </PaperProvider>
  )
}

export default RootLayout