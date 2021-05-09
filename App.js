import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import { useFonts, Anton_400Regular } from '@expo-google-fonts/anton'

import Routes from './src/router'

export default function App() {

	let [fontsLoaded] = useFonts({
		Anton_400Regular,
	})

	if(!fontsLoaded){
		return ( 
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator size="large" color="#000" />
			</View>
		)	
	}
	

	return (	
		<>
			<StatusBar style="light" backgroundColor="#000" translucent={true} />
			<Routes />
		</>		
	)
}
