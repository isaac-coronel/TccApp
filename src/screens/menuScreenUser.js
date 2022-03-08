import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppContainerUser from '../tahachioMenu/src/navegaciones/AppNavigationUser'
// import AppContainer from "../AppApiHooks/src/navegaciones/AppNavigation";
export default function menuScreenUser({ navigation }) {
  return <AppContainerUser />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
