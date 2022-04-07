/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
// eslint-disable-next-line no-unused-vars
import CryptoES from 'crypto-js'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])
  function setAuditoriaConsulta(detalles) {
    const myHeaders = new Headers()
    myHeaders.append('content-type', 'application/json')

    const raw = JSON.stringify({
      idUsuario: 1,
      detalles,
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch(
      'https://node-mysql-isak.herokuapp.com/api/setHistorialAuditoria',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log('error', error)
        alert('Usuario sin registro de antecedentes')
      })
  }
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
        try {
          const datos =
            result.result[0][0].pers_nombre +
            ' ' +
            result.result[0][0].pers_apellido +
            ' / ' +
            result.result[0][0].pers_ci +
            ' / ' +
            result.result[0][0].ante_descripcion
          setAuditoriaConsulta(datos)
          const CryptoJS = require('crypto-js')

          // Encrypt
          const ciphertext = CryptoJS.AES.encrypt(
            'my message',
            'secret key 123'
          ).toString()

          // Decrypt
          const bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123')
          const originalText = bytes.toString(CryptoJS.enc.Utf8)
          console.log(ciphertext)
          console.log(originalText) // 'my message'
        } catch (error) {
          console.log(error)
        }
        // eslint-disable-next-line spaced-comment
        //mjn
        alert(
          `Datos de los antecedentes 
          Nombre: ${result.result[0][0].pers_nombre}
          Apellido: ${result.result[0][0].pers_apellido}
          C.I: ${result.result[0][0].pers_ci}
          Antecedente: ${result.result[0][0].ante_descripcion}`
        )
      })
      .catch((error) => {
        console.log('error', error)
        alert('Usuario sin registro de antecedentes')
      })
    // }, [])
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`)
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
        <Button title="Nueva consulta" onPress={() => setScanned(false)} />
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
