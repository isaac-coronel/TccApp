import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native'
import { Text, Card, Button, Icon } from 'react-native-elements'
import mapsCamino from './mapsCamino'

const comisariaData = [
  {
    Comisaria: 'Primera Metropolitana 53',
    Direccion: 'Ita Ybate esq Centenario 000',
    Ciudad: 'luque',
    Barrio: 'Molino',
    Dependencia: 'Primera Instancia',
    telefono: '(021) 666 666',
    info: 'Comisaria fundada el 10/01/1950 por Cristobal Colon.',
    // avatar: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg",
  },
]
const comisarioData = [
  {
    Nombre: 'Isaac Coronel',
    Edad: '26 años',
    Licencia: 'Activa',
  },
]

// type CardsComponentsProps = {};

const Cards = () => {
  const [masterDataSource, setMasterDataSource] = useState([])
  const [masterDataSourceComisario, setMasterDataSourceComisario] = useState([])
  useEffect(() => {
    const myHeaders = new Headers()
    myHeaders.append('content-type', 'application/json')

    const raw = JSON.stringify({
      ciudad: 'Asuncion',
      barrio: 'Santa Maria',
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }

    fetch(
      'https://node-mysql-isak.herokuapp.com/api/getComisaria',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.result[0][0])
        const a = []
        a.push(result.result[0][0])
        setMasterDataSource(a)
        setMasterDataSourceComisario(result.result[0])
        console.log(comisariaData)
      })
      .catch((error) => console.log('error', error))
  }, [])

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    )
  }
  const ItemView = ({ item }) => {
    console.log('item en la nueva funcion', item)
    return (
      // Flat List Item
      <Card style={styles.cardContainer}>
        <Card.Title>Comisaria</Card.Title>
        <View style={styles.container}>
          <Image
            style={styles.comisario}
            resizeMode="cover"
            source={require('../../../../assets/iconos/comisariaLogo.png')}
          />
        </View>
        <Card.Divider />

        <View style={styles.user}>
          <Text style={styles.name}>Nombre: </Text>
          <Text style={styles.name}>{item.comi_descripcion}</Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Direccion: </Text>
          <Text style={styles.name}>
            {item.dire_calle_1 + ' ' + item.dire_calle_2}
          </Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Ciudad: </Text>
          <Text style={styles.name}>{item.Ciudad_id_ciudad}</Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Barrio: </Text>
          <Text style={styles.name}>{item.Barrio_id_barrio}</Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Dependencia: </Text>
          <Text style={styles.name}>{item.comi_descripcion}</Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Telefono: </Text>
          <Text style={styles.name}>{item.pers_ci}</Text>
        </View>
      </Card>
    )
  }
  const ItemViewComisario = ({ item }) => {
    return (
      // Flat List Item

      <Card>
        <Card.Title>{item.carg_descripcion}</Card.Title>
        <View style={styles.container}>
          <Image
            style={styles.comisario}
            resizeMode="cover"
            source={require('../../../../assets/iconos/subComisarioLogo.png')}
          />
        </View>
        <Card.Divider />
        <View style={styles.user}>
          <Text style={styles.name}>Nombre: </Text>
          <Text style={styles.name}>
            {item.pers_nombre + ' ' + item.pers_apellido}
          </Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Cedula de Identidad: </Text>
          <Text style={styles.name}>{item.pers_ci}</Text>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Licencia: </Text>
          <Text style={styles.name}>{item.id_direccion}</Text>
        </View>
      </Card>
    )
  }
  const ItemViewGeneral = ({ item }) => {
    return (
      // Flat List Item
      <Card>
        <Card.Title>{item.comi_descripcion}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          /* source={{
                //uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                require("../../../assets/iconos/comisariaLogo.png")
              }} */
          source={require('../../../../assets/iconos/comisariaLogo.png')}
        />
        <Text style={{ marginBottom: 10 }}>{comisariaData[0].info}</Text>
        <Button
          icon={
            <Icon
              name="place"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
            />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Como llegar?"
          /* onPress={() =>
            navigation.navigate(
              mapsCamino(-25.30213145483248, -57.540022137121184)
            )
          } */
        />
      </Card>
    )
  }
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={masterDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
          <FlatList
            data={masterDataSourceComisario}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemViewComisario}
          />
          <FlatList
            data={masterDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemViewGeneral}
          />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    color: '#33A6FF',
  },
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  comisario: {
    // width: Dimensions.get("window").width, // Ancho de ventana

    // position: "absolute", // Posicionamiento
    width: 30,
    height: 30,
    marginRight: 30,
  },
})

export default Cards
