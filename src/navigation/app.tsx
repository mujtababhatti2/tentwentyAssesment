import React from 'react'
import { List, MovieDetail } from '../screens/app'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();

const AppScreens = () => {
  return (
    <AppStack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }} >
      <AppStack.Screen name="List" component={List} />
      <AppStack.Screen name="MovieDetail" component={MovieDetail} />
    </AppStack.Navigator>
  )
}

export default AppScreens

