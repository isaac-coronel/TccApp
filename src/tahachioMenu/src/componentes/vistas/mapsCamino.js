import * as React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
// import Geolocation from "@react-native-community/geolocation";

export default function mapsCamino() {
  const origin = { latitude: -25.302016, longitude: -57.543559 }
  /* navigator.geolocation = require("@react-native-community/geolocation");
  navigator.geolocation.getCurrentPosition((location) => {
    origin.longitude = location.coords.longitude; // longitud
    origin.latitude = location.coords.latitude; // latitude
  }); */
  /* Geolocalización.getCurrentPosition((información) =>
    consola.log(información)
  ); */
  console.log('ubicacion ', origin)
  const destination = {
    latitude: -25.30213145483248,
    longitude: -57.540022137121184,
    // latitude: lat,
    // longitude: long,
  }
  // -25.30213145483248, -57.540022137121184
  const GOOGLE_MAPS_APIKEY = '...' // api key de google
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -25.302016,
          longitude: -57.543559,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.map}
      >
        <MapView.Marker
          coordinate={{ latitude: -25.302016, longitude: -57.543559 }}
        />
        <MapView.Marker
          coordinate={{
            latitude: -25.30213145483248,
            longitude: -57.540022137121184,
          }}
        />
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeWidth={3}
          strokeColor="hotpink"
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
