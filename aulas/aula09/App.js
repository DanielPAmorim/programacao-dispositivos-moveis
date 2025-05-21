import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes/MainNavigator";

function App() {
  return (
   <SafeAreaProvider>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
   </SafeAreaProvider>
  );
}

export default App;
