import { SafeAreaProvider } from "react-native-safe-area-context";
import { TaskProvider } from "./contexts/TaskContext";
import TaskScreen from "./screens/TaskScreen";
function App() {
  return <SafeAreaProvider>
    <TaskProvider>
    <TaskScreen></TaskScreen>
    </TaskProvider>
    
  </SafeAreaProvider>;
}

export default App;
