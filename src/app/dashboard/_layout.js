import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={DrawerContent}>
            <Drawer.Screen name="(tabs)"
                options={{
                    title: 'Dashboard', 
                    drawerIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'view-dashboard' : 'view-dashboard-outline'} size={20} color={focused ? 'blue': 'gray'} />                   
                }}
            />
             <Drawer.Screen name="settings"
                options={{
                    title: 'Settings', 
                    drawerIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline'} size={20} color={focused ? 'blue': 'gray'} />                   
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerLayout