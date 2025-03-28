import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

function ContactScreen() {
  return <View style={styles.container}>
    <Appbar.Header>
        <Appbar.Content title= "Contatos" />
        <Appbar.Action icon="dots-vertical"/>
    </Appbar.Header>
  </View>;
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
})

export default ContactScreen;
