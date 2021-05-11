import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'


import Home from './pages/Home'
import Detail from './pages/Detail'

const Stack = createStackNavigator() 

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
               
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                 <Stack.Screen 
                    name="Detail"
                    component={Detail}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight: 15}}>
                                <Ionicons 
                                    name="cart-outline"
                                    size={28}
                                    color="#000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                /> 

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes