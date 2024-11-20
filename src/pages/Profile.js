import { View, StyleSheet, Text } from 'react-native'  
import styles from '../styles/styles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Avatar, Button } from 'react-native-paper';

const Profile = () => { 

  return (
    <View 
        style={{      
            flexGrow: 1, 
            height: '100%',
            padding: 10
        }}
    >        
        <View style={{ flex: 1}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 20, marginHorizontal: 20}}>
                <View style={{ justifyContent: 'flex-start', flex: 1}}>
                    <MaterialCommunityIcons name="arrow-left" size={20} color="black" />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1}}>  
                    <MaterialCommunityIcons name="account" size={20} color="black" style={{ marginRight: 5 }} />              
                    <Text style={{ fontSize: 20}}>Profile</Text>
                </View> 
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}> 
                    <MaterialCommunityIcons name="bell" size={20} color="black" />
                    <View style={{ marginTop: -10, marginLeft: 10, backgroundColor: 'red', padding: 3, borderRadius: 100, width: 10, height: 10}}>
                        <Text>1</Text>
                    </View>
                </View>
            </View>          
            <View style={{ alignItems:'center', marginTop: 50 }}>
                <Avatar.Image size={120} source={require('../../assets/avatar.png')} style={{ backgroundColor: "#E479B9"}} /> 
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 10}}>John Doe</Text>
                    <MaterialCommunityIcons name="check-circle" size={20} color="green" style={{ marginTop: 15, marginLeft: 10}} />
                </View>       
                <Text style={{ fontSize: 20, marginTop: 10}}>React Native Developer</Text>
                <Button mode='outlined'>
                    <Text>Follow</Text>
                    <MaterialCommunityIcons name="plus" size={15} style={{ marginLeft: 20 }} />
                </Button>
            </View> 
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 30}}>
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25}}>30</Text>
                    <Text  style={{ fontSize: 20, marginTop: 5}}>Apps</Text>
                    <Text  style={{ fontSize: 15, marginTop: 5, color: 'gray'}}>Deployed</Text>
                </View>
                <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25}}>20</Text>
                    <Text  style={{ fontSize: 20, marginTop: 5}}>Clients</Text>
                    <Text  style={{ fontSize: 15, marginTop: 5, color: 'gray'}}>Approved</Text>
                </View>
                <View style={{  flex: 1, alignItems: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25}}>10</Text>
                    <Text  style={{ fontSize: 20, marginTop: 5}}>Experience</Text>
                    <Text  style={{ fontSize: 15, marginTop: 5, color: 'gray'}}>Years</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 40, marginHorizontal: 20, borderTopWidth: 0.5, borderTopColor: 'gray', paddingTop: 10}}>                
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around'}}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 10, height: 80, width: 80, borderRadius: 100,backgroundColor: '#6650A4'}}>             
                            <MaterialCommunityIcons name="account-edit" size={20} color="white" />
                            <Text style={{ color: 'white', marginLeft: 10}}>Profile</Text>                    
                    </View>    
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 10, height: 80, width: 80, borderRadius: 100,backgroundColor: '#6650A4'}}>             
                            <MaterialCommunityIcons name="image" size={20} color="white" />
                            <Text style={{ color: 'white', marginLeft: 10}}>Photos</Text>                    
                    </View>  
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 10, height: 80, width: 80, borderRadius: 100,backgroundColor: '#6650A4'}}>             
                            <MaterialCommunityIcons name="account-cog" size={20} color="white" />
                            <Text style={{ color: 'white', marginLeft: 10}}>Settings</Text>                    
                    </View>  
                </View>                       
            </View>
            <View style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10}}>Profile Completion</Text>               
            </View>
            <View style={{ 
                flexDirection: 'row',
                alignItems:'center', 
                justifyContent:'flex-start', 
                marginHorizontal: 20, 
                marginTop: 20, 
                borderRadius: 10, 
                borderWidth: 0.5,  
                backgrounColor: 'gray'
            }}>
                <View style={{ height: 15, width: '70%', backgroundColor: 'green', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginLeft: 3}}></View>
                <Text style={{ marginLeft: 10}}>70%</Text>
            </View>
            <View style={{ alignItems:'center', marginTop: 50 }}>
                <Text style={{ fontSize: 15, color: 'gray'}}>BossJob Version 1.0.0</Text>
            </View>
        </View> 
    </View>
  )
}

export default Profile

const profileStyles = StyleSheet.create(styles)