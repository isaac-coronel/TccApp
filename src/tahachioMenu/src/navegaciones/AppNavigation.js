import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../componentes/vistas/home'
import BusquedaAvanzada from '../componentes/vistas/busquedasAvanzadas'
import EjemploCards from '../componentes/vistas/exampleCards'
import buscar from '../componentes/vistas/busquedasExample'
import Historicos from '../componentes/vistas/listaHistoricos'
import Antecedentes from '../componentes/vistas/controlAntecedentes'
import mapsCamino from '../componentes/vistas/mapsCamino'
import DrawerContainer from '../componentes/DrawerContainer/DrawerContainer'

const Stack = createNativeStackNavigator()

function Principal() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
function BusquedaConMenu() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Busqueda Avanzada" component={BusquedaAvanzada} />
    </Stack.Navigator>
  )
}
function listHistoricos() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Historicos" component={Historicos} />
    </Stack.Navigator>
  )
}
function consultarAntecedente() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="ConsultarAntecedentes" component={Antecedentes} />
    </Stack.Navigator>
  )
}
function Busqueda() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Categories" component={buscar} />
    </Stack.Navigator>
  )
}
function comoLlegar() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Como llegar" component={mapsCamino} />
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator()

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerStyle={{
        width: 250,
      }}
    >
      <Drawer.Screen name="Inicio" component={Principal} />
      <Drawer.Screen name="Leyes de transito." component={Busqueda} />
      <Drawer.Screen name="Consultas Generales" component={BusquedaConMenu} />
      <Drawer.Screen
        name="Consulta Antecedentes"
        component={consultarAntecedente}
      />
      <Drawer.Screen name="Historicos" component={listHistoricos} />

      <Drawer.Screen name="Como llegar?" component={comoLlegar} />
    </Drawer.Navigator>
  )
}

export default function AppContainer() {
  return (
    <NavigationContainer independent>
      <DrawerStack />
    </NavigationContainer>
  )
}
