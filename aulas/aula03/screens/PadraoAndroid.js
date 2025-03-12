import { View, Text, StyleSheet } from "react-native";

function PadraoAndroid() {
  return (
    <View style={{ flex: 1, }}>
      <View style={styles.appBar}>
        <Text style={styles.apptitle}>Meu App</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 1</Text>
        <Text>Descrição</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
        <Text>Descrição 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
        <Text>Descrição 3</Text>
      </View>
      <View style={styles.fab}>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "gray",
    justifyContent: "center",
    padding: 16,
  },
  apptitle: { fontSize: 24, color: "white" },
  item: {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 16,
    justifyContent: "center"
  },
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    height: 48,
    width: 48,
    backgroundColor: "lightgray",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default PadraoAndroid;
