import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, FlatList } from "react-native";
const allUsers = () => {
  const [usuarios, setUser] = React.useState([]);
  React.useEffect(() => {
    console.log("hola estoy en el componente pokemon");
    obtenerPokemon();
  }, []);
  const obtenerPokemon = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await data.json();
    setUser(users);
    console.log("usuarios", users);
  };

  return (
    <View>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Text styles={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default allUsers;
