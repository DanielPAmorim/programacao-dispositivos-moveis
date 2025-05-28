import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoryScreen from "../screens/CategoryScreen";
import StoreScreen from "../screens/StoreScreen";

const Stack = createNativeStackNavigator();

function SearchNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Categorias" component={CategoryScreen} />
            <Stack.Screen name="Lojas" component={StoreScreen} />
        </Stack.Navigator>
      );
    }

export default SearchNavigator;
