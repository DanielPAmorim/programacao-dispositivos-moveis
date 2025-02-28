import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useData, useState } from 'react';

function Título(props) {
  return <Text>{props.children}</Text>
}

export default function App() {
  const [estado, setEstado] = useState(0);


  return (
    <View style={styles.container}>
      <Título>Meu App</Título> {/*Dentro do return pode ser substituído por Título text ="Meu app" */}
      <Text style={styles.título}>Isso é tudo pessoal!</Text>
      <Text style={styles.título}>{estado}</Text>
      <Button title= "Clique aqui"
        onPress={() => setEstado(estado + 1)}/> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  título: {
    fontSize: 32,
    paddingTop: 24,

  }
}
)