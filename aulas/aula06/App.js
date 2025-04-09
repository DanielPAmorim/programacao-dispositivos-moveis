import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";
import { TaskProvider } from "./contexts/TaskContext";


function App() {
  return <SafeAreaProvider>
    <TaskProvider>
    <TaskScreen />
    </TaskProvider>
  </SafeAreaProvider>;
}

export default App;
