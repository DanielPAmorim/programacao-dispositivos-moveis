import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import CriarConta from "../screens/CriarConta";
import RedefinirSenha from "../screens/RecuperarSenha";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Redefinir Senha">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Criar Conta" component={CriarConta} />
      <Stack.Screen name="Redefinir Senha" component={RedefinirSenha} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
