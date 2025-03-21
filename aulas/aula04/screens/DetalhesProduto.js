import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function DetalhesProduto() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}> Detalhes do Produto</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{ uri: "https://picsum.photos/200/300" }}
        />
        <Text style={styles.productName}>Nome do Produto</Text>
        <Text style={styles.productDetail}>Descrição detalhada do produto</Text>
        <View style={styles.choice}>
          <View style={styles.quantity}>
            <TouchableOpacity>
              <View style={styles.buttonMinusPlus}>
                <Text style={styles.textMinusPlus}>-</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textQuantity}>
              <Text style={styles.textMinusPlus}>1</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.buttonMinusPlus}>
                <Text style={styles.textMinusPlus}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.price}>R$ 99,99</Text>
        </View>
        <View style={styles.buttonAdd}>
          <Text style={styles.textAdd}>Adicionar no Carrinho</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    padding: 16,
    backgroundColor: "lightblue",
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "darkblue",
  },
  container: {
    flex: 1,
    padding: 8,
  },
  photo: {
    height: 200,
    padding: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "darkblue",
  },
  productDetail: {
    fontSize: 12,
    color: "gray",
    marginBottom: 64,
  },
  choice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantity: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonMinusPlus: {
    height: 32,
    width: 32,
    backgroundColor: "lightblue",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textMinusPlus: {
    fontSize: 16,
    fontWeight: "600",
    color: "darkblue",
  },
  textQuantity: {
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
  },
  price: {
    fontSize: 24,
    fontWeight: "600",
    color: "darkblue",
  },
  buttonAdd: {
    borderColor: "darkblue",
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 32,
    backgroundColor: "lightblue",
  },
  textAdd: {
    color: "darkblue",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default DetalhesProduto;
