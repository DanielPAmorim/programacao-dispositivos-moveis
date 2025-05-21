import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import SearchNavigator from "./SearchNavigator";

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => <MaterialIcons {...props} name="home" />,
        }}
      />
      <Tab.Screen
        name="Busca"
        component={SearchNavigator}
        options={{
          tabBarIcon: (props) => <MaterialIcons {...props} name="search" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;