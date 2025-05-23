import { useContext } from "react";
import { View, FlatList } from "react-native";
import { List, Text } from "react-native-paper";

import { LojaContext } from "../contexts/LojaContext";

function ListaVertical() {
  const { lojas } = useContext(LojaContext);

  return (
    <View>
      <Text variant="titleMedium">Lojas</Text>
      <FlatList
        data={lojas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <List.Item title={item.nome} description={`* ${item.nota}`} />
        )}
      />
    </View>
  );
}

export default ListaVertical;