import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

const RootLayout = () => {
  return (
    <PaperProvider>
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, height: '100%'}}>
                <Stack
                    initialRouteName="index"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="index" />
                    <Stack.Screen name='register'
                        options={{
                            title:'Registration',
                            headerTitleAlign: 'center',
                            headerShown: true
                        }}
                    />
                    <Stack.Screen name='recovery' />
                    <Stack.Screen name='dashboard' />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    </PaperProvider>
  )
}

export default RootLayout