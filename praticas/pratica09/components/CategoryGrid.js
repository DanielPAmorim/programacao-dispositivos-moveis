import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { StoreContext } from "../contexts/StoreContext";

function CategoryGrid({item}){
    const navigation = useNavigation()
   const { categories } = useContext(StoreContext)
   return(
    <View>
  <Text variant="titleMedium">Categorias</Text>
  <FlatList
    	data={categories}
    	numColumns={2}
    	showsVerticalScrollIndicator={false}
    	renderItem={({ item }) => (
      	<View style={{ flex: 1, margin: 4 }}>
        	<Button
          	mode="outlined"
          	icon={item.icone}
          	onPress={() =>
            	navigation.navigate("Lojas", { categoria: item.nome })
          	}
        	>{item.nome}</Button>
      	</View>
    	)}
    	keyExtractor={(item, index) => `categoria-${index}`}
  />
</View>

   )
}

export default CategoryGrid;