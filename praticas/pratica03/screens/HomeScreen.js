import { View, Text, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style= {styles.container}>
      <View style= {styles.appBar}>
        <Text>Logo</Text>
        <Text style= {styles.appTitle}>Título do App</Text>
        <Text>Ícone</Text>
      </View>
      <View style={styles.tabBar}>
        <Text>Início</Text>
        <Text>Busca</Text>
        <Text>Perfil</Text>
        <Text>Configurações</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
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
  tabBar: {
    backgroundColor: "#F3EDF7",
    color: "#1D1B20",
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 8,
    elevation: 3,
  },
});

export default HomeScreen;
