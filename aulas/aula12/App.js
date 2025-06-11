import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./contexts/AuthContext";
import StackNavigator from "./routes/StackNavigator";

function App(){
  return (
<SafeAreaProvider>
  <AuthProvider>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  </AuthProvider>
</SafeAreaProvider>
  );
}

export default App;