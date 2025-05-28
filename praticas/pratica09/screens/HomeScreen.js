import { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import { StoreContext }  from "../contexts/StoreContext";
import  CategoryItem from "../components/CategoryItem";
import StoreItem  from "../components/StoreItem";

function HomeScreen({navigation}){
const {loading} = useContext(StoreContext)
const {loadData} = useContext(StoreContext)
useEffect(()=> {
    loadData();
}, [])
return(
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
    {loading ? (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <>
        <CategoryItem />
        <StoreItem />
      </>
    )}
</View>

)
}

export default HomeScreen;