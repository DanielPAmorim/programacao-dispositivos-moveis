import { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { AuthContext } from "../contexts/AuthContext";

function Home() {
  const { usuario, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: "space-between" }}>
      <Text variant="titleMedium">Olá, {usuario.login}</Text>
      <Button
        style={{ marginBottom: 32 }}
        mode="contained"
        onPress={() => logout()}
      >
        Sair
      </Button>
    </View>
  );
}

export default Home;
