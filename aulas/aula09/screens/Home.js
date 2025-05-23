import { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

import { LojaContext } from "../contexts/LojaContext";
import ListaVertical from "../components/ListaVertical";
import ListaHorizontal from "../components/ListaHorizontal";

function Home() {
  const { carregando, carregarDados } = useContext(LojaContext);

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {carregando ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItens: "center" }}
        >
          <ActivityIndicator size="large"/>
        </View>
      ) : (
        <>
          <ListaHorizontal />
          <ListaVertical />
        </>
      )}
    </View>
  );
}

export default Home;