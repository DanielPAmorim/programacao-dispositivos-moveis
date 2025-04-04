import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Appbar,
  TextInput,
  FAB,
  Modal,
  List,
  Button,
  Divider,
  Text,
} from "react-native-paper";

function TaskScreen() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [exibeModal, setExibeModal] = useState(false);
  const [exibeAlerta, setExibeAlerta] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      {refresh && <></>}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <List.Item
              onLongPress={() => {setExibeAlerta(true);}}
              onPress={() => {
                item.concluida = !item.concluida;
                setRefresh(!refresh);
              }}
              title={item.nome}
              right={(props) => (
                <List.Icon
                  {...props}
                  icon={
                    item.concluida ? "check-circle-outline" : "circle-outline"
                  }
                />
              )}
            />
            <Divider />
          </>
        )}
      />

      <FAB onPress={() => setExibeModal(true)} icon="plus" style={styles.fab} />
      <Modal visible={exibeModal}>
        <View style={styles.modal}>
          <TextInput
            label="Nova Tarefa"
            onChangeText={(text) => setTarefa(text)}
          />
          <Button
            onPress={() => {
              if (tarefa) {
                setTarefas([
                  ...tarefas,
                  { id: tarefas.length + 1, nome: tarefa, concluida: false },
                ]);
              }
              setTarefa(""), setExibeModal(false);
            }}
          >
            Salvar
          </Button>
        </View>
      </Modal>
      <Modal visible={exibeAlerta}>
        <View style={styles.modal}>
          <Text variant="labelLarge" style={styles.alertTitle}>Deseja apagar a tarefa?</Text>
          <View style={styles.buttonAlert}>
            <Button onPress={() => setExibeAlerta(false)}>Não</Button>
            <Button onPress={() => setExibeAlerta(false)}>Sim</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  modal: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    margin: 8,
  },
  alertTitle: {
    alignSelf: "center",
  },
  buttonAlert: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default TaskScreen;
