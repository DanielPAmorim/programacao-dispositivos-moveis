import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RecoverScreen from '../screens/RecoverScreen';

const Stack = createNativeStackNavigator();


function StackNavigator() {
  <Stack.Navigator initialRouteName="Login">
  <Stack.Screen name="Login" component={LoginScreen} />
  <Stack.Screen name="RecuperarSenha" component={RecoverScreen} />
</Stack.Navigator>

}



export default StackNavigator;
