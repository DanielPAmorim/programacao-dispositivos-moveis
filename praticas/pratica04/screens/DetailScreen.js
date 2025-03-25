import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Detalhes do Produto</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.itemImage}
        />
        <Text style={styles.itemName}>Nome do Produto</Text>
        <Text style={styles.itemDescription}>
          Descrição detalhada do produto. Aqui vai um texto explicativo sobre o
          produto em questão.
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>R$ 99,99</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonTitle}>-</Text>
            </TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
              <Text style={styles.buttonTitle}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button title="Adicionar ao Carrinho" color="#6750A4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFBFE" },
  appBar: {
    backgroundColor: "#6750A4",
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    alignSelf: "center",
  },
  item: { paddingHorizontal: 8 },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 12,
    marginVertical: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: "500",
    color: "#1C1B1F",
    marginBottom: 8,
  },
  itemDescription: { fontSize: 16, color: "#49454F", marginBottom: 16 },
  priceContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  itemPrice: { fontSize: 22, fontWeight: "500", color: "#6750A4" },
  buttonContainer: { flexDirection: "row", alignItems: "center" },
  button: {
    backgroundColor: "#E8DEF8",
    padding: 12,
    borderRadius: 100,
    marginHorizontal: 8,
  },
  buttonTitle: { color: "#1C1B1F", fontSize: 18, fontWeight: "500" },
  itemQuantity: { fontSize: 18, fontWeight: "500", color: "#1C1B1F" },
});

export default DetailScreen;
