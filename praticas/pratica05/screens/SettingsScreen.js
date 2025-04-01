import { View, ScrollView, StyleSheet } from "react-native";
import {
  Appbar,
  Text,
  Switch,
  Checkbox,
  RadioButton,
} from "react-native-paper";

function SettingsScreen() {
  return (
    <View style={StyleSheet.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Configurações" />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Definir tema</Text>
        <View>
          <Text>Modo Escuro</Text>
          <Switch value={true} onValueChange={() => {}} style={styles.switchItem} />
        </View>
        <Text style={styles.sectionTitle}>Notificações</Text>
        <View>
          <Checkbox.Item label="SMS" status={"unchecked"} onPress={() => {}} />
          <Checkbox.Item label="Push" status={"checked"} onPress={() => {}} />
        </View>
        <Text style={styles.sectionTitle}>Selecione seu idioma</Text>
        <RadioButton.Group onValueChange={(value) => {}} value={"pt"}>
          <View style={styles.radioItem}>
            <RadioButton value="pt" />
            <Text>Português</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="en" />
            <Text>Inglês</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="es" />
            <Text>Espanhol</Text>
          </View>
        </RadioButton.Group>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  switchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
  radioItem: { flexDirection: "row", alignItems: "center" },
});

export default SettingsScreen;
