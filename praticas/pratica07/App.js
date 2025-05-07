import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import RecoverScreen from "./screens/RecoverScreen";
import StackNavigator from "./routes/StackNavigator";
import MusicScreen from "./screens/MusicScreen";


function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MusicScreen/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
