import { useContext, useState } from "react";
import { View, FlatList, Modal, StyleSheet } from "react-native";
import { Appbar, TextInput, Button, FAB } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem from "../components/TaskItem";

function TaskScreen() {
  const { tarefas, adicionar } = useContext(TaskContext);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [exibeModal, setExibeModal] = useState(false);
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem tarefa={item} />}
      />
      <FAB style={styles.fab} icon="plus" onPress={() => setExibeModal(true)} />
      <Modal visible={exibeModal} animationType="slide" transparent>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
          <TextInput style={styles.input} label="Nova Tarefa" value={novaTarefa} onChangeText={setNovaTarefa} mode="outlined" />
<Button style={styles.input} mode="contained" onPress={() => {
   if (novaTarefa.trim()) {
     adicionar(novaTarefa);
     setNovaTarefa("");
     setExibeModal(false);
   }
}}>Adicionar</Button>


            <Button onPress={() => setExibeModal(false)}>Cancelar</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: { position: "absolute", bottom: 16, right: 16 },
  modal: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: { backgroundColor: "#FFFFFF", padding: 20, borderRadius: 10 },
  input: { marginBottom: 8, },

});

export default TaskScreen;
