import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    // useEffect(() => {

    const myHeaders = new Headers()
    myHeaders.append('content-type', 'application/json')

    const raw = JSON.stringify({
      ciudad: 'Asuncion',
      barrio: 'Santa Maria',
    })

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,

      redirect: 'follow',
    }

    fetch(
      'https://node-mysql-isak.herokuapp.com/api/getAntecedentes/' + data,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.result[0][0])
        alert(
          `datos de los antecedentes ${result.result[0][0].ante_descripcion}`
        )
      })
      .catch((error) => console.log('error', error))
    // }, [])
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }
  // lol
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})
