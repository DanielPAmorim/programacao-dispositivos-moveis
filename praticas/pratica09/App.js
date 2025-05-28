import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { StoreProvider } from "./contexts/StoreContext";
import MainNavigator from "./routes/MainNavigator";
function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
