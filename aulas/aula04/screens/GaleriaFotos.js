import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";

const imagens = [
  "https://picsum.photos/200?random=1",
  "https://picsum.photos/200?random=2",
  "https://picsum.photos/200?random=3",
  "https://picsum.photos/200?random=4",
  "https://picsum.photos/200?random=5",
  "https://picsum.photos/200?random=6",
  "https://picsum.photos/200?random=7",
  "https://picsum.photos/200?random=8",
  "https://picsum.photos/200?random=9",
];

function GaleriaFotos() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de fotos</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
            <TouchableOpacity style= {styles.photo} key={index} onPress={() => {}}>
                <Image style={{flex: 1}} source={{ uri: imagem }} />
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "lightblue",
    marginBottom: 8,
    elevation: 8,
  },
  appTitle: {
    color: "white",
    fontSize: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    gap: 1,
    justifyContent: "center"
    
  },
  photo:{
    height: 100,
    width: "32%"
  }
});

export default GaleriaFotos;
