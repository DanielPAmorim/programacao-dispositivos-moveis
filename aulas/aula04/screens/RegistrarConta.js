import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

function RegistrarConta() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Registrar Conta</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <TextInput multiline placeholder="Nome" style={styles.input} />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            style={styles.input}
          />
          <TextInput secureTextEntry placeholder="Senha" style={styles.input} />
          <TextInput
            keyboardType="numeric"
            secureTextEntry
            placeholder="Confirmar Senha"
            style={styles.input}
          />
          <Button title="Registrar" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    backgroundColor: "darkblue",
    padding: 16,
    justifyContent: "center",
    marginBottom: 8,
    elevation: 3,
  },
  appTitle: {
    color: "white",
    fontSize: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  input: {
    backgroundColor: "lightblue",
    padding: 16,
    borderBottomWidth: 1,
    borderBlockColor: "blue",
    marginBottom: 16,
    borderRadius: 16,
  },
});

export default RegistrarConta;
