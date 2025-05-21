import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import ListaVertical from "../components/ListaVertical";

function Lojas({ route }) {
  const { categoria } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        placeholder={`Busca em ${categoria}`}
        onIconPress={() => {}}
        onClearIconPress={() => {}}
        style={{ marginBottom: 8 }}
      />
      <ListaVertical />
    </View>
  );
}

export default Lojas;