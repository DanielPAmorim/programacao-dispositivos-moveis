import { View, ScrollView, StyleSheet } from "react-native";
import { Avatar, Card, Button, List, Text } from "react-native-paper";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.profileSection}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://picsum.photos/200" }}style={styles.profileImage}
        />
        <Card>
          <Card.Content>
            <Text variant="titleLarge">João Silva</Text>
            <Text variant="bodyMedium">joao.silva@example.com</Text>
            <Text variant="bodyMedium">(11) 99999-9999</Text>
          </Card.Content>
        </Card>
        <Button mode="contained" style={styles.button}>Editar Perfil</Button>
        <List.Section>
          <List.Subheader style={styles.sectionTitle}>Configurações da Conta</List.Subheader>
          <List.Item
            title="Privacidade"
            left={() => <List.Icon icon="lock" />}
            onPress={() => {}}
          />
          <List.Item
            title="Notificações"
            left={() => <List.Icon icon="bell" />}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileSection:{
    flexGrow: 1,
    padding: 16,
  },
  profileImage: {
    alignSelf: "center",
    marginBottom: 16,
  },
  button: {
    marginTop: 16
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },

});

export default ProfileScreen;
