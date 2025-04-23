import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import AppBar from "../components/AppBar";

const Stack = createNativeStackNavigator();

function Pilha() {
    return (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} options={{headerShown: true, header: () => <AppBar title="Home"/>}}/>
          <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    );
}

export default Pilha;