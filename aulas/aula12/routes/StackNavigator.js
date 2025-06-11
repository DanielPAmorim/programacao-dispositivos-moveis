import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../contexts/AuthContext";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Registrar from "../screens/Registrar";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const { usuario } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {usuario.logado ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registrar" component={Registrar} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default StackNavigator;