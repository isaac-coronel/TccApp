// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from 'react'

// import all the components we are going to use
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native'
import { SearchBar } from 'react-native-elements'
// fetch("https://jsonplaceholder.typicode.com/posts")
const App = () => {
  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState([])
  const [masterDataSource, setMasterDataSource] = useState([])

  useEffect(() => {
    /* fetch("https://node-mysql-isak.herokuapp.com/api/getMultas", {
      method: "POST", // or 'PUT'
      body: JSON.stringify("data"), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      }); */
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
    // jkhv
    fetch(
      'https://node-mysql-isak.herokuapp.com/api/getLeyes/1',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setFilteredDataSource(result.result[0])
        setMasterDataSource(result.result[0])
      })
      .catch((error) => console.log('error', error))
  }, [])

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // const itemData = item.title
        const itemData = item.capi_descripcion
          ? item.capi_descripcion.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setFilteredDataSource(newData)
      setSearch(text)
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id_capitulo}.{item.capi_descripcion.toUpperCase()}
      </Text>
    )
  }

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

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id_articulo + ' Detalles : ' + item.arti_descripcion)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Buscar..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
})

export default App
