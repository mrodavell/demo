import React from 'react' 
import { View } from 'react-native'
import { Tabs } from 'expo-router' 
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false, 
            tabBarStyle: {
                backgroundColor: '#6650A4',
                margin: 5,
                padding: 5,
                minHeight: 50,
                borderRadius: 10,
                paddingBottom: 5,
            },
            tabBarLabelStyle: {
                fontSize: 14,
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff'
        }}
        initialRouteName='home'
     > 
        <Tabs.Screen name='index'
            options={{
                title: 'Home',
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => <View>
                    <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color="#FFF" size={20} />
                </View>
            }}
        /> 
         <Tabs.Screen name='profile'
            options={{
                title: 'Profile',
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused }) => <View>
                    <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} color="#FFF" size={20} />
                </View>
            }}
        /> 
         <Tabs.Screen name='settings'
            options={{
                title: 'Settings',
                tabBarLabel: 'Settings',
                tabBarIcon: ({ focused }) => <View>
                    <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline'} color="#FFF" size={20} />
                </View>
            }}
        /> 
     </Tabs>    
  )
}

export default TabsLayout