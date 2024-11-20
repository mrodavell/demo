import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../../components/Drawer';

const DashboarLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
        <Drawer 
           drawerContent={DrawerContent}    
           screenOptions={{ 
                headerShown: false
           }} 
        >
            <Drawer.Screen name='(tabs)' options={{
                drawerLabel: 'Home'
            }} /> 
        </Drawer>
    </GestureHandlerRootView>
  )
}

export default DashboarLayout