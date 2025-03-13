import { View, Text, StyleSheet } from "react-native";

function PerfilScreen() {
    return <View style={styles.container}>
       <View style={styles.perfilSection}>
          <View style={styles.photo}></View>
          <View style={styles.perfilData}>
            <Text>Jose Reginaldo</Text>
            <Text>Desenvolvedor Senior</Text>
          </View>
       </View>
       <View>
         <Text>Habilidades</Text>
         <View style={styles.skills}>
            <Text>JS</Text>
            <Text>React</Text>
            <Text>React Native</Text>
         </View>
       </View>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  perfilSection: {
    flexDirection: "row"
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 48,
    backgroundColor: "lightgray"
  },
  perfilData:{
    padding: 16,
    justifyContent: "center"
  },
  skills:{
    flexDirection: "row",
    padding: 8,
    gap: 8
  }


});

export default PerfilScreen;