import { View, Text, StyleSheet, FlatList, Image , TouchableOpacity} from "react-native";

const mensagens = [
  {
    id: 1,
    avatar: "https://picsum.photos/200?random=1",
    nome: "Daniel",
    texto: "Olá Mundo!",
    horario: "01/01/2025 00:00",
  },
  {
    id: 2,
    avatar: "https://picsum.photos/200?random=2",
    nome: "João",
    texto: "Olá SubMundo!",
    horario: "02/02/2025 01:00",
  },
  {
    id: 3,
    avatar: "https://picsum.photos/200?random=3",
    nome: "Vitória",
    texto: "Olá!",
    horario: "03/03/2025 02:00",
  },
];

function Conversas() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Conversas</Text>
      </View>
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity>
          <View style={styles.conversation}>
            <Image style={styles.avatar} source={{uri: item.avatar}}/>
            <View style={{flex: 1}}>
              <View style={styles.contact}> 
                <Text>{item.nome}</Text>
                <Text>{item.horario}</Text>
              </View>
              <View>
                <Text>{item.texto}</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        )}
       />
    </View>
  );
}

const styles = StyleSheet.create({
    appBar: {
        height: 64,
        backgroundColor: "lightblue",
        padding: 16,
        justifyContent: "center",
        marginBottom: 8,
        elevation: 3,
    },
    appTitle: {
        fontSize: 24,
        color: "darkblue"
    },
    conversation: {
        height: 56,
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        padding: 16,
        flexDirection: "row",
        alignItems: "center"
    },
    avatar:{
        height: 48,
        width: 48,
        borderRadius: 48,
        marginRight: 16,
    },
    contact: {
        flexDirection: "row",
        justifyContent:"space-between"
    }
});

export default Conversas;
