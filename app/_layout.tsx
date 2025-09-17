import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

const Stack = createNativeStackNavigator();


import Index from './index.tsx'
export default function Layout() {
return(
	<Stack.Navigator initialRouteName="Home">
	<Stack.Screen name="Home" component={Index} options={{headerShown:false}}/>
	</Stack.Navigator>
      );}
