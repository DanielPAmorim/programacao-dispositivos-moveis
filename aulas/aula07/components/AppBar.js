import { View, Text } from "react-native";

function AppBar ({title}){
    return(
    <View style={{height: 64, backgroundColor: "blue", justifyContent: "center", paddingLeft: 16,}}>
        <Text style={{fontSize: 24, color: "white",}}>{title}</Text>
    </View>
    );
}

export default AppBar;