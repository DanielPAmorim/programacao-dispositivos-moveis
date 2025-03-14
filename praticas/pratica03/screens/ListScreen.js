import { StyleSheet, Text, View } from "react-native";

function ListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Listagem de Itens</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 1</Text>
        <Text style={styles.itemSubTilte}>Descrição breve do item 1.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 2</Text>
        <Text style={styles.itemSubTilte}>Descrição breve do item 2.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 3</Text>
        <Text style={styles.itemSubTilte}>Descrição breve do item 3.</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Título do Item 4</Text>
        <Text style={styles.itemSubTilte}>Descrição breve do item 4.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },

  appBar: {
    backgroundColor: "#6750A4",
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "center",
    marginBottom: 8,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    alignSelf: "center",
  },
  item: {
    backgroundColor: "#FEF7FF",
    height: 72,
    borderBottomWidth: 1,
    borderBottomColor: "#79747E",
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
  },
  itemTitle: {
    color: "#1D1B20",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  itemSubtitle: {
    color: "#49454F",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 20,
  },
});

export default ListScreen;
