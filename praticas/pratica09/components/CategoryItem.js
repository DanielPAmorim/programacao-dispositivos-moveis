import { useContext } from "react";
import { FlatList, View } from "react-native";
import { Button, Text} from "react-native-paper"
import { StoreContext } from "../contexts/StoreContext";

function CategoryItem(){
const { categories } = useContext(StoreContext)
return(
    <View>
  <Text variant="titleMedium">Categorias</Text>
  <FlatList
    	style={{ marginBottom: 8 }}
    	data={categories}
    	horizontal
    	showsHorizontalScrollIndicator={false}
    	renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 4 }}>
          <Button mode="outlined" icon={item.icone} onPress={() => {}}>
            {item.nome}
          </Button>
        </View>
    	)}
    	keyExtractor={(item, index) => `categoria-${index}`}
  />
</View>

)
}

export default CategoryItem;