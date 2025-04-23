import { View, Text, Button} from "react-native"


function Home({ navigation }) {
    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Home</Text>
            <Button title="Ir para Perfil" onPress={()=> navigation.navigate("Perfil", {id:1, usuario: "Daniel"}) }/>
        </View>
    );
}

export default Home;