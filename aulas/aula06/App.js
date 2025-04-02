import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";


function App() {
  return <SafeAreaProvider>
    <TaskScreen />
  </SafeAreaProvider>;
}

export default App;
