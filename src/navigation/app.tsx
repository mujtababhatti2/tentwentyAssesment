import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { List } from '../screens/app'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();

const AppScreens = () => {
  return (
    <AppStack.Navigator initialRouteName="List" screenOptions={{ headerShown: false }} >
      <AppStack.Screen name="List" component={List} />
    </AppStack.Navigator>
  )
}

export default AppScreens

