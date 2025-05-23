import { useContext } from "react";
import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import { LojaContext } from "../contexts/LojaContext";
function Grid() {
    const navigation = useNavigation();
    const { categorias } = useContext(LojaContext);
  return (
    <View>
      <Text variant="titleMedium" style={{marginBottom:8}}>Categorias</Text>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginBottom: 8, marginRight: 8 }}>
            <Button icon= {item.icone} contentStyle={{flexDirection: "row-reverse "}} mode="outlined" onPress={() => navigation.navigate("Lojas", {categoria: item.nome})}>
              {item.nome}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default Grid;