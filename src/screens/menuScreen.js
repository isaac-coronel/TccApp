import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppContainer from '../tahachioMenu/src/navegaciones/AppNavigation'
// import AppContainer from "../AppApiHooks/src/navegaciones/AppNavigation";
export default function menuScreen({ navigation }) {
  return <AppContainer />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
