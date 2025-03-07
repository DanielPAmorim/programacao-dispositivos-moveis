import { View } from "react-native";

function App() {
  return (
    <View style={{ flex: 1, flexDirection: "row", backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "stretch",
          backgroundColor: "red",
        }}
      >
        <View
          style={{ height: 50, backgroundColor: "black" }}
        ></View>
        <View style={{ height: 50,  backgroundColor: "blue" }}></View>
        <View
          style={{ height: 50,  backgroundColor: "yellow" }}
        ></View>
      </View>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
    </View>
  );
}

export default App;
