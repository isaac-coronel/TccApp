import * as React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
// import Geolocation from "@react-native-community/geolocation";

export default function mapsCamino() {
  // const origin = { latitude: -25.302016, longitude: -57.543559 }
  const origin = { latitude: -25.28634496294947, longitude: -57.61144845788857 }
  /* navigator.geolocation = require("@react-native-community/geolocation");
  navigator.geolocation.getCurrentPosition((location) => {
    origin.longitude = location.coords.longitude; // longitud
    origin.latitude = location.coords.latitude; // latitude
  }); */
  /* Geolocalización.getCurrentPosition((información) =>
    consola.log(información)
  ); */
  console.log('ubicacion ', origin)
  /* const destination = {
    latitude: -25.3080949000692,
    longitude: -57.52305785973432,
  } */
  const destination = {
    latitude: -25.292330237176042,
    longitude: -57.60259716831371,
  }
  // -25.30213145483248, -57.540022137121184
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCLKbIZ6jt7oSZ-f3XZFUdUsvw18VUH2-M' // api key de google
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -25.28634496294947,
          longitude: -57.61144845788857,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        style={styles.map}
      >
        <MapView.Marker
          coordinate={{
            latitude: -25.28634496294947,
            longitude: -57.61144845788857,
          }}
        />
        <MapView.Marker
          coordinate={{
            latitude: -25.292330237176042,
            longitude: -57.60259716831371,
          }}
          icon={require('../../../../assets/iconos/comisariaLogo.png')}
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
