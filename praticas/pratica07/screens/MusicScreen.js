import {View,Text,Image,ScrollView,StyleSheet,TouchableOpacity,} from "react-native";

const musicas = [
    {
      id: 1,
      nome: "Música 1",
      art: "Artista 1",
      img: "https://picsum.photos/200/300?random=1",
    },
    {
        id: 2,
        nome: "Música 2",
        art: "Artista 2",
        img: "https://picsum.photos/200/300?random=1",
      },
      {
        id: 3,
        nome: "Música 3",
        art: "Artista 3",
        img: "https://picsum.photos/200/300?random=1",
      },
  ];
function MusicScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <View style ={styles.appBar}>
            <Text style={styles.appTitle}>Músicas</Text>
          </View>
          <ScrollView>
            {musicas.map((musicas) => (
              <TouchableOpacity key={musicas.id} style={styles.item} onPress={() => {}}>
                <Image source={{ uri: musicas.img }} style={styles.itemAvatar} />
                <View>
                  <Text style={styles.itemName}>{musicas.nome}</Text>
                  <Text style={styles.itemArt}>{musicas.art}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity onPress={() => {}} style={styles.fab}>
            <Text style={styles.fabIcon}>+</Text>
          </TouchableOpacity>
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
      justifyContent: "center",
      marginBottom: 8,
    },
    appTitle: { color: "#FFFFFF", fontSize: 22, fontWeight: "400", lineHeight: 28, alignSelf: "center", },
    item: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", paddingHorizontal: 16, paddingVertical: 12, marginBottom: 8, height: 56, },
    itemAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 16, },
    itemName: { fontSize: 16, fontWeight: "500", color: "#1C1B1F", },
    itemPhone: { fontSize: 14, color: "#49454F", },
    fab: { position: "absolute", right: 16, bottom: 16, backgroundColor: "#E8DEF8", borderRadius: 16, width: 56, height: 56, justifyContent: "center", alignItems: "center", elevation: 3, },
    fabIcon: { color: "#1C1B1F", fontSize: 24, fontWeight: "400", },
  
  
  },
  
  );
  
  export default MusicScreen;
  