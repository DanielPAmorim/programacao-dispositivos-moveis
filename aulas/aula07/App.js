import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Pilha from "./routes/Pilha";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Pilha/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
