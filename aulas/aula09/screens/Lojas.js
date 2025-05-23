import { useContext, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Searchbar } from "react-native-paper";

import { LojaContext } from "../contexts/LojaContext";
import ListaVertical from "../components/ListaVertical";

function Lojas({ route }) {
  const { categoria } = route.params;
  const { carregando, buscarLojas } = useContext(LojaContext);
  const [filtro, setFiltro] = useState("");

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Searchbar
        value={filtro}
        onChangeText={setFiltro}
        placeholder={`Busca em ${categoria}`}
        onIconPress={() => buscarLojas(filtro)}
        onClearIconPress={() => buscarLojas("")}
        style={{ marginBottom: 8 }}
      />
      {carregando ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ListaVertical />
      )}
    </View>
  );
}

export default Lojas;