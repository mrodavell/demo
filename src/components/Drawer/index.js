import { View, Image } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'  

export default function DrawerContent(props) {
 
    const router = useRouter();
    const year = new Date().getFullYear();

    const handleLogout = async () => {
        router.replace("/");
    }

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20 + top,
                        paddingBottom: 20
                    }}
                > 
                    <Image source={require('../../assets/avatar.png')} style={{ alignSelf: 'center', height: 150, width: 150 }} />
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Logout"
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name='logout' color={color} size={size} />
                    )}
                    labelStyle={{ marginLeft: 10 }}
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20 + bottom
                }}
            >
                <Text>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View> 
        </View>
    )
}