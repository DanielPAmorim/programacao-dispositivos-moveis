import { StyleSheet, Text, View } from "react-native";

function GalleryScreen() {
  return (
    <View style= {styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Fotos</Text>
      </View>
      <View style= {styles.grid}>
        <View style= {styles.photo}>
          <Text>Foto 1</Text>
        </View>
        <View style= {styles.photo}>
          <Text>Foto 2</Text>
        </View>
        <View style= {styles.photo}>
          <Text>Foto 3</Text>
        </View>
        <View style= {styles.photo}>
          <Text>Foto 4</Text>
        </View>
        <View style= {styles.photo}>
          <Text>Foto 5</Text>
        </View>
        <View style= {styles.photo}>
          <Text>Foto 6</Text>
        </View>
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
    marginBottom:8,
  },
  appTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 28,
    lineHeight: 28,
    alignSelf:"center"
  },
  grid:{
    flexDirection:"row",
    flexWrap: "wrap",
    paddingLeft: 8,
    gap: 8,
  },
  photo:{
    width:"31%",
    height: 100,
    justifyContent:"center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#79747E",
  },
});

export default GalleryScreen;
