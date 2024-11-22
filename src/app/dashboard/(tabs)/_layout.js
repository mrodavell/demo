import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DashboardLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{
                backgroundColor: 'white',
                borderTopColor: 'lightgray',
                borderTopWidth: 1,
                borderRadius: 10,
                margin: 10
            }
        }}
    >
        <Tabs.Screen name="home"
            options={{
                title: 'Home',
                tabBarIcon:({focused}) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={20} color={focused ? 'blue': 'gray'} />
            }}
        />
        <Tabs.Screen name="profile"
            options={{
                title: 'Profile',
                tabBarIcon:({focused}) => <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={20} color={focused ? 'blue': 'gray'} />
            }}
        />
        <Tabs.Screen name="notifications"
            options={{
                title: 'Notifications',
                tabBarIcon:({focused}) => <MaterialCommunityIcons name={focused ? 'bell' : 'bell-outline'} size={20} color={focused ? 'blue': 'gray'} />
            }}
        />
    </Tabs>
  )
}

export default DashboardLayout