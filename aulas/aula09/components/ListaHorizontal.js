import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

const categorias = [
  "Restaurantes",
  "Lanchonetes",
  "Bares",
  "Pizzarias",
  "Mercados",
  "Soverterias",
  "Cafeterias",
];

function ListaHorizontal() {
  return (
    <View style={{ marginBottom: 8 }}>
      <Text variant="titleMedium" style={{ marginBottom: 8 }}>
        Categorias
      </Text>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, marginRight: 8 }}>
            <Button mode="outlined" onPress={() => {}}>
              {item}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default ListaHorizontal;