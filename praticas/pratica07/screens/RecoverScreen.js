import { View, ScrollView, StyleSheet } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";

function RecoverScreen({ navigation }) {
  return(
    <View style={styles.container}>
        <TextInput style={styles.input} label="E-mail" mode="outlined"/>
        <Button mode="contained" onPress={() => {}} style={styles.input}>
          Recuperar Senha
        </Button>
        <Text style={styles.info}>
          Voltar para o <Text style={styles.link}>Login</Text>
        </Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
    input: {
        marginBottom: 16,
      },
      link: {
        color: "#6750A4",
      },
      buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
      },
      info: {
        textAlign: "center",
        marginBottom: 16,
      },
    
});

export default RecoverScreen;
