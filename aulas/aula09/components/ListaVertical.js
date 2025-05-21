import { View, FlatList } from "react-native";
import { List, Text } from "react-native-paper";

const lojas = [
    "Restaurante Asa Sul",
    "Restaurante Asa Norte",
    "Restaurante Tagua",
    "Lanchonete Sudoeste",
    "Lanchonete Noroeste",
    "Bar Ceilandia",
    "Bar Nucleo",
    "Pizzaria Sobradinho"
];

function ListaVertical() {
    return <View>
        <Text variant="titleMedium">Lojas</Text>
        <FlatList 
            data={lojas}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => (
                <List.Item
                    title={item}
                    description="* 4,5"               
                />
            )}
        />
    </View>
}

export default ListaVertical;