import { View, Text, Button} from "react-native"


function Perfil({ navigation, route }) {
    const {id, usuario} = route.params;
    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text>Perfil</Text>
            <Text> {id} - {usuario}</Text>
            <Button title="Voltar para Home" onPress={()=> navigation.goBack("Home")}/>
        </View>
    );
}

export default Perfil;