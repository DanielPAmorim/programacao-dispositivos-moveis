import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Criar Conta</Text>
      </View>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Registrar" color="#6750A4" />
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
  input: {
    backgroundColor: "#E6E0E9",
    height: 56,
    paddingHorizontal: 16,
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#79747E",
    fontSize: 16,
    color: "#1C1B1F",
  },
  buttonContainer: { marginTop: 24, marginHorizontal: 8 },
});

export default RegisterScreen;
