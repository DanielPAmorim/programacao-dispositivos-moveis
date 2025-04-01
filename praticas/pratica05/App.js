import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

function App() {
  return <SafeAreaProvider>
    <SettingsScreen />
  </SafeAreaProvider>;
}

export default App;
