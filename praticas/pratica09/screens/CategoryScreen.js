import { View } from "react-native";
import  CategoryGrid from "../components/CategoryGrid";

function CategoryScreen({navigation}){
return(
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
  	<CategoryGrid />
</View>

)
}

export default CategoryGrid;