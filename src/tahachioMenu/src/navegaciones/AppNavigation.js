import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../componentes/vistas/home";
import CategoriesScreen from "../componentes/vistas/homeTahachio";
import EjemploCards from "../componentes/vistas/exampleCards";
import buscar from "../componentes/vistas/busquedasExample";
import DrawerContainer from "../componentes/DrawerContainer/DrawerContainer";

const Stack = createNativeStackNavigator();

function Principal() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function Secundario() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
}
function Cards() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Categories" component={EjemploCards} />
    </Stack.Navigator>
  );
}
function Busqueda() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          alignSelf: "center",
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Categories" component={buscar} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="Consultas Generales" component={Secundario} />
      <Drawer.Screen name="Historicos" component={Cards} />
      <Drawer.Screen name="Salir" component={Busqueda} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
